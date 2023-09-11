<template>
  <div>
    <img
      :src="url"
      :style="{
        width: size,
        height: size,
        borderRadius: '50%',
      }"
    />
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '120px',
  },
});
</script>
