<template>
  <div>
    <Pagination
      :total="total"
      :page-size="pageSize"
      v-model:current-page="current"
      @current-page="changePage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Pagination from '@/components/Pagination';

let total = ref(213);
let pageSize = ref(10);
let current = ref(12);

const changePage = (page) => {
  console.log('页码改变了', current.value, page);
};
</script>
