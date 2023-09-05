<template>
  <div class="container">
    <div>
      <button @click="deleteNum">删除</button>
      <button @click="addNum">添加</button>
    </div>
    <transition-group tag="ul" name="nums">
      <li v-for="item in nums" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const nums = reactive([1, 2, 3, 4, 5])
const next = ref(6)

const addNum = () => {
  const s = Math.floor(Math.random() * nums.length)
  nums.splice(s, 0, next.value)
  next.value++
}
const deleteNum = () => {
  const s = Math.floor(Math.random() * nums.length)
  nums.splice(s, 1)
}
</script>

<style scoped>
.container {
  width: 500px;
  margin: 0 auto;
}
.nums-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.nums-enter-active,
.nums-leave-active,
.nums-move {
  transition: 1s;
}
.nums-leave-active {
  position: absolute;
}
.nums-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>