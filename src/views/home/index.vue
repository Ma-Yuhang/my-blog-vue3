<template>
  <div>
    home
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script setup>
import { getBannerList } from '@/api/banner.js';
const handleClick = async () => {
  const res = await getBannerList();
  console.log(res);
};
</script>

<style scoped></style>
