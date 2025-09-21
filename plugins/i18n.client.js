export default defineNuxtPlugin(() => {
  // Initialize i18n on client side
  if (process.client) {
    const { setLocale } = useI18n()
    
    // Load saved language preference
    const savedLocale = localStorage.getItem('preferred-language')
    if (savedLocale && (savedLocale === 'pt' || savedLocale === 'en')) {
      setLocale(savedLocale)
    }
  }
})