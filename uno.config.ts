import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetTypography,
  presetWind,
  presetIcons,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    // presetAttributify({
    //   /* preset options */
    // }),
    presetWind(),
    // presetUno(),
    // ...custom presets
    presetTypography(),
    presetIcons({
      prefix: 'i-', // default prefix, do not change
    }),
  ],
  theme: {
    colors: pg_colors,
    fontFamily: pg_fonts,
  },
  content: {
    pipeline: {
      get include() {
        const _content = [
          './components/**/*.{js,vue,ts}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './nuxt.config.{js,ts}',
          './vuetify.config.{js,ts}',
          './app.vue',
          '*.{mjs,js,ts}',
        ]
        return process.env.NODE_ENV === 'production'
          ? _content
          : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
      },
    },
  },
})
