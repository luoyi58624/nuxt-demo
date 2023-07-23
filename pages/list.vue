<template>
  <div>
    <h1>列表页</h1>

    <ul>
      <li v-for="item in data['data']">{{ item['appName'] }}</li>
    </ul>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/list_detail">list detail page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  keepalive: true
})
const runtimeConfig = useRuntimeConfig()
const { data } = await useFetch('/app-version', {
  baseURL: runtimeConfig.public.serverApi
})
</script>

<style scoped lang="scss"></style>
