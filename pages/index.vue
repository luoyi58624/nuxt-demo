<template>
  <div>
    <h1>首页</h1>
    <button class="btn" @click="count++">count: {{ count }}</button>
    <ul>
      <li v-for="item in data['data']">{{ item['appName'] }}</li>
    </ul>
    <NuxtLink to="/list">list page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt-首页',
  meta: [{ name: 'description', content: 'Nuxt Demo首屏页面' }]
})
const runtimeConfig = useRuntimeConfig()
const count = ref(0)

const { data } = await useFetch('/app-version', {
  baseURL: runtimeConfig.public.serverApi
})
</script>
