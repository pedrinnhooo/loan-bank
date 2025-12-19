<template>
    <div class="apple-home">
        <!-- Hero Section -->
        <section class="hero-section parallax-container">
            <div class="hero-background parallax-element">
                <div class="hero-gradient"></div>
                <div class="floating-elements">
                    <div class="floating-element" v-for="i in 6" :key="i" :style="getFloatingStyle(i)"></div>
                </div>
            </div>

            <div class="hero-content">
                <div class="hero-text scroll-animate">
                    <h1 class="text-large-title gradient-text mb-lg">
                        {{ displayText }}
                        <span class="cursor" :class="{ 'blink': !isTypewriterComplete }">|</span>
                    </h1>
                    <p class="text-title-3 mb-xl" style="color: var(--apple-text-secondary);">
                        {{ t('home.hero.subtitle') }}
                    </p>
                    <div class="hero-buttons">
                        <NuxtLink to="/projetos" class="btn-apple btn-apple-primary">
                            {{ t('home.hero.buttons.viewProjects') }}
                        </NuxtLink>
                        <NuxtLink to="/contato" class="btn-apple btn-apple-secondary">
                            {{ t('home.hero.buttons.talkToMe') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section section-padding">
            <div class="container-apple">
                <div class="stats-grid grid-apple grid-3">
                    <div class="stat-card glass-card scroll-animate" v-for="stat in stats" :key="stat.key">
                        <div class="stat-number text-title-1 gradient-text">{{ stat.displayValue.value }}+</div>
                        <div class="stat-label text-callout">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="projects-section section-padding">
            <div class="container-apple">
                <div class="section-header text-center mb-2xl scroll-animate">
                    <h2 class="text-title-1 mb-md">{{ t('home.projects.title') }}</h2>
                    <p class="text-body" style="color: var(--apple-text-secondary);">
                        {{ t('home.projects.subtitle') }}
                    </p>
                </div>

                <div class="projects-grid">
                    <div v-for="(project, index) in featuredProjects" :key="`featured-${project.id}`"
                        class="project-card glass-card scroll-animate" :style="{ animationDelay: `${index * 0.1}s` }"
                        @click="openProjectModal(project)">
                        <div class="project-image">
                            <img :src="project.thumbnail" :alt="project.name" />
                            <div class="project-overlay">
                                <div class="project-links">
                                    <a v-if="project.appleLink" :href="project.appleLink" target="_blank" @click.stop>
                                        <i class="bi bi-apple"></i>
                                    </a>
                                    <a v-if="project.googleLink" :href="project.googleLink" target="_blank" @click.stop>
                                        <i class="bi bi-google-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <h3 class="text-headline mb-sm">{{ project.name }}</h3>
                                <span class="project-category">{{ project.category }}</span>
                            </div>
                            <p class="text-subhead mb-md" style="color: var(--apple-text-secondary);">
                                {{ project.shortDescription }}
                            </p>
                            <div class="project-tech">
                                <span v-for="tech in project.technologies.split(', ').slice(0, 3)" :key="tech"
                                    class="tech-tag">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-xl">
                    <NuxtLink to="/projetos" class="btn-apple btn-apple-secondary">
                        {{ t('home.projects.viewAll') }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="services-section section-padding">
            <div class="container-apple">
                <div class="services-content">
                    <div class="services-text scroll-animate">
                        <h2 class="text-title-1 mb-lg">
                            {{ t('home.services.title') }} <span class="gradient-text">{{
                                t('home.services.titleHighlight') }}</span>{{ t('home.services.titleEnd') }}
                        </h2>
                        <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                            {{ t('home.services.description') }}
                        </p>

                        <div class="services-list">
                            <div v-for="service in services" :key="service.key" class="service-item scroll-animate">
                                <div class="service-icon">
                                    <i :class="service.icon"></i>
                                </div>
                                <div class="service-content">
                                    <h4 class="text-callout mb-sm">{{ service.title }}</h4>
                                    <p class="text-subhead" style="color: var(--apple-text-secondary);">
                                        {{ service.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section section-padding">
            <div class="container-apple">
                <div class="cta-content glass-card text-center scroll-animate">
                    <h2 class="text-title-1 mb-lg">
                        {{ t('home.cta.title') }} <span class="gradient-text">{{ t('home.cta.titleHighlight')
                        }}</span>{{ t('home.cta.titleEnd') }}
                    </h2>
                    <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                        {{ t('home.cta.subtitle') }}
                    </p>
                    <NuxtLink to="/contato" class="btn-apple btn-apple-primary">
                        {{ t('home.cta.button') }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Project Modal -->
        <transition name="modal">
            <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
                <div class="modal-content glass-card" @click.stop>
                    <button class="modal-close" @click="closeProjectModal">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <div class="modal-header">
                        <img :src="selectedProject.thumbnail" :alt="selectedProject.name" class="modal-image">
                        <div class="modal-info">
                            <h3 class="text-title-2 mb-sm">{{ selectedProject.name }}</h3>
                            <span class="modal-category">{{ selectedProject.category }}</span>
                            <p class="text-body mt-md" style="color: var(--apple-text-secondary);">
                                {{ selectedProject.longDescription }}
                            </p>
                        </div>
                    </div>
                    <div class="modal-body">
                        <h4 class="text-headline mb-md">{{ t('home.modal.techTitle') }}</h4>
                        <div class="modal-tech">
                            <span v-for="tech in selectedProject.technologies.split(', ')" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="modal-links mt-lg" v-if="selectedProject.appleLink || selectedProject.googleLink">
                            <a v-if="selectedProject.appleLink" :href="selectedProject.appleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-apple"></i> {{ t('home.modal.appStore') }}
                            </a>
                            <a v-if="selectedProject.googleLink" :href="selectedProject.googleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-google-play"></i> {{ t('home.modal.googlePlay') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>



<style scoped></style>


<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useScrollAnimation, useTypewriter, useCountUp } from '~/composables/useAnimations'

// Scroll animations
useScrollAnimation()

const { t, locale } = useI18n()

// Typewriter effect
const typewriterText = computed(() => t('home.typewriter'))
const { displayText, isComplete: isTypewriterComplete, startTypewriter, cleanup } = useTypewriter(
    typewriterText,
    100
)

// Stats with count up animation
const statsData = [
    { key: 'yearsExperience', value: 6, displayValue: ref(0) },
    { key: 'projectsDone', value: 50, displayValue: ref(0) },
    { key: 'happyClients', value: 200, displayValue: ref(0) }
]

const stats = computed(() =>
    statsData.map(stat => ({
        ...stat,
        label: t(`home.stats.${stat.key}`)
    }))
)

// Services data
const servicesData = [
    { key: 'mobile', icon: 'bi bi-phone' },
    { key: 'web', icon: 'bi bi-laptop' },
    { key: 'architecture', icon: 'bi bi-diagram-3' },
    { key: 'backend', icon: 'bi bi-server' },
    { key: 'design', icon: 'bi bi-palette' }
]

const services = computed(() => {
    return servicesData.map(service => ({
        ...service,
        title: t(`home.services.items.${service.key}.title`),
        description: t(`home.services.items.${service.key}.description`)
    }))
})

// Projects data
const { featuredProjects } = useProjects()

// Modal state
const selectedProject = ref(null)

// Methods
const openProjectModal = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
}

const getFloatingStyle = (index) => {
    const positions = [
        { top: '20%', left: '10%', animationDelay: '0s' },
        { top: '60%', left: '80%', animationDelay: '1s' },
        { top: '30%', left: '70%', animationDelay: '2s' },
        { top: '80%', left: '20%', animationDelay: '0.5s' },
        { top: '10%', left: '60%', animationDelay: '1.5s' },
        { top: '70%', left: '50%', animationDelay: '2.5s' }
    ]
    return positions[index - 1] || {}
}

// Watch for language changes and restart typewriter
watch(typewriterText, (newText) => {
    if (newText) {
        setTimeout(() => {
            startTypewriter()
        }, 100)
    }
}, { immediate: false })

// Initialize animations on mount
onMounted(() => {
    setTimeout(() => {
        startTypewriter()
    }, 500)

    // Start count up animations for stats
    setTimeout(() => {
        statsData.forEach((stat, index) => {
            const { current, startCountUp } = useCountUp(stat.value, 2000)
            setTimeout(() => {
                startCountUp()
                // Update the reactive value
                const updateStat = () => {
                    stat.displayValue.value = current.value
                    if (current.value < stat.value) {
                        requestAnimationFrame(updateStat)
                    }
                }
                updateStat()
            }, index * 200)
        })
    }, 1000)
})

onUnmounted(() => {
    cleanup()
})
</script>

<style scoped>
/* Futuristic Minimal Color Palette */
:root {
    --accent-orange: #ff6b35;
    --warm-orange: #ff8c42;
    --deep-black: #0a0a0a;
    --pure-white: #ffffff;
    --light-gray: #f5f5f5;
    --medium-gray: #a1a1aa;
    --dark-gray: #27272a;
    --charcoal: #18181b;
}

/* Hero Section */
.hero-section {
    height: 133vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: transparent;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
}

.hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.floating-element {
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        rgba(255, 255, 255, 0.1));
    border-radius: 50%;
    opacity: 0.08;
    animation: float 12s ease-in-out infinite, holographicSpin 25s linear infinite;
    filter: blur(40px);
    box-shadow: 
        0 0 40px rgba(255, 107, 53, 0.2),
        0 0 80px rgba(255, 140, 66, 0.1);
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 var(--spacing-lg);
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
}

/* Holographic Buttons */
.btn-apple {
    position: relative;
    padding: 16px 32px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.btn-apple::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent);
    transition: left 0.6s;
}

.btn-apple:hover::before {
    left: 100%;
}

.btn-apple-primary {
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-apple-primary:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
        0 20px 40px rgba(255, 107, 53, 0.4),
        0 0 60px rgba(255, 140, 66, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-apple-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--pure-white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
}

.btn-apple-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 107, 53, 0.4);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(255, 107, 53, 0.2);
}

.cursor {
    opacity: 1;
    transition: opacity 0.5s;
}

.cursor.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Futuristic Animations */
@keyframes cosmicPulse {
    0% { 
        opacity: 0.8;
        transform: scale(1);
    }
    100% { 
        opacity: 1;
        transform: scale(1.05);
    }
}

@keyframes gradientShift {
    0%, 100% { 
        background-position: 0% 50%;
    }
    50% { 
        background-position: 100% 50%;
    }
}

@keyframes holographicSpin {
    0% { 
        transform: rotate(0deg) scale(1);
        filter: blur(60px) hue-rotate(0deg);
    }
    25% { 
        transform: rotate(90deg) scale(1.1);
        filter: blur(50px) hue-rotate(90deg);
    }
    50% { 
        transform: rotate(180deg) scale(1);
        filter: blur(60px) hue-rotate(180deg);
    }
    75% { 
        transform: rotate(270deg) scale(1.1);
        filter: blur(50px) hue-rotate(270deg);
    }
    100% { 
        transform: rotate(360deg) scale(1);
        filter: blur(60px) hue-rotate(360deg);
    }
}

@keyframes float {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg);
    }
    25% { 
        transform: translateY(-20px) rotate(5deg);
    }
    50% { 
        transform: translateY(-10px) rotate(10deg);
    }
    75% { 
        transform: translateY(-30px) rotate(-5deg);
    }
}



@keyframes hologramGlow {
    0%, 100% {
        box-shadow: 
            0 0 15px rgba(255, 107, 53, 0.2),
            0 0 30px rgba(255, 255, 255, 0.1),
            0 0 45px rgba(0, 0, 0, 0.3);
    }
    50% {
        box-shadow: 
            0 0 20px rgba(255, 140, 66, 0.3),
            0 0 35px rgba(255, 107, 53, 0.2),
            0 0 50px rgba(0, 0, 0, 0.4);
    }
}

/* Gradient Text Effects */
.gradient-text {
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 50%, 
        var(--pure-white) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 6s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.3));
}

/* Glass Card Effects */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.4), 
        rgba(255, 255, 255, 0.3), 
        rgba(255, 140, 66, 0.4), 
        transparent);
    animation: hologramGlow 4s ease-in-out infinite;
}

/* Stats Section */
.stats-section {
    background: transparent;
    position: relative;
}

.stats-grid {
    gap: var(--spacing-xl);
    position: relative;
    z-index: 1;
}

.stat-card {
    text-align: center;
    padding: var(--spacing-xl);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        rgba(255, 255, 255, 0.5));
    opacity: 0;
    transition: opacity 0.4s;
}

.stat-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 107, 53, 0.3);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(255, 107, 53, 0.2);
}

.stat-card:hover::before {
    opacity: 1;
}

.stat-number {
    display: block;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(135deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        var(--pure-white));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 15px rgba(255, 107, 53, 0.3));
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
}

/* Projects Section */
.projects-section {
    background: transparent;
    position: relative;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
    position: relative;
    z-index: 1;
}

.project-card {
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    position: relative;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(255, 107, 53, 0.03) 0%, 
        rgba(255, 255, 255, 0.02) 50%, 
        rgba(39, 39, 42, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.4s;
    border-radius: 24px;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(255, 107, 53, 0.15),
        0 0 0 1px rgba(255, 107, 53, 0.3);
}

.project-card:hover::before {
    opacity: 1;
}

.project-image {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    flex-shrink: 0;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-links {
    display: flex;
    gap: var(--spacing-md);
}

.project-links a {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
    transition: all var(--transition-normal);
    backdrop-filter: blur(10px);
}

.project-links a:hover {
    background: var(--apple-blue);
    transform: scale(1.1);
}

.project-content {
    padding: var(--spacing-md);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-sm);
    gap: var(--spacing-sm);
}

.project-category {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.3);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-blue);
    font-weight: 500;
    white-space: nowrap;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(255, 107, 53, 0.1);
    border-radius: 20px;
    font-size: 0.75rem;
    color: var(--accent-orange);
    border: 1px solid rgba(255, 107, 53, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.tech-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.2), 
        transparent);
    transition: left 0.5s;
}

.tech-tag:hover {
    background: rgba(255, 107, 53, 0.2);
    border-color: var(--accent-orange);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.tech-tag:hover::before {
    left: 100%;
}

/* Services Section */
.services-section {
    background: transparent;
    position: relative;
}

.services-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    position: relative;
    z-index: 1;
}

.service-item {
    display: flex;
    gap: var(--spacing-md);
    align-items: flex-start;
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.service-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 107, 53, 0.08), 
        transparent);
    transition: left 0.6s;
}

.service-item:hover {
    transform: translateX(8px);
    border-color: rgba(255, 107, 53, 0.3);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(255, 107, 53, 0.2);
}

.service-item:hover::before {
    left: 100%;
}

.service-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
    position: relative;
    box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.4s;
}

.service-item:hover .service-icon {
    transform: scale(1.1) rotateY(10deg);
    box-shadow: 
        0 12px 32px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(255, 107, 53, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.service-content {
    flex: 1;
}

/* CTA Section */
.cta-section {
    background: transparent;
    position: relative;
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    backdrop-filter: blur(30px);
    position: relative;
    z-index: 1;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cta-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        rgba(255, 255, 255, 0.3));
    border-radius: 32px 32px 0 0;
}

/* Modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(ellipse at center, rgba(0, 102, 255, 0.1) 0%, transparent 70%),
        rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(30px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: var(--spacing-lg);
}

.modal-content {
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    backdrop-filter: blur(30px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.5),
        0 0 100px rgba(0, 102, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--stellar-white);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 1;
    backdrop-filter: blur(10px);
}

.modal-close:hover {
    background: rgba(255, 107, 53, 0.2);
    border-color: var(--accent-orange);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
}

.modal-header {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.modal-image {
    width: 140px;
    height: 100px;
    object-fit: cover;
    border-radius: var(--radius-md);
    flex-shrink: 0;
}

.modal-info {
    flex: 1;
}

.modal-category {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.3);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-blue);
    font-weight: 500;
    display: inline-block;
}

.modal-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.modal-links {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.modal-links .btn-apple {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: all var(--transition-normal);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-lg);
    }
}

@media (max-width: 768px) {
    .hero-content {
        padding: 0 var(--spacing-md);
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .project-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .project-card {
        min-height: 350px;
    }

    .project-image {
        height: 200px;
    }

    .service-item {
        flex-direction: column;
        text-align: center;
    }

    .modal-header {
        flex-direction: column;
    }

    .modal-image {
        width: 100%;
        height: 200px;
    }

    .modal-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .cta-content {
        padding: var(--spacing-xl);
    }

    .modal-overlay {
        padding: var(--spacing-md);
    }
}
</style>