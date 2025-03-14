<template>
  <div class="bg-light text-dark min-vh-100 d-flex flex-column">
    <Header />

    <transition name="fade" mode="out-in">
      <NuxtPage />
    </transition>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
</script>

<style>
@font-face {
  font-family: 'Roboto Mono';
  src: url('/fonts/Ubuntu-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: 'Roboto Mono', monospace;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgb(0 0 0) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html,
body,
#__nuxt {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overscroll-behavior: none;
  background-color: #000;
}
</style>