<template>
  <ul class="menu-list-containter">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ actived: item.isSelected }" @click="handleClick(item)">{{
        item.name
      }}</span>
      <MenuList :list="item.children" @select="handleClick" />
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
  $emit('select', item);
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
  width: 400px;
  height: 100%;
  background-color: aquamarine;
  overflow: hidden;
  .menu-list-containter {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    &:hover {
      color: $warn;
    }
    .actived {
      color: $warn;
      font-weight: bold;
    }
  }
}
</style>
