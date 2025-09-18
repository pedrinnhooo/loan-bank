<template>
  <Analytics />
  
  <div class="apple-app">
    <Header />

    <main class="main-content">
      <transition name="page" mode="out-in">
        <NuxtPage />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt';

import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

// Speed Insights via script direto
useHead({
  script: [
    {
      src: 'https://va.vercel-scripts.com/v1/speed-insights/script.js',
      defer: true,
      'data-endpoint': '/api/_vercel/speed-insights'
    }
  ]
})
</script>

<style>
.apple-app {
  min-height: 100vh;
  background-color: var(--apple-background);
  color: var(--apple-text-primary);
  font-family: var(--font-system);
}

.main-content {
  /* Removed padding-top to allow header to be truly transparent over content */
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Global Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--apple-dark-2);
}

::-webkit-scrollbar-thumb {
  background: var(--apple-dark-5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--apple-dark-6);
}

/* Selection */
::selection {
  background: var(--apple-blue);
  color: white;
}

::-moz-selection {
  background: var(--apple-blue);
  color: white;
}
</style>