// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt Vuetify UnoCSS',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Store`, link: '/store' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    // '@unocss/preset-icons',
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    // '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    // '@nuxt/ui',
    '@nuxtjs/html-validator',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), nuxt/ui uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      vuetify: {
        configPath: 'vuetify.config.ts',
        cssPath: '@/assets/css/main.css',
        utilities: false,
        restartOnThemeUpdate: true,
      },
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // Temporary files to use tailwind in Vue Designer for unocss
        configPath: './temp/tailwind.config.ts',
        cssPath: './temp/tailwind.css',
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },

  // Vuetify's global styles
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css', // Used for global styles. This file is generally configured as cssPath with Pinegrow Vuetify Plugin
    '~/assets/vuetify/main.scss', // If customizing Vuetify sass variables
  ],

  // Vuetify Nuxt module, thanks Joaquín (userquin)
  vuetify: {
    moduleOptions: {
      /* If customizing sass variables of vuetify components */
      styles: {
        configFile: 'assets/vuetify/settings.scss',
      },
      //...
    },

    vuetifyOptions: './vuetify.config.ts', // This file is generally configured as configPath with Pinegrow Vuetify Plugin
  },

  // Required when customizing Vuetify sass variables via configFile with SSR enabled - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-sass-variables
  experimental: {
    inlineSSRStyles: false,
  },

  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
})
