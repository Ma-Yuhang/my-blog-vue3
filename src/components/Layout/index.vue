<template>
  <div class="layout-containter">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot>main</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout-containter {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    // overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
