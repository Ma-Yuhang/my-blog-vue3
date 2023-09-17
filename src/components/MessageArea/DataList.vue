<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="avatar" size="44px" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate2(item.createDate) }}</div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import avatar from '@/assets/images/avatar.jpg';
import Avatar from '@/components/Avatar';
import { formatDate2 } from '@/utils';
defineProps({
  list: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten($gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken($success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: $gray;
}
</style>
