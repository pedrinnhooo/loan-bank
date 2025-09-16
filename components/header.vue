<template>
    <header class="apple-header" :class="{ 'scrolled': isScrolled }">
        <nav class="header-nav">
            <div class="container-apple">
                <div class="nav-content">
                    <!-- Logo -->
                    <NuxtLink to="/" class="logo-link">
                        <div class="logo">
                            <AppleLogo size="medium" variant="gradient" />
                            <span class="logo-text">Pedro Ruffo</span>
                        </div>
                    </NuxtLink>

                    <!-- Desktop Navigation -->
                    <div class="nav-links desktop-nav">
                        <NuxtLink 
                            v-for="link in navLinks" 
                            :key="link.path"
                            :to="link.path" 
                            class="nav-link"
                            :class="{ 'active': $route.path === link.path }"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button 
                        class="mobile-menu-btn"
                        @click="toggleMobileMenu"
                        :class="{ 'active': isMobileMenuOpen }"
                    >
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <transition name="mobile-menu">
            <div v-if="isMobileMenuOpen" class="mobile-menu">
                <div class="mobile-menu-content">
                    <div class="mobile-nav-links">
                        <NuxtLink 
                            v-for="link in navLinks" 
                            :key="link.path"
                            :to="link.path" 
                            class="mobile-nav-link"
                            @click="closeMobileMenu"
                        >
                            {{ link.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Mobile Menu Overlay -->
        <div 
            v-if="isMobileMenuOpen" 
            class="mobile-menu-overlay"
            @click="closeMobileMenu"
        ></div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Contato', path: '/contato' }
]

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
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
})
</script>

<style scoped>
.apple-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: 1px solid transparent;
    transition: all var(--transition-normal);
}

.apple-header.scrolled {
    background: linear-gradient(135deg, 
        rgba(0, 0, 0, 0.9) 0%, 
        rgba(28, 28, 30, 0.9) 50%, 
        rgba(44, 44, 46, 0.9) 100%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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

/* Logo image styles removed - now using AppleLogo component */

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
    transition: all var(--transition-normal);
    position: relative;
    border: 1px solid transparent;
}

.nav-link:hover {
    color: var(--apple-text-primary);
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.2);
}

.nav-link.active {
    color: var(--apple-text-primary);
    background: rgba(0, 122, 255, 0.2);
    border: 1px solid rgba(0, 122, 255, 0.3);
}

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
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background: var(--apple-text-primary);
    margin: 2px 0;
    transition: all var(--transition-normal);
    border-radius: 1px;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 999;
}

.mobile-menu-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: var(--spacing-xl);
}

.mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
}

.mobile-nav-link {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--apple-text-primary);
    text-decoration: none;
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    transition: all var(--transition-normal);
}

.mobile-nav-link:hover {
    background: rgba(0, 122, 255, 0.2);
    transform: scale(1.05);
}

.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all var(--transition-normal);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Responsive */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
}

@media (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
</style>
