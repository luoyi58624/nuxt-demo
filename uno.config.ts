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
