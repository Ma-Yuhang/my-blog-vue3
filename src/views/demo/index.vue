<template>
  <div>
    demo练习
    <button @click="goCarousel">轮播图页面</button>
    <button @click="goTodo">Todo页面</button>
    <button @click="goLongList">长列表优化</button>
    <button @click="goLoading">loading页面</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 路由对象
const $router = useRouter()

const goTodo = () => {
  $router.push('/demo/todo')
}
const goCarousel = () => {
  $router.push('/demo/carousel')
}
const goLongList = () => {
  $router.push('/demo/longList')
}
const goLoading = () => {
  $router.push('/demo/loading')
}
</script>

<style scoped></style>