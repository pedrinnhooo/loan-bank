<template>
    <header class="apple-header" :class="{ 'scrolled': isScrolled }">
        <nav class="header-nav">
            <div class="container-apple">
                <div class="nav-content">
                    <!-- Logo -->
                    <NuxtLink to="/" class="logo-link">
                        <div class="logo">
                            <OrangeLogo size="medium" variant="glow" />
                            <span class="logo-text">{{ t('header.brand') }}</span>
                        </div>
                    </NuxtLink>

                    <!-- Desktop Navigation -->
                    <div class="nav-links desktop-nav">
                        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="nav-link"
                            :class="{ 'active': $route.path === link.path }">
                            {{ link.name }}
                        </NuxtLink>
                        <LanguageSelector />
                    </div>

                    <!-- Mobile Menu Button (APARECE APENAS COM MENU FECHADO) -->
                    <button v-show="!isMobileMenuOpen" class="mobile-menu-btn" @click.stop.prevent="toggleMobileMenu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
            <!-- Close Button -->
            <button class="mobile-close-btn" @click="closeMobileMenu">
                <i class="bi bi-x-lg"></i>
            </button>

            <div class="mobile-menu-content">
                <div class="mobile-nav-links">
                    <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="mobile-nav-link"
                        @click="closeMobileMenu">
                        {{ link.name }}
                    </NuxtLink>

                    <!-- Mobile Language Selector -->
                    <div class="mobile-language-section">
                        <h4 class="mobile-language-title">{{ t('common.language') || 'Idioma' }}</h4>
                        <div class="mobile-language-options">
                            <button class="mobile-language-btn" :class="{ 'active': locale === 'pt' }"
                                @click="selectLanguage('pt')">
                                <span class="flag-emoji">🇧🇷</span>
                                <span>Português</span>
                            </button>
                            <button class="mobile-language-btn" :class="{ 'active': locale === 'en' }"
                                @click="selectLanguage('en')">
                                <span class="flag-emoji">🇺🇸</span>
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

const { t, locale, setLocale } = useI18n()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = computed(() => [
    { name: t('header.links.home'), path: '/' },
    { name: t('header.links.about'), path: '/sobre' },
    { name: t('header.links.projects'), path: '/projetos' },
    { name: t('header.links.contact'), path: '/contato' }
])

const toggleMobileMenu = (event) => {
    if (event) {
        event.preventDefault()
        event.stopPropagation()
    }
    
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
        document.body.classList.add('menu-open')
    } else {
        document.body.style.overflow = ''
        document.body.classList.remove('menu-open')
    }
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
    document.body.classList.remove('menu-open')
}

const selectLanguage = (lang) => {
    setLocale(lang)
    closeMobileMenu()
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = ''
    document.body.classList.remove('menu-open')
})
</script>

<style scoped>
.apple-header {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 1000 !important;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: 1px solid transparent;
    transition: all var(--transition-normal);
}

.apple-header.scrolled {
    z-index: 1000 !important;
}

.apple-header.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom-color: rgba(255, 107, 53, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}



.header-nav {
    padding: var(--spacing-md) 0;
    background: transparent;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-link {
    text-decoration: none;
    color: inherit;
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--apple-text-primary);
}

.desktop-nav {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.nav-link {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-xl);
    text-decoration: none;
    color: var(--apple-text-secondary);
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border: 1px solid transparent;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        rgba(255, 255, 255, 0.8));
    transform: translateX(-50%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 0 10px rgba(255, 107, 53, 0.6),
        0 0 20px rgba(255, 140, 66, 0.4);
}

.nav-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.1), 
        transparent);
    transition: left 0.5s;
}

.nav-link:hover {
    color: var(--apple-text-primary);
    background: rgba(255, 107, 53, 0.05);
    border: 1px solid rgba(255, 107, 53, 0.2);
    transform: translateY(-1px);
}

.nav-link:hover::before {
    width: 80%;
}

.nav-link:hover::after {
    left: 100%;
}

.nav-link.active {
    color: var(--apple-text-primary);
    background: rgba(255, 107, 53, 0.1);
    border: 1px solid rgba(255, 107, 53, 0.3);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
}

.nav-link.active::before {
    width: 90%;
    animation: hologramPulse 2s ease-in-out infinite;
}

@keyframes hologramPulse {
    0%, 100% {
        box-shadow: 
            0 0 10px rgba(255, 107, 53, 0.6),
            0 0 20px rgba(255, 140, 66, 0.4);
    }
    50% {
        box-shadow: 
            0 0 15px rgba(255, 107, 53, 0.8),
            0 0 30px rgba(255, 140, 66, 0.6),
            0 0 40px rgba(255, 165, 102, 0.3);
    }
}

/* Botão hambúrguer (aparece só quando menu está fechado) */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 9999 !important;
    position: relative !important;
    pointer-events: auto !important;
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background: var(--apple-text-primary);
    margin: 2px 0;
    transition: all var(--transition-normal);
    border-radius: 1px;
}

/* REMOVIDO: estados .active que transformavam em "X" */

/* Menu mobile */
.mobile-menu {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important; /* Dynamic viewport height for better mobile support */
    background: #000000 !important;
    z-index: 999999 !important;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
}

.mobile-menu.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.mobile-close-btn {
    position: absolute;
    top: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2147483647 !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: scale(0.8) rotate(-90deg);
}

.mobile-menu.open .mobile-close-btn {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    transition-delay: 0.2s;
}

.mobile-close-btn:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.mobile-close-btn:active {
    transform: scale(0.95);
}

.mobile-menu-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: var(--spacing-2xl) var(--spacing-lg);
    transform: translateY(-20px);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu.open .mobile-menu-content {
    transform: translateY(0);
}

.mobile-menu-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center,
        rgba(255, 107, 53, 0.05) 0%,
        transparent 70%);
    pointer-events: none;
}

.mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
    position: relative;
    z-index: 1;
    width: 100%;
}

.mobile-nav-link {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease, opacity 0.5s ease, transform 0.5s ease;
}

.mobile-menu.open .mobile-nav-link {
    opacity: 1;
    transform: translateY(0);
}

.mobile-menu.open .mobile-nav-link:nth-child(1) { transition-delay: 0.1s; }
.mobile-menu.open .mobile-nav-link:nth-child(2) { transition-delay: 0.2s; }
.mobile-menu.open .mobile-nav-link:nth-child(3) { transition-delay: 0.3s; }
.mobile-menu.open .mobile-nav-link:nth-child(4) { transition-delay: 0.4s; }

.mobile-nav-links .mobile-nav-link {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--apple-text-primary);
    text-decoration: none;
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    position: relative;
}

.mobile-nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.1), 
        transparent);
    transition: left 0.5s;
}

.mobile-nav-link:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: rgba(255, 107, 53, 0.3);
    transform: translateX(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2);
}

.mobile-nav-link:active {
    transform: translateX(-2px) scale(0.98);
}

.mobile-nav-link:hover::before {
    left: 100%;
}

/* Idiomas no mobile */
.mobile-language-section {
    margin-top: var(--spacing-xl);
    text-align: center;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.mobile-menu.open .mobile-language-section {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
}

.mobile-language-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--apple-text-secondary);
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
    letter-spacing: .5px;
}

.mobile-language-options {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
}

.mobile-language-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--apple-text-secondary);
    cursor: pointer;
    transition: all var(--transition-normal);
    font-size: 1rem;
    font-weight: 500;
    min-width: 120px;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.mobile-language-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.1), 
        transparent);
    transition: left 0.5s;
}

.mobile-language-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 107, 53, 0.3);
    color: var(--apple-text-primary);
    transform: translateY(-2px);
    box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.2),
        0 0 15px rgba(255, 107, 53, 0.1);
}

.mobile-language-btn:hover::before {
    left: 100%;
}

.mobile-language-btn.active {
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
    box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.mobile-language-btn .flag-emoji {
    font-size: 1.2rem;
}





/* Responsive */
@media (max-width: 768px) {
    .desktop-nav {
        display: none !important;
    }

    .mobile-menu-btn {
        display: flex !important;
        z-index: 999999 !important;
        position: relative !important;
        pointer-events: auto !important;
        cursor: pointer !important;
        background: none !important;
        border: none !important;
    }
    
    .apple-header .mobile-menu-btn {
        display: flex !important;
        z-index: 99999 !important;
    }
    
    .apple-header.scrolled .mobile-menu-btn {
        display: flex !important;
        z-index: 99999 !important;
    }
    
    /* Garantir background sólido no mobile */
    .mobile-menu {
        background: #000000 !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 2147483647 !important;
    }
    
    /* Garantir que o menu funcione em qualquer posição da página */
    .mobile-menu.open {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
    }
}





@media (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
</style>
