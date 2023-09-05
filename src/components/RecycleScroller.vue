<template>
  <div class="recycle-scroller-container" @scroll="setPools" ref="container">
    <div class="recycle-scroller-wrapper" :style="{ height: `${totalHeight}px` }">
      <div class="recycle-scroller-item" v-for="poolsItem in pools" :key="poolsItem.item[keyField]"
        :style="{ transform: `translateY(${poolsItem.position}px)` }">
        <slot :item="poolsItem.item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const { items, itemHeight } = defineProps({
  // 数据
  items: {
    type: Array,
    default: []
  },
  // 每个数据的高度
  itemHeight: {
    type: Number,
    default: 0
  },
  // 传递过来的属性中哪个是唯一且稳定的编号
  keyField: {
    type: String,
    default: 'id'
  }
})
onMounted(() => {
  // 设置渲染池数据
  setPools()
})

// 总高度
const totalHeight = computed(() => {
  return items.length * itemHeight
})
// 当前页面中渲染的数据
// {item: 原始数据, position: 该数据对应的偏移位置}
let pools = ref([])

// 拿到容器的ref对象
let container = ref()
function setPools() {
  // console.log(container);
  let scrollTop = container.value.scrollTop
  let height = container.value.clientHeight
  let startIndex = Math.floor(scrollTop / itemHeight)
  let endIndex = Math.ceil((scrollTop + height) / itemHeight)

  let prev = startIndex * itemHeight
  pools.value = items.slice(startIndex, endIndex).map((item, i) => {
    return {
      item,
      position: prev + i * itemHeight
    }
  })
}
</script>

<style scoped>
.recycle-scroller-container {
  overflow: auto;
}

.recycle-scroller-wrapper {
  position: relative;
}

.recycle-scroller-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>