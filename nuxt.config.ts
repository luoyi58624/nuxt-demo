import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

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
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=0'
        },
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests'
        }
      ]
    }
  },
  imports: {
    dirs: ['composables', 'stores']
  },
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore']
  },
  vite: {
    ssr: {
      noExternal: ['@varlet/ui']
    },
    plugins: [
      components({
        resolvers: [VarletUIResolver()]
      }),
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })]
      })
    ]
  },
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
