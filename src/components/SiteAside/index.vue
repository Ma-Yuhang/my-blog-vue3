<template>
  <div class="site-aside-containter">
    <Avatar :url="avatar" />
    <h1>Ma-Yuhang</h1>
    <Menu />
    <Contact style="margin-top: 10px" />
  </div>
</template>

<script setup>
import avatar from '@/assets/images/avatar.jpg';
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
