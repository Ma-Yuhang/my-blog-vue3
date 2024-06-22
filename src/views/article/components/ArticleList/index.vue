<template>
  <div v-loading="isLoading" class="article-list-container" ref="containterEle">
    <ul>
      <li v-for="item in data">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'ArticleDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'ArticleDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'ArticleCategory',
                query: {
                  page,
                  limit,
                },
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.length == 0 && !isLoading" text="没有文章哦"/>
    <!-- 分页放到这里 -->
    <Pagination
      :total="total"
      :current-page="page"
      :pageSize="limit"
      @current-page="changePage"
      :visibleNumber='20'
    />
  </div>
</template>
<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pagination from '@/components/Pagination';
import Empty from '@/components/Empty';
import { getBlogs } from '@/api/blog';
import { formatDate } from '@/utils';

// 拿到路由对象
const $route = useRoute();
const $router = useRouter();

let data = ref([]);
let isLoading = ref(true);
let total = ref(0);
let containterEle = ref(null); // 容器Dom

onMounted(() => {
  getData();
});

const getData = async () => {
  const res = await getBlogs(page.value, limit.value, categoryId.value);
  data.value = res.data.rows;
  total.value = res.data.total;
  isLoading.value = false;
};

const categoryId = computed(() => {
  return +$route.params.categoryId || -1;
});
const page = computed(() => {
  return +$route.query.page || 1;
});
const limit = computed(() => {
  return +$route.query.limit || 10;
});

watch($route, () => {
  // 路由信息只要一改变就重新获取数据
  isLoading.value = true;
  getData();
  containterEle.value.scrollTop = 0;
});

// 改变页码时，只修改路由信息 不重新请求数据
const changePage = (newPage) => {
  const query = {
    page: newPage,
    limit: limit.value,
  };
  if (categoryId.value != -1) {
    // 有分类id
    $router.push({
      name: 'ArticleCategory',
      query,
      params: {
        categoryId: categoryId.value,
      },
    });
  } else {
    // 没有分类id 代表全部
    $router.push({
      name: 'Article',
      query,
    });
  }
};
</script>

<style scoped lang="scss">
.article-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid $gray;
      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
      }
      .aside {
        font-size: 12px;
        color: $gray;
        span {
          margin-right: 15px;
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 14px;
      }
    }
  }
}
</style>
