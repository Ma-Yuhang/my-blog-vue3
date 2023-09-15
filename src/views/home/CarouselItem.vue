<template>
  <div
    class="carousel-item-containter"
    ref="containterEle"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="img" ref="imgEle" :style="imagePosition">
      <ImageLoading
        :src="banner.bigImg"
        :placeholder="banner.midImg"
        @load="showText"
      />
    </div>
    <div class="title" ref="titleEle">{{ banner.title }}</div>
    <div class="desc" ref="descEle">{{ banner.description }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed, onUnmounted } from 'vue';
import ImageLoading from '@/components/ImageLoading';
defineProps(['banner']);

// title宽度
let titleWidth = ref(0);
let titleEle = ref(null);
// desc宽度
let descWidth = ref(0);
let descEle = ref(null);

let containterEle = ref(null);
// 外层容器的尺寸
let containterSize = reactive({
  width: 0,
  height: 0,
});
// 里面容器的尺寸
let innerSize = reactive({
  width: 0,
  height: 0,
});
// 鼠标的信息
let mouseInfo = reactive({
  x: 0,
  y: 0,
});
let imgEle = ref(null);

onMounted(() => {
  titleWidth.value = titleEle.value.clientWidth;
  descWidth.value = descEle.value.clientWidth;
  setSize();
  mouseInfo.x = center.value.x;
  mouseInfo.y = center.value.y;
  window.addEventListener('resize', setSize);
});
onUnmounted(() => {
  window.removeEventListener('resize', setSize);
});
// 计算图片位置
const imagePosition = computed(() => {
  if (innerSize.width == 0) {
    return;
  }
  // 多出的宽度
  const extraWidth = innerSize.width - containterSize.width;
  // 多出的高度
  const extraHeight = innerSize.height - containterSize.height;
  const left = (-extraWidth / containterSize.width) * mouseInfo.x;
  const top = (-extraHeight / containterSize.height) * mouseInfo.y;
  return {
    transform: `translate(${left}px, ${top}px)`,
  };
});
// 计算中心位置
const center = computed(() => {
  return {
    x: containterSize.width / 2,
    y: containterSize.height / 2,
  };
});
// 显示文字
const showText = () => {
  // 标题
  titleEle.value.style.opacity = 1;
  titleEle.value.style.width = 0;
  titleEle.value.style.transition = '2s';
  // 强制刷新 reflow
  titleEle.value.clientHeight;
  titleEle.value.style.width = titleWidth.value + 'px';

  // 描述
  descEle.value.style.opacity = 1;
  descEle.value.style.width = 0;
  descEle.value.style.transition = '2s 2s';
  // 强制刷新 reflow
  descEle.value.clientHeight;
  descEle.value.style.width = descWidth.value + 'px';
};
// 设置尺寸
const setSize = () => {
  // 拿到外层容器的尺寸
  containterSize.width = containterEle.value.clientWidth;
  containterSize.height = containterEle.value.clientHeight;
  // 拿到里层图片的尺寸
  innerSize.width = imgEle.value.clientWidth;
  innerSize.height = imgEle.value.clientHeight;
};
// 鼠标移动
const handleMouseMove = (e) => {
  const rect = containterEle.value.getBoundingClientRect();
  mouseInfo.x = e.clientX - rect.left;
  mouseInfo.y = e.clientY - rect.top;
};
// 鼠标移出
const handleMouseLeave = () => {
  mouseInfo.x = center.value.x;
  mouseInfo.y = center.value.y;
};
</script>

<style lang="scss" scoped>
.carousel-item-containter {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .desc {
    color: #fff;
    position: absolute;
    left: 50px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    font-size: 26px;
    letter-spacing: 3px;
    bottom: 20%;
  }
  .desc {
    font-size: 20px;
    padding-left: 2em;
    color: $gray;
    bottom: 15%;
  }
}
</style>
