<template>
  <div class="app">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view></router-view>
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
}
</style>
