<template>
  <form
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          v-model.trim="formData.nickname"
          placeholder="用户昵称"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model.trim="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? '提交中...' : '提交' }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { showMessage } from '@/utils';
const $emit = defineEmits(['submit']);

let formData = reactive({
  nickname: '',
  content: '',
});
let error = reactive({
  nickname: '',
  content: '',
});
let isSubmiting = ref(false);

const handleSubmit = () => {
  error.nickname = formData.nickname ? '' : '请填写昵称';
  error.content = formData.content ? '' : '请填写内容';
  if (error.nickname || error.content) {
    // 有错误
    return;
  }
  isSubmiting.value = true; // 正在提交，防止重复点击
  $emit('submit', formData, (successMsg) => {
    showMessage({
      message: successMsg,
      type: 'success',
      duration: 1000,
      callback: () => {
        isSubmiting.value = false;
        formData.nickname = '';
        formData.content = '';
      },
    });
  }); // 让父组件来处理事件
};
</script>

<style scoped lang="scss">
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed $gray;
  outline: none;
  color: $words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: $primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: $danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: $primary;
  &:hover {
    background: darken($primary, 10%);
  }
  &:disabled {
    background: lighten($primary, 20%);
    cursor: not-allowed;
  }
}
</style>
