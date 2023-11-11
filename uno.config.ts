import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

import { getFontsWithFallback } from './utils/font'

import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetTypography,
  presetWind,
  presetIcons,
  transformerDirectives,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

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
    // presetForms(), // conflicts with vuetify, so turned it off
    presetIcons({
      prefix: 'i-', // default prefix, do not change
    }),
  ],
  // Equivalent to tailwind's important properties in tailwind config file
  postprocess(obj) {
    obj.entries.forEach((i) => (i[1] = i[1] + ' !important'))
  },
  theme: {
    colors: pg_colors,
    fontFamily: getFontsWithFallback(pg_fonts),
  },
  content: {
    pipeline: {
      get include() {
        const _content = [
          /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // the default
          './*.{js,cjs,ts,cts,mts}', // site.ts
          '*/**/*.{js,cjs,ts,cts,mts}', // nuxt directories
          '*-layer/**/*.{js,cjs,ts,cts,mts}', // nuxt layers
        ]
        return process.env.NODE_ENV === 'production'
          ? _content
          : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
      },
    },
  },
})
