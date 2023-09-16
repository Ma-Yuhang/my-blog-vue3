<template>
  <div class="article-detail-container">
    <h1 style="margin: 0 0 20px 0">{{ articleInfo.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(articleInfo.createDate) }}</span>
      <span>浏览: {{ articleInfo.scanNumber }}</span>
      <a href="">评论: {{ articleInfo.commentNumber }}</a>
      <a href="">{{ articleInfo.category.name }}</a>
    </div>
    <div v-html="articleInfo.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script setup>
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
