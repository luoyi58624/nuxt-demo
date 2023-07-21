// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/list']
  //   }
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
    // baseURL: '/nuxt-demo/',
    // buildAssetsDir: "/static/",
  }
  // vite: {
  //   base: '/nuxt-demo/'
  // }
})
