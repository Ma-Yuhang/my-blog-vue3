<template>
  <div class="article-category-containter" v-loading="isLoading">
    <h2>文章分类</h2>
    <MenuList :list="categoryData" @select="changeCategory" />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBlogTypes } from '@/api/blog';
import MenuList from '../MenuList';

const $route = useRoute();
const $router = useRouter();

let isLoading = ref(true);
let categoryDataResponse = ref([]);
onMounted(() => {
  getData();
});

const getData = async () => {
  const res = await getBlogTypes();
  categoryDataResponse.value = res.data;
  isLoading = false;
};

const categoryId = computed(() => {
  return +$route.params.categoryId || -1;
});
const limit = computed(() => {
  return +$route.query.limit || 10;
});

// 对接口返回的数据进行整理之后的数据
const categoryData = computed(() => {
  const allArticleCount = categoryDataResponse.value.reduce((r, e) => {
    return +r + +e.articleCount;
  }, 0);
  const result = [
    { name: '全部', id: -1, articleCount: allArticleCount },
    ...categoryDataResponse.value,
  ];
  return result.map((item) => {
    return {
      ...item,
      isSelected: item.id == categoryId.value,
      aside: `${item.articleCount}篇`,
    };
  });
});

const changeCategory = (item) => {
  const query = {
    page: 1,
    limit: limit.value,
  };
  if (item.id == -1) {
    $router.push({
      name: 'Article',
      query,
    });
  } else {
    $router.push({
      name: 'ArticleCategory',
      params: {
        categoryId: item.id,
      },
      query,
    });
  }
};
</script>

<style lang="scss" scoped>
.article-category-containter {
  width: 250px;
  padding: 20px;
  padding-right: 0;
  height: 100%;
  position: relative;
  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    padding-bottom: 10px;
  }
}
</style>
