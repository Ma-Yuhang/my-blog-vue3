<template>
  <ul class="menu-list-containter">
    <li v-for="(item, i) in list" :key="i">
      <div :class="{ actived: item.isSelected }" @click="handleClick(item)">
        <span>{{ item.name }}</span>
        <span class="aside" v-if="item.aside">{{ item.aside }}</span>
      </div>
      <MenuList
        v-if="item.children"
        :list="item.children"
        @select="handleClick"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: [],
  },
});
const $emit = defineEmits(['select']);
const handleClick = (item) => {
  if (!item.isSelected) {
    $emit('select', item);
  }
};
</script>
<script>
export default {
  name: 'MenuList',
};
</script>

<style lang="scss" scoped>
.menu-list-containter {
  font-size: 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .menu-list-containter {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    // &:hover {
    //   color: $warn;
    // }
    .actived {
      color: $warn;
      font-weight: bold;
    }
    .aside {
      margin-left: 10px;
    }
  }
}
</style>
