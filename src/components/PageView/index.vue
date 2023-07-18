<template>
  <van-nav-bar
    :title="title"
    left-arrow
    :fixed="true"
    @click-left="router.back()"
  />
  <div class="content">
    <slot name="content"></slot>
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { useRouter } from "vue-router"
  const router = useRouter()
  const props = defineProps({
    title: String
  })
  const title = props.title
</script>

<style lang="less" scoped>
  .van-nav-bar {
    background-color: #32aaff;
  }
  :deep(.van-nav-bar__title) {
    color: #ffffff !important;
  }
  :deep(.van-icon)  {
    color: #ffffff !important;
  }
  .content {
    margin-top: 46px;
    height: calc(100% - 96px);
    width: 100%;
  }
  .footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
