<template>
  <div class="article-toc-container">
    <h2>目录</h2>
    <MenuList :list="toc" @select="handleSelect" />
  </div>
</template>

<script setup>
import MenuList from '../MenuList';
defineProps(['toc']);
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
