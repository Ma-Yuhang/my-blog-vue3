<template>
  <div class="article-detail-containter">
    <Layout>
      <template #default>
        <div class="main" @scroll="handleScroll" ref="scrollEle">
          <div v-loading="isLoading">
            <ArticleDetail :articleInfo="articleInfo" v-if="articleInfo" />
          </div>
          <div>
            <ArticleComment v-if="!isLoading" />
          </div>
        </div>
      </template>
      <template #right>
        <div class="article-TOC" v-loading="isLoading">
          <ArticleTOC :toc="articleInfo.toc" v-if="articleInfo" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue';
import { getBlog } from '@/api/blog';
import { useRoute } from 'vue-router';
import Layout from '@/components/Layout';
import ArticleDetail from './components/ArticleDetail';
import ArticleComment from './components/ArticleComment';
import ArticleTOC from './components/ArticleTOC';
const $route = useRoute();

let isLoading = ref(true);
let articleInfo = ref();
let scrollEle = ref();
let scrollBottom = ref();
onMounted(() => {
  getData();
});
// 刷新页面之后自动跳到锚点位置
onMounted(() => {
  const hash = location.hash;
  location.hash = '';
  setTimeout(() => {
    location.hash = hash;
  }, 1000);
});

const getData = async () => {
  const id = $route.params.id;
  const res = await getBlog(id);
  articleInfo.value = res.data;
  isLoading.value = false;
};

const handleScroll = () => {
  const scrollTop = scrollEle.value.scrollTop;
  const scrollHeight = scrollEle.value.scrollHeight;
  const clientHeight = scrollEle.value.clientHeight;
  scrollBottom.value = scrollHeight - scrollTop - clientHeight;
};
provide('scrollBottom', { scrollBottom, scrollEle });
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
    scroll-behavior: smooth;
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
