<template>
  <div
    v-loading="bannerStore.isLoading"
    class="home-containter"
    ref="containter"
    @wheel="handleWheel"
  >
    <ul
      class="carousel"
      :style="{
        transform: `translateY(${(bannersIndex - 1) * -clientHeight}px)`,
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="banner in bannerStore.banners" :key="banner.id">
        <CarouselItem :banner="banner" />
      </li>
    </ul>
    <div
      class="icon icon-up"
      @click="switchTo(bannersIndex - 1)"
      v-show="bannersIndex > 1"
    >
      <Icon type="up" size="26px" />
    </div>
    <div
      class="icon icon-down"
      @click="switchTo(bannersIndex + 1)"
      v-show="bannersIndex < bannerStore.banners.length"
    >
      <Icon type="down" size="26px" />
    </div>
    <ul class="indicator">
      <li
        v-for="item in bannerStore.banners.length"
        :class="{ actived: item === bannersIndex }"
        @click="switchTo(item)"
      ></li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import Icon from '@/components/Icon';
import CarouselItem from './CarouselItem.vue';
import { useBannerStore } from '@/store';

// 拿到banner仓库
const bannerStore = useBannerStore();
// 获取到容器的containter
let containter = ref();
// 当前显示的是第几张图片
let bannersIndex = ref(1);
// 容器的高度
let clientHeight = ref(null);
// 是否在滚动中
let resizing = ref(false);

onMounted(() => {
  clientHeight.value = containter.value.clientHeight;
  window.addEventListener('resize', handleResize);
  // 获取图片数据
  bannerStore.setBanners();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
// 切换图片
const switchTo = (i) => {
  bannersIndex.value = i;
};
// 浏览器窗口变化
const handleResize = () => {
  clientHeight.value = containter.value.clientHeight;
};
// 鼠标滚轮事件
const handleWheel = (e) => {
  if (resizing.value) {
    return;
  }
  if (e.deltaY > 100 && bannersIndex.value < bannerStore.banners.length) {
    resizing.value = true;
    bannersIndex.value++;
  } else if (e.deltaY < -100 && bannersIndex.value > 1) {
    resizing.value = true;
    bannersIndex.value--;
  }
};
// 动画结束
const handleTransitionend = () => {
  // console.log(1);
  resizing.value = false;
};
</script>

<style lang="scss" scoped>
.home-containter {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    color: $gray;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &-down {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: jump-dowm 2s infinite;
    }
    &-up {
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: jump-up 2s infinite;
    }
    @keyframes jump-dowm {
      0% {
        transform: translate(-50%, -5px);
      }
      50% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 5px);
      }
      50% {
        transform: translate(-50%, -5px);
      }
      100% {
        transform: translate(-50%, 5px);
      }
    }
  }
  .indicator {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: 10px 0;
      border: 1px solid #fff;
      cursor: pointer;
      &.actived {
        background-color: #fff;
      }
    }
  }
}
</style>
