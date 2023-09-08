<template>
  <div class="home">
    <ImageLoading 
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded"
    />
  </div>
</template>

<script setup>
import ImageLoading from '@/components/ImageLoading'

const handleLoaded = () => {
  console.log('图片加载完成');
}
</script>

<style scoped>
.home {
  width: 500px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
