<template>
  <div class="site-aside-containter">
    <Avatar
      url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb4a87154-18b6-4163-ac80-f4dc4bf58d09%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1697011964&t=9b881d99d9da1341250e99fb54ff64c4"
    />
    <h1>Ma-Yuhang</h1>
    <Menu />
    <Contact style="margin-top: 10px" />
  </div>
</template>

<script setup>
import Menu from './Menu';
import Avatar from '@/components/Avatar';
import Contact from './Contact';
</script>

<style lang="scss" scoped>
.site-aside-containter {
  width: 250px;
  height: 100%;
  background-color: #000;
  .avatar-containter {
    text-align: center;
    padding: 20px 0;
  }
  h1 {
    text-align: center;
    color: $gray;
    margin-bottom: 40px;
  }
}
</style>
