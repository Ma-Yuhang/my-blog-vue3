<template>
  <i :class="`iconfont ${fontClass}`" :style="{fontSize: size, color}"></i>
</template>

<script setup>
import fontMap from './index.json'
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  size: {
    type: String,
  },
  color: {
    type: String
  }
});
const fontClass = computed(() => {
    return fontMap[props.type]
})
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4241670_ux2siyyw0b.css';
</style>
