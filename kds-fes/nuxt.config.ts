// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  router: {
    base: '/web-kdsfes/'
  },
  generate: {
    dir: 'docs'
  },
})
