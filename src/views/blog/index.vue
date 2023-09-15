<template>
  <Layout>
    <template #default>
      <BlogList />
    </template>
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/components/Layout';
import BlogCategory from './components/BlogCategory';
import BlogList from './components/BlogList';
</script>
