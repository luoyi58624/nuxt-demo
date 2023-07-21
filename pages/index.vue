<template>
  <div>
    <h1>首页</h1>
    <button @click="count++">count: {{ count }}</button>
    <ul>
      <li v-for="item in data['data']">{{ item['appName'] }}</li>
    </ul>
    <NuxtLink to="/list">list page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  keepalive: true
})
const count = ref(0)
const { data } = await useFetch('http://localhost:3001/app-version')
</script>
