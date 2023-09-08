<template>
  <div class="empty-containter">
    <div class="empty-main">
      <slot></slot>
    </div>
    <div class="empty-text" :style="{color: textColor}">{{ text }}</div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    default: '无数据',
  },
  textColor: {
    type: String,
    default: '#bfbfbf'
  }
});
</script>

<style scoped>
.empty-containter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.empty-text {
  margin-top: 40px;
}
</style>
