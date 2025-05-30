<template>
  <div class="about">
      <h1>This is an about page</h1>
      <button @click=goHome>会首页</button>
      <button @click="routerChange">跳转路由Detail</button>
      <button @click="routerChange1">about子路由1</button>
      <button @click="routerChange2">about子路由2</button>
      <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push({
    path: '/'
  })
}
function routerChange() {
  // window.$wujie.props.jump("vue3");
  router.push({
    name: 'detail',
    query: {
      num: 1
    }
  })
}
function routerChange1() {
  router.push({
    name: 'aboutchild1',
  })
}
function routerChange2() {
  router.push({
    name: 'aboutchild2',
  })
}
</script>

<style>

</style>
