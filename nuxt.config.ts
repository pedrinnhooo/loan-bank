export default defineNuxtConfig({
  compatibilityDate: '2025-03-10',
  devtools: { enabled: true },

  css: [
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css',
    '@/assets/styles/home.css'
  ],
})