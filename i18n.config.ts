export default {
  strategy: 'prefix',
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'pt',
  locales: [
    { code: 'pt', file: 'pt.json', name: 'Português' },
    { code: 'en', file: 'en.json', name: 'English' }
  ],
  vueI18n: {
    fallbackLocale: 'pt',
    legacy: false,
    locale: 'pt'
  }
} as unknown