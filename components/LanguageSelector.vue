<template>
    <div class="language-selector" ref="selectorRef" style="margin-left: 40px;">
        <button class="language-btn" @click="toggleDropdown" :class="{ 'active': isOpen }">
            <i class="bi bi-globe"></i>
        </button>

        <transition name="dropdown">
            <div v-if="isOpen" class="language-dropdown">
                <button class="language-option" @click="selectLanguage('pt')" :class="{ 'active': locale === 'pt' }">
                    <span class="flag-emoji">🇧🇷</span>
                    <span>Português</span>
                </button>
                <button class="language-option" @click="selectLanguage('en')" :class="{ 'active': locale === 'en' }">
                    <span class="flag-emoji">🇺🇸</span>
                    <span>English</span>
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { locale, setLocale } = useI18n()

const isOpen = ref(false)
const selectorRef = ref(null)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectLanguage = (newLocale) => {
    setLocale(newLocale)
    isOpen.value = false
}

const handleClickOutside = (event) => {
    if (selectorRef.value && !selectorRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-selector {
    position: relative;
    display: inline-block;
}

.language-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: var(--radius-lg);
    color: var(--apple-text-secondary);
    cursor: pointer;
    transition: all var(--transition-normal);
    font-size: 1.1rem;
}

.language-btn:hover {
    color: var(--apple-text-primary);
    background: rgba(0, 122, 255, 0.1);
    border-color: rgba(0, 122, 255, 0.2);
}

.language-btn.active {
    color: var(--apple-text-primary);
    background: rgba(0, 122, 255, 0.2);
    border-color: rgba(0, 122, 255, 0.3);
}

.language-dropdown {
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    min-width: 160px;
    background: rgba(28, 28, 30, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    z-index: 1001;
}

.language-option {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    background: transparent;
    border: none;
    color: var(--apple-text-secondary);
    cursor: pointer;
    transition: all var(--transition-normal);
    font-size: 0.9rem;
    text-align: left;
}

.language-option:hover {
    background: rgba(0, 122, 255, 0.1);
    color: var(--apple-text-primary);
}

.language-option.active {
    background: rgba(0, 122, 255, 0.2);
    color: var(--apple-text-primary);
}

.flag-emoji {
    font-size: 1.2rem;
    line-height: 1;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(0.95);
}

/* Mobile adjustments */
@media (max-width: 768px) {
    .language-dropdown {
        right: -8px;
        min-width: 140px;
    }

    .language-option {
        padding: var(--spacing-md);
        font-size: 1rem;
    }
}
</style>