import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

import { getFontsWithFallback } from './app/utils/font'
// import { safelist } from './app/utils/colors' // not applicable

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
    presetTypography({
      // TODO: Nuxt content seem to not load the shiki theme correctly, so we have added the background color via unocss theming
      cssExtend: {
        '.prose pre': {
          'background-color': '#282A36 !important',
        },
      },
    }),
    // presetForms(), // conflicts with vuetify, so turned it off
    presetIcons({
      prefix: 'i-', // default prefix, do not change
    }),
  ],
  // Equivalent to tailwind's important properties in tailwind config file
  // postprocess(obj) {
  //   obj.entries.forEach((i) => (i[1] = i[1] + ' !important'))
  // },
  theme: {
    colors: pg_colors,
    fontFamily: getFontsWithFallback(pg_fonts),
  },
  content: {
    pipeline: {
      get include() {
        const _content = [
          /\.(vue|svelte|astro|[jt]sx|mdx?|elm|php|phtml|html)($|\?)/, // the default
          './*.{js,cjs,mjs,ts,cts,mts,json}', // site.ts
          '*/**/*.{js,cjs,mjs,ts,cts,mts,json}', // nuxt directories
          '*-layer/**/*.{js,cjs,mjs,ts,cts,mts,json}', // nuxt layers
        ]
        return process.env.NODE_ENV === 'production'
          ? _content
          : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
      },
    },
  },
})
