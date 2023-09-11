<template>
  <div class="menu-containter">
    <ul>
      <!-- 首页 -->
      <li>
        <a class="item">
          <Icon class="icon" type="home" size="26px" />
          <span class="text">首页</span>
        </a>
      </li>
      <!-- 文章 -->
      <li>
        <a class="item">
          <Icon class="icon" type="blog" size="26px" />
          <span class="text">文章</span>
        </a>
      </li>
      <!-- 关于我 -->
      <li>
        <a class="item">
          <Icon class="icon" type="info" size="26px" />
          <span class="text">关于我</span>
        </a>
      </li>
      <!-- 项目&效果 -->
      <li>
        <a class="item">
          <Icon class="icon" type="code" size="26px" />
          <span class="text">项目&效果</span>
        </a>
      </li>
      <!-- 留言板 -->
      <li>
        <a class="item">
          <Icon class="icon" type="chat" size="26px" />
          <span class="text">留言板</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon';
</script>

<style lang="scss" scoped>
.menu-containter {
  width: 100%;
  height: 100%;
  padding: 20px;
  ul {
    li {
      display: flex;
      height: 30px;
      line-height: 30px;
      margin: 14px 0;
      position: relative;
      .item {
        display: flex;
        align-items: center;
        cursor: pointer;
        .text {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
