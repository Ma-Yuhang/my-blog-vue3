<template>
  <nav class="menu-containter">
    <router-link v-for="item in items" :key="item.link" :to="item.link">
      <div class="item" :class="{ selected: isSelected(item.link) }">
        <Icon class="icon" :type="item.icon" size="24px" />
        <span class="text">{{ item.title }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Icon from '@/components/Icon';
// 拿到路由对象
const $route = useRoute();
const $router = useRouter();
const items = reactive([
  {
    link: '/home',
    icon: 'home',
    title: '首页',
  },
  {
    link: '/blog',
    icon: 'blog',
    title: '文章',
  },
  {
    link: '/about',
    icon: 'about',
    title: '关于我',
  },
  {
    link: '/project',
    icon: 'code',
    title: '项目&效果',
  },
  {
    link: '/message',
    icon: 'chat',
    title: '留言板',
  },
]);

// 选中当前导航
const isSelected = (path) => {
  return $route.fullPath.startsWith(path);
};
// 点击导航跳转
const clickHandle = (route) => {
  $router.push(route.link);
};
</script>

<style lang="scss" scoped>
.menu-containter {
  width: 100%;
  color: $gray;
  a {
    height: 45px;
    line-height: 45px;
    .item {
      &.selected {
        background-color: #2b2b2b;
      }
      display: flex;
      align-items: center;
      padding: 0 50px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      .text {
        margin-left: 10px;
      }
    }
  }
}
</style>
