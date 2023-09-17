<template>
  <div class="article-toc-container">
    <h2>目录</h2>
    <MenuList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MenuList from '../MenuList';
const props = defineProps(['toc']);

let isSelected = ref('article-md-title-3');

// 根据toc数组生成带选中的新数组
const tocWithSelect = computed(() => {
  function getToc(toc = []) {
    return toc.map((item) => {
      return {
        ...item,
        isSelected: item.anchor == isSelected.value,
        children: getToc(item.children),
      };
    });
  }
  return getToc(props.toc);
});

const handleSelect = (item) => {
  location.hash = item.anchor;
};
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
