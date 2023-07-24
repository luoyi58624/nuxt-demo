import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  },
  css: ['@/assets/css/index.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
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
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', 'nuxt-swiper', 'nuxt-lodash'],
  pinia: {
    autoImports: ['defineStore']
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'] // => _isLodashDate
    ]
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
    ],
    build: {}
  },

  build: {},
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
        // serverApi: 'http://localhost:3001'
        serverApi: 'http://115.159.28.38:3001'
      }
    }
  }
})
