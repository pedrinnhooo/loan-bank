export default defineNuxtConfig({
  compatibilityDate: '2025-03-13',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.min.css',
    '@/assets/styles/home.css'
  ],

  modules: ['@nuxtjs/i18n'],
})
