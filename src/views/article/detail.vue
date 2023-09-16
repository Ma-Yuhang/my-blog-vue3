<template>
  <div class="article-detail-containter">
    <Layout>
      <template #default>
        <div class="main" v-loading="isLoading" >
          <ArticleDetail :articleInfo="articleInfo" v-if="articleInfo"/>
        </div>
      </template>
      <template #right>
        <div class="article-TOC" v-loading="isLoading">
          <ArticleTOC :toc="articleInfo.toc" v-if="articleInfo"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getBlog } from '@/api/blog';
import { useRoute } from 'vue-router';
import Layout from '@/components/Layout';
import ArticleDetail from './components/ArticleDetail';
import ArticleTOC from './components/ArticleTOC';

const $route = useRoute();

let isLoading = ref(true);
let articleInfo = ref();
onMounted(() => {
  getData();
});

const getData = async () => {
  const id = $route.params.id;
  const res = await getBlog(id);
  articleInfo.value = res.data;
  isLoading.value = false;
  console.log(res);
};
</script>

<style lang="scss" scoped>
.article-detail-containter {
  width: 100%;
  height: 100%;
  .main {
    position: relative;
    overflow-y: auto;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .article-TOC {
    padding: 20px;
    width: 250px;
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }
}
</style>
