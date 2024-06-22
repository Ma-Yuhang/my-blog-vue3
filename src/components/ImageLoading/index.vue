<template>
  <div class="image-loading-containter">
    <img v-if="!imgVisibled" class="placeholder" :src="placeholder" />
    <img
      @load="handleLoaded"
      :src="src"
      :style="{ opacity: imgLoaded ? 1 : 0, transition: `${duration}ms` }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 500,
  },
});
const $emit = defineEmits(['load']);
let imgLoaded = ref(false);
let imgVisibled = ref(false);
// 原图加载完成时
const handleLoaded = () => {
  imgLoaded.value = true;
  setTimeout(() => {
    imgVisibled.value = true;
    $emit('load');
  }, props.duration);
};
</script>

<style lang="scss" scoped>
.image-loading-containter {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
