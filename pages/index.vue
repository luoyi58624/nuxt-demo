<template>
  <div>
    <h1>首页</h1>
    <div class="i-ph-anchor-simple-thin"></div>
    <button class="btn m-1" @click="count++">count: {{ count }}</button>
    <button class="btn m-1" @click="appStore.count++">store count: {{ appStore.count }}</button>
    <var-button type="primary" @click="count++">count: {{ count }}</var-button>
    <!-- <ul>
      <li v-for="item in data['data']">{{ item['appName'] }}</li>
    </ul> -->
    <NuxtLink to="/list">list page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt-首页',
  meta: [{ name: 'description', content: 'Nuxt Demo首屏页面' }]
})
const runtimeConfig = useRuntimeConfig()
const appStore = useAppStore()
const count = ref(0)

// const { data } = await useFetch('/app-version', {
//   baseURL: runtimeConfig.public.serverApi
// })
</script>
