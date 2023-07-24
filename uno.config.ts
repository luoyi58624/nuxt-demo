// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      xs: '0px', // 0-640之间为手机设备，注意，低于640px就不要使用container了
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    }
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'inline-flex-center': 'inline-flex justify-center items-center',
    btn: 'px-6 py-2 rounded-md bg-[#12b488] text-white'
  },
  presets: [
    presetUno({
      dark: 'media'
    }),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      scale: 1.5,
      warn: true
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
