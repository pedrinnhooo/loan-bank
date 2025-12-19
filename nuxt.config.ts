export default defineNuxtConfig({
  compatibilityDate: '2025-03-13',
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt'
  ],

  css: [
    '@/assets/styles/apple-design.css',
    '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
  ],

  app: {
    head: {
      title: 'Pedro Ruffo - Desenvolvedor de Soluções Digitais',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mobile Software Engineer especializado em Flutter, Dart, Firebase e desenvolvimento web moderno.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },

  experimental: {
    payloadExtraction: false
  }
})