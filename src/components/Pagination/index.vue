<template>
  <div class="pagination-containter" v-if="totalPage > 1">
    <button
      class="btn"
      :class="{ disabled: currentPage === 1 }"
      @click="changePageHandle(1)"
    >
      <Icon type="firstPage" size="12px" />
    </button>
    <button
      class="btn"
      :class="{ disabled: currentPage === 1 }"
      @click="changePageHandle(currentPage - 1)"
    >
      <Icon type="left" size="12px" />
    </button>
    <button
      class="btn"
      v-for="item in visiablePage"
      :key="item"
      :class="{ actived: currentPage === item }"
      @click="changePageHandle(item)"
    >
      {{ item }}
    </button>
    <button
      class="btn"
      :class="{ disabled: currentPage === totalPage }"
      @click="changePageHandle(currentPage + 1)"
    >
      <Icon type="right" size="12px" />
    </button>
    <button
      class="btn"
      :class="{ disabled: currentPage === totalPage }"
      @click="changePageHandle(totalPage)"
    >
      <Icon type="lastPage" size="12px" />
    </button>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon/index.vue';
import { computed } from 'vue';
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  visiableNumber: {
    type: Number,
    default: 10,
  },
});
const $emit = defineEmits(['update:current-page', 'current-page']);
// 计算出总页数
const totalPage = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});
// 计算出显示的最小页数
const minPage = computed(() => {
  let min = props.currentPage - Math.floor(props.pageSize / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
});
// 计算出显示的最大页数
const maxPage = computed(() => {
  let max = minPage.value + props.visiableNumber - 1;
  if (max > totalPage.value) {
    max = totalPage.value;
  }
  return max;
});
// 计算出遍历的数字页码
const visiablePage = computed(() => {
  let pageArr = [];
  for (let i = minPage.value; i <= maxPage.value; i++) {
    pageArr.push(i);
  }
  return pageArr;
});
// 点击页码
const changePageHandle = (page) => {
  if (page < 1) {
    page = 1;
  } else if (page > totalPage.value) {
    page = totalPage.value;
  }
  if (page === props.currentPage) {
    return;
  }
  $emit('update:current-page', page);
  $emit('current-page', page);
};
</script>

<style lang="scss" scoped>
.pagination-containter {
  display: flex;
  align-items: center;
  .btn {
    border: 0;
    background-color: inherit;
    font-size: 16px;
    cursor: pointer;
    line-height: 16px;
    vertical-align: baseline;
    width: 30px;
    &:not(.disabled):hover {
      color: $gray;
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
  .actived {
    font-weight: 700;
  }
}
</style>
