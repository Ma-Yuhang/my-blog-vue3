<template>
  <div v-show="isShow" class="to-top-containter" @click="handleClick">Top</div>
</template>

<script setup>
import { watch, inject, ref } from 'vue';
import { debounce } from '@/utils';

const $emit = defineEmits(['top']);
const { scrollBottom, scrollEle } = inject('scrollBottom');
const isShow = ref(false);

const setShow = () => {
  if (scrollEle.value.scrollTop >= 500) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
};
const handleClick = () => {
  scrollEle.value.scrollTop = 0;
};
watch(scrollBottom, debounce(setShow));
</script>

<style lang="scss" scoped>
.to-top-containter {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  line-height: 50px;
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  z-index: 99;
  background-color: $gray;
  cursor: pointer;
}
</style>
