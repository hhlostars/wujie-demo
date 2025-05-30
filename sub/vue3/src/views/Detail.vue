<template>
  <div>
    {{ num }}
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const num = ref(0)
const router = useRouter()
const route = useRoute()

watchEffect(() => {
  num.value = route.query.num || 0
})
onMounted(() => {
  console.log('Detail mounted');
})
</script>

<style lang="scss" scoped>

</style>