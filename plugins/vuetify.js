// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      colors: {
        primary: "#8c7764",
        secondary: "#bf895a",
      }

    }
  })

  nuxtApp.vueApp.use(vuetify)
})