// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app:{
    baseURL: '/nuxt-demo'
  },
  vite: {
    base: '/nuxt-demo/'
  }
})
