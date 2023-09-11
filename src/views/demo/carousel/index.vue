<template>
  <div class="container">
    <div style="margin-bottom: 20px">
      <button @click="prev">上一张</button>
      <button @click="next">下一张</button>
    </div>
    <transition :name="`${deirection}-img`">
      <img class="img" :key="index" :src="curImg" />
    </transition>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
let imgs = reactive([
  'https://img0.baidu.com/it/u=2258141529,1201825071&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1168',
  'https://img1.baidu.com/it/u=2805604174,586521884&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img1.baidu.com/it/u=2555904807,2390319494&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500',
]);
let index = ref(0);
// 上一张还是下一张
let deirection = ref('');
const curImg = computed(() => {
  return imgs[index.value];
});
const maxIndex = computed(() => {
  return imgs.length - 1;
});

const next = () => {
  index.value++;
  deirection.value = 'next';
  if (index.value >= maxIndex.value) {
    index.value = 0;
  }
};
const prev = () => {
  index.value--;
  deirection.value = 'prev';
  if (index.value <= 0) {
    index.value = maxIndex.value;
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}

.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.next-img-leave-active,
.next-img-enter-active,
.prev-img-leave-active,
.prev-img-enter-active {
  transition: 0.5s;
}

.next-img-leave-to,
.next-img-enter-from,
.prev-img-leave-to,
.prev-img-enter-from {
  opacity: 0;
}

.next-img-enter-from,
.prev-img-leave-to {
  transform: translateX(200px);
}

.next-img-leave-to,
.prev-img-enter-from {
  transform: translateX(-200px);
}
</style>
