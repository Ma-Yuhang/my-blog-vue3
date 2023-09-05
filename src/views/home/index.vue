<template>
  <div>
    app组件
    <button @click="goCarousel">轮播图页面</button>
    <button @click="goTodo">Todo页面</button>
    <button @click="goLongList">长列表优化</button>
    <button @click="goLoading">loading页面</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 路由对象
const $router = useRouter()

const goTodo = () => {
  $router.push('/todo')
}
const goCarousel = () => {
  $router.push('/carousel')
}
const goLongList = () => {
  $router.push('/longList')
}
const goLoading = () => {
  $router.push('/loading')
}
</script>

<style scoped></style>