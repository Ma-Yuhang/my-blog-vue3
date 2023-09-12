<template>
  <div class="app">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <div class="main">
          <router-view></router-view>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import SiteAside from '@/components/SiteAside';
import Layout from '@/components/Layout';
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  .aside {
    width: 250px;
    height: 100%;
  }
  .main {
    width: 100%;
    height: 100%;
  }
  .right {
    width: 200px;
    height: 100%;
    background-color: aqua;
  }
}
</style>
