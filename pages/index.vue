<template>
  <div>
    <div class="relative top-0 xs:h-40vh sm:h-50vh md:h-60vh lg:h-70vh xl:h-80vh">
      <CorouselImages
        :images="images"
        class="absolute top-0 z-0 xs:h-40vh sm:h-50vh md:h-60vh lg:h-70vh xl:h-80vh" />
      <Wave class="absolute bottom-0" />
    </div>
    <div class="mx-auto p-4 xs:(justify-center w-full) sm:(justify-between container)">
      <h1>首页</h1>
      <div class="i-ph-anchor-simple-thin"></div>
      <button class="btn m-1" @click="count++">count: {{ count }}</button>
      <button class="btn m-1" @click="appStore.count++">store count: {{ appStore.count }}</button>
      <var-button type="primary" @click="count++">count: {{ count }}</var-button>
      <ul>
        <li v-for="i in 100">list- {{ i }}</li>
      </ul>
      <!-- <ul>
      <li v-for="item in data['data']">{{ item['appName'] }}</li>
    </ul> -->
      <NuxtLink to="/list">list page</NuxtLink>
    </div>
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

const images = [
  'images/home/header1.webp',
  'images/home/header2.webp',
  'images/home/header3.webp',
  'images/home/header4.webp',
  'images/home/header5.webp',
  'images/home/header6.webp',
  'images/home/header7.jpg',
].map(item => {
  if (runtimeConfig.app.baseURL === '/') return '/' + item
  else return runtimeConfig.app.baseURL + item
})
// const { data } = await useFetch('/app-version', {
//   baseURL: runtimeConfig.public.serverApi
// })
</script>
