<template>
  <div class="empty-containter">
    <div class="empty-main">
      <slot>
        <Icon type="empty" size="200px" color="#bfbfbf" />
      </slot>
    </div>
    <div class="empty-text" :style="{ color: textColor }">{{ text }}</div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon';
defineProps({
  text: {
    default: '无数据',
  },
  textColor: {
    type: String,
    default: '#bfbfbf',
  },
});
</script>

<style lang="scss" scoped>
.empty-containter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .empty-text {
    margin-top: 40px;
  }
}
</style>
