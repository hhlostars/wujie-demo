<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { bus } from 'wujie'

const activeIndex = ref('1')
const router = useRouter()
function handleFlag(name) {
  console.log(name);
  let path = '/'
  if (name === 'vue2') {
    path = '/vue2'
  } else if (name === 'vue3') {
    path = '/vue3'
  }
  router.push(path)
  activeIndex.value = name
}
// 监听路由变化
watchEffect(() => {
  const path = window.location.pathname
  if (path.includes('/vue2')) {
    activeIndex.value = 'vue2'
  } else if (path.includes('/vue3')) {
    activeIndex.value = 'vue3'
  }
})

const value = ref('Option1')
const options = [
  {
    value: 'Option1',
    label: '账户一',
  },
  {
    value: 'Option2',
    label: '账户二',
  },
  {
    value: 'Option3',
    label: '账户三',
  }
]

function selectChange(value) {
  console.log('selectChange', value);
  bus.$emit("acountChange", value) 
}
</script>

<template>
  <div style="position: relative;">

    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleFlag">
      <el-menu-item index="vue2">vue2子项目</el-menu-item>
      <el-menu-item index="vue3">vue3子项目</el-menu-item>
    </el-menu>


    <div style="position: absolute; top: 0;right: 0;">
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px" @change="selectChange">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>

  </div>

  <router-view />

</template>

<style></style>
