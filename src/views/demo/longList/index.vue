<template>
  <div class="long-list-container">
    <RecycleScroller class="long-list" :items="listData" :itemHeight="54">
      <template #default="{ item }">
        <LongListItem :item="item" />
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import LongListItem from '@/components/LongList/LongListItem.vue';
import RecycleScroller from '@/components/LongList/RecycleScroller.vue';
// 长列表数据
let listData = reactive([]);

for (let i = 0; i < 10000; i++) {
  listData.push({
    id: i + 1,
    count: i + 1,
  });
}
</script>

<style scoped>
.long-list {
  height: 500px;
  width: 500px;
  margin: 0 auto;
}
</style>
