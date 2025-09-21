import { ref, computed } from 'vue'
import ptTranslations from '~/i18n/locales/pt.json'
import enTranslations from '~/i18n/locales/en.json'

// Global reactive locale
const globalLocale = ref('pt')

// Translation data
const translations = {
  pt: ptTranslations,
  en: enTranslations
}

export const useI18n = () => {
  // Get translation by key - reactive function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[globalLocale.value]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value || key
  }

  // Set locale
  const setLocale = (locale) => {
    if (translations[locale]) {
      globalLocale.value = locale
      if (process.client) {
        localStorage.setItem('preferred-language', locale)
      }
    }
  }

  // Get current locale
  const locale = computed(() => globalLocale.value)

  // Initialize from localStorage only once
  if (process.client && !globalLocale._initialized) {
    const savedLocale = localStorage.getItem('preferred-language')
    if (savedLocale && translations[savedLocale]) {
      globalLocale.value = savedLocale
    }
    globalLocale._initialized = true
  }

  return {
    t,
    locale,
    setLocale
  }
}