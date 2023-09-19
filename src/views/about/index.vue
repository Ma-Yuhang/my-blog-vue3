<template>
  <div
    class="about-containter"
    v-loading="aboutStore.isLoading || !iframeLoaded"
  >
    <iframe
      class="iframe"
      :src="aboutStore.src"
      frameborder="0"
      @load="iframeLoaded = true"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAboutStore } from '@/store';
import { onMounted } from 'vue';

const aboutStore = useAboutStore();

let iframeLoaded = ref(false);

onMounted(() => {
  aboutStore.setAboutSrc();
});
</script>

<style scoped lang="scss">
.about-containter {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .iframe {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
