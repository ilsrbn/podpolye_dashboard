// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@mdi/font/css/materialdesignicons.min.css', 'vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  ssr: false,
  modules: ['@pinia/nuxt']
})
