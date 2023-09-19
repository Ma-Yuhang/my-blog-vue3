<template>
  <div class="article-toc-container">
    <h2>目录</h2>
    <MenuList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue';
import MenuList from '../MenuList';
import { debounce } from '@/utils';

const props = defineProps(['toc']);

let activeAnchor = ref('');

// 根据toc数组生成带选中的新数组
const tocWithSelect = computed(() => {
  function getToc(toc = []) {
    return toc.map((item) => {
      return {
        ...item,
        isSelected: item.anchor == activeAnchor.value,
        children: getToc(item.children),
      };
    });
  }
  return getToc(props.toc);
});

// 根据toc数组生成doms数组
const doms = computed(() => {
  const doms = [];
  const addToc = (toc) => {
    for (const t of toc) {
      doms.push(document.getElementById(t.anchor));
      if (t.children && t.children.length) {
        addToc(t.children);
      }
    }
  };
  addToc(props.toc);
  return doms;
});

const handleSelect = (item) => {
  location.hash = item.anchor;
};

const setActiveAnchor = () => {
  activeAnchor.value = '';
  const range = 200; // 设置范围
  for (const dom of doms.value) {
    if (!dom) {
      continue;
    }
    const top = dom.getBoundingClientRect().top;
    if (top > 0 && top <= range) {
      // 在范围内
      activeAnchor.value = dom.id;
      return;
    } else if (top > range) {
      // 在范围下方
      return;
    } else {
      // 在范围上方
      activeAnchor.value = dom.id;
    }
  }
};

// 在detail.vue页面中提供滚动条距离底部的距离
let { scrollBottom } = inject('scrollBottom');
// 监听滚动条的改变(防抖)
watch(scrollBottom, debounce(setActiveAnchor));
</script>

<style scoped lang="scss">
.article-toc-container {
  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    padding-bottom: 10px;
  }
}
</style>
