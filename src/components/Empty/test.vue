<template>
  <div class="home">
    <Empty text="暂无数据">
      <Icon type="empty" size="200px" color="#bfbfbf"/>
    </Empty>
  </div>
</template>

<script setup>
import Empty from '@/components/Empty'
import Icon from '@/components/Icon'
</script>

<style scoped>
.home {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
