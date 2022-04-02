import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
    nitro: {
        preset: 'node',
    },
    buildModules: ['@nuxtjs/tailwindcss'],
    loading: { color: '#fff' },
    css: [
      '@/src/assets/css/tailwind.css',
      '@/src/assets/scss/global.scss'
  ], 

    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        }
      },
})
