<template>
  <Layout>
    <template #default>
      <ArticleList />
    </template>
    <template #right>
      <ArticleCategory />
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@/components/Layout';
import ArticleCategory from './components/ArticleCategory';
import ArticleList from './components/ArticleList';
</script>
