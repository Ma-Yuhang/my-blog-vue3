<template>
  <div class="article-detail-container">
    <h1 style="margin: 0 0 20px 0">{{ articleInfo.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(articleInfo.createDate) }}</span>
      <span>浏览: {{ articleInfo.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ articleInfo.commentNumber }}</a>
      <router-link
        :to="{
          name: 'ArticleCategory',
          params: {
            categoryId: articleInfo.category.id,
          },
          query: {
            page: 1,
            limit: 10,
          },
        }"
        >{{ articleInfo.category.name }}</router-link
      >
    </div>
    <div v-html="articleInfo.htmlContent" class="markdown-body"></div>
    <ToTop />
  </div>
</template>

<script setup>
import ToTop from '@/components/ToTop';
import { formatDate } from '@/utils';
import 'highlight.js/styles/github.css';
import '@/styles/markdown.css';
defineProps({
  articleInfo: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.aside {
  font-size: 12px;
  color: $gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
