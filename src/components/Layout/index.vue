<template>
  <div class="layout-containter">
    <slot name="left">左侧导航区</slot>
    <slot>main</slot>
    <slot name="right"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout-containter {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
