<template>
  <div class="message-container" ref="scrollEle" @scroll="handleScroll">
    <MessageArea
      title="留言板"
      :subTitle="`(${total})`"
      :isListLoading="isLoading"
      :list="data"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MessageArea from '@/components/MessageArea';
import { getMessages, postMessage } from '@/api/message';
import { debounce } from '@/utils';

let isLoading = ref(true);
let page = ref(1);
let limit = ref(10);
let total = ref(0);
let data = ref([]);
let scrollEle = ref(null);
onMounted(() => {
  getData();
});

const getData = async () => {
  const res = await getMessages(page.value, limit.value);
  data.value = [...data.value, ...res.data.rows];
  total.value = res.data.total;
  console.log(data.value);
  isLoading.value = false;
};
// 是不是最后一页
const isLastPage = computed(() => {
  return data.value.length >= total.value;
});
const handleScroll = debounce(() => {
  const scrollTop = scrollEle.value.scrollTop;
  const scrollHeight = scrollEle.value.scrollHeight;
  const clientHeight = scrollEle.value.clientHeight;
  const scrollBottom = scrollHeight - scrollTop - clientHeight;
  getMoreData(scrollBottom);
});
// 加载更多
const getMoreData = (scrollBottom) => {
  // 是最后一页或者正在加载 就return
  if (isLastPage.value || isLoading.value) {
    return;
  }
  if (scrollBottom < 50) {
    isLoading.value = true;
    // 加载更多，请求下一页
    page.value++;
    getData();
  }
};
const handleSubmit = async (formData, callback) => {
  // 提交评论
  let res = await postMessage(formData);
  // 重新获取数据
  data.value.unshift(res.data);
  total.value++;
  callback('感谢您的留言');
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 1000px;
  margin: 0 auto;
}
</style>
