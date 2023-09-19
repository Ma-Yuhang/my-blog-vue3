<template>
  <div class="article-comment-containter">
    <MessageArea
      title="评论列表"
      :subTitle="`(共${total}条)`"
      :list="comments"
      :isListLoading="isListLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, computed, inject, watch } from 'vue';
import MessageArea from '@/components/MessageArea';
import { getComments, postComment } from '@/api/blog';
import { debounce } from '@/utils'
import { useRoute } from 'vue-router';

const $route = useRoute();
let isListLoading = ref(true);
let comments = ref([]);
let total = ref(0);
let page = ref(1);
let limit = ref(10);
onMounted(() => {
  getData();
});

// 拿到滚动条距离底部的距离
let { scrollBottom } = inject('scrollBottom');

const blogId = computed(() => {
  return $route.params.id;
});
// 是不是最后一页
const isLastPage = computed(() => {
  return comments.value.length >= total.value;
});

const getData = async () => {
  const { data } = await getComments(blogId.value, page.value, limit.value);
  comments.value = [...comments.value, ...data.rows];
  total.value = data.total;
  isListLoading.value = false;
};

// 加载更多
const getMoreData = () => {
  // 是最后一页或者正在加载 就return
  if (isLastPage.value || isListLoading.value) {
    console.log('没了');
    return;
  }
  if (scrollBottom.value < 50) {
    isListLoading.value = true;
    // 加载更多，请求下一页
    page.value++;
    getData();
  }
};

const handleSubmit = async (formData, callback) => {
  // 提交评论
  let res = await postComment({
    blogId: blogId.value,
    ...formData,
  });
  // 重新获取数据
  comments.value.unshift(res.data);
  total.value++;
  callback('添加成功');
};

watch(scrollBottom, debounce(getMoreData));
</script>

<style lang="scss" scoped>
.article-comment-containter {
  margin-top: 30px;
}
</style>
