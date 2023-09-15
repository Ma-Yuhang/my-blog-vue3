<template>
  <div v-loading="isLoading" class="blog-list-container">
    <ul>
      <li v-for="item in data">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pagination
      v-if="total"
      :total="total"
      v-model:current-page="page"
      :pageSize="limit"
      @current-page="changePage"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pagination from '@/components/Pagination';
import { getBlogs } from '@/api/blog';
import { formatDate } from '@/utils';

// 拿到路由对象
const $route = useRoute();
const $router = useRouter();

let data = ref({});
let isLoading = ref(true);
let page = ref(1);
let categoryId = ref(-1);
let limit = ref(10);
let total = ref(0);
onMounted(() => {
  // 获取路由信息
  setRouteInfo();
  getData();
});
const getData = async () => {
  const res = await getBlogs(page.value, limit.value, categoryId.value);
  data.value = res.data.rows;
  total.value = res.data.total;
  isLoading.value = false;
  console.log(res.data.rows);
};
// 计算出路由信息
const setRouteInfo = () => {
  categoryId.value = +$route.params.categoryId || -1;
  page.value = +$route.query.page || 1;
  limit.value = +$route.query.limit || 10;
};

const changePage = (newPage) => {
  console.log(newPage);
  if (categoryId.value != -1) {
    $router.push(
      `/blog/cate/${categoryId.value}?page=${page.value}&limit=${limit.value}`
    );
  }else {
    $router.push(
      `/blog/?page=${page.value}&limit=${limit.value}`
    );
  }
  getData();
};
</script>
<style scoped lang="scss">
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
