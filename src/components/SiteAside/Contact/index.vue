<template>
  <div class="contact-containter" v-loading="settingStore.isLoading" >
    <ul>
      <!-- 微信 -->
      <li>
        <a class="item">
          <Icon class="icon" type="weixin" size="26px" />
          <span class="text">{{ settingStore.settings.weixin }}</span>
        </a>
        <div class="QR-code">
          <img src="./img/QRcode-weixin.jpg" />
        </div>
      </li>
      <!-- github -->
      <li>
        <a :href="settingStore.settings.github" target="_blank" class="item">
          <Icon class="icon" type="github" size="26px" />
          <span class="text">{{ settingStore.settings.githubName }}</span>
        </a>
      </li>
      <!-- QQ -->
      <li>
        <a
          :href="`tencent://message/?Menu=yes&uin=${settingStore.settings.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
          class="item"
        >
          <Icon class="icon" type="qq" size="26px" />
          <span class="text">{{ settingStore.settings.qq }}</span>
        </a>
        <div class="QR-code">
          <img src="./img/QRcode-qq.jpg" />
        </div>
      </li>
      <!-- 邮箱 -->
      <li>
        <a :href="`mailto:${settingStore.settings.mail}`" class="item">
          <Icon class="icon" type="email" size="26px" />
          <span class="text">{{ settingStore.settings.mail }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Icon from '@/components/Icon';
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();

onMounted(() => {
  settingStore.setSettings();
});
</script>

<style lang="scss" scoped>
.contact-containter {
  width: 100%;
  padding: 20px;
  color: $gray;
  position: relative;
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
        &:hover {
          color: $primary;
          & + .QR-code {
            opacity: 1;
          }
        }
        .text {
          margin-left: 20px;
        }
      }
      .QR-code {
        position: absolute;
        width: 150px;
        height: 150px;
        right: -100px;
        top: -60px;
        z-index: 1;
        opacity: 0;
        transition: 0.5s;
        &::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #fff;
          left: 0;
          top: 50%;
          transform: translate(-4px, -50%) rotate(45deg);
        }
        img {
          width: 100%;
          height: 100%;
          // 不可拖拽
          -webkit-user-drag: none; /* Safari */
          -khtml-user-drag: none; /* Konqueror HTML */
          -moz-user-drag: none; /* Firefox */
          -o-user-drag: none; /* Old Opera */
          user-drag: none; /* Standard */
        }
      }
    }
  }
}
</style>
