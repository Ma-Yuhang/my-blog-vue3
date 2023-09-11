<template>
  <div class="long-list-item">
    <span>id: {{ item.id }}</span>
    <span>count: {{ item.count }}</span>
    <span>age: {{ item.id }}</span>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>

<style lang="scss" scoped>
.long-list-item {
  text-align: center;
  height: 54px;
  display: grid;
  padding: 1em;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>