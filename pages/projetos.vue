<template>
    <div class="apple-projects">
        <!-- Hero Section -->
        <section class="projects-hero section-padding">
            <div class="hero-background">
                <div class="floating-elements">
                    <div class="floating-element" v-for="i in 6" :key="i" :style="getFloatingStyle(i)"></div>
                </div>
            </div>
            <div class="container-apple">
                <div class="hero-content text-center scroll-animate">
                    <h1 class="text-large-title gradient-text mb-lg">{{ t('projects.hero.title') }}</h1>
                    <p class="text-title-3 mb-xl"
                        style="color: var(--apple-text-secondary); max-width: 600px; margin: 0 auto;">
                        {{ t('projects.hero.subtitle') }}
                    </p>
                </div>
            </div>
        </section>



        <!-- Projects Grid -->
        <section class="projects-section section-padding">
            <div class="container-apple">
                <div class="projects-grid">
                    <div v-for="(project, index) in projects" :key="`project-${project.id}`"
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
                                <span v-for="tech in project.technologies.split(', ').slice(0, 4)" :key="tech"
                                    class="tech-tag">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
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
                        <h4 class="text-headline mb-md">{{ t('projects.modal.techTitle') }}</h4>
                        <div class="modal-tech">
                            <span v-for="tech in selectedProject.technologies.split(', ')" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="modal-links mt-lg" v-if="selectedProject.appleLink || selectedProject.googleLink">
                            <a v-if="selectedProject.appleLink" :href="selectedProject.appleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-apple"></i> {{ t('projects.modal.appStore') }}
                            </a>
                            <a v-if="selectedProject.googleLink" :href="selectedProject.googleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-google-play"></i> {{ t('projects.modal.googlePlay') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '~/composables/useAnimations'

const { t } = useI18n()

// Initialize scroll animations
useScrollAnimation()

const selectedProject = ref(null)

const { projects } = useProjects()

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
</script>

<style scoped>
.apple-projects {
    background: transparent;
}

.projects-hero {
    height: 95vh;
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

.hero-content {
    position: relative;
    z-index: 2;
}





.projects-section {
    background: transparent;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
}

.project-card {
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-normal);
    min-height: 450px;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(255, 107, 53, 0.15),
        0 0 0 1px rgba(255, 107, 53, 0.3);
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
    margin-top: auto;
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
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
}

.modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    color: var(--apple-text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-normal);
    z-index: 1;
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
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
    .projects-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .project-card {
        min-height: 400px;
    }

    .project-image {
        height: 200px;
    }

    .filter-tabs {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: var(--spacing-sm);
    }

    .filter-tab {
        white-space: nowrap;
        flex-shrink: 0;
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
    .modal-overlay {
        padding: var(--spacing-md);
    }

    .project-header {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>