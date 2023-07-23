// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    payloadExtraction: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      }
    }
  },
  modules: ['@unocss/nuxt'],
  $production: {
    runtimeConfig: {
      public: {
        serverApi: 'http://115.159.28.38:3001'
      }
    }
  },
  $development: {
    runtimeConfig: {
      public: {
        serverApi: 'http://localhost:3001'
      }
    }
  }
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/list']
  //   }
  // },
  // app: {
  //   pageTransition: {
  //     name: 'page',
  //     mode: 'out-in'
  //   }
  //   baseURL: '/nuxt-demo/',
  //   buildAssetsDir: "/static/",
  // }
  // vite: {
  //   base: '/nuxt-demo/'
  // }
})
