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
    app: {
      baseURL: '/nuxt-demo/',
      buildAssetsDir: '/static/'
    },
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
})
