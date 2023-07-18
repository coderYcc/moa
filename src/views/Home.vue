<template>
  <page-view title="智慧报账">
    <template  #content>
      <van-swipe :autoplay="3000" indicator-color="white" height="160">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </template>
  </page-view>
</template>

<script setup>
  import { onMounted, computed } from 'vue'
  import { useStore, mapMutations } from "vuex"
  import { showToast } from 'vant'
  import { PageView } from '../components/index.js'
  
  const store = useStore()
  const userInfo = computed(() => store.state.userInfo)

  const setUserInfo = mapMutations([ "setUserInfo" ])

  onMounted(() => {
    
  })

</script>

<style lang="less" scoped>

</style>
