<script setup>
import { ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
const showName = ref('')
window.$wujie?.bus.$on("acountChange", function (name) {
  console.log("子项目收到消息", name)
  showName.value = name
})


</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>父工程项目名</template>
    {{ showName }}
  </WelcomeItem>

</template>
