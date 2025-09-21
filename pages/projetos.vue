<template>
    <div class="apple-projects">
        <!-- Hero Section -->
        <section class="projects-hero section-padding">
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


</script>

<style scoped>
.apple-projects {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.projects-hero {
    height: 88vh;
    /* Compensa o zoom 0.8 (100 / 0.8 = 125) */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.projects-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center,
            rgba(0, 122, 255, 0.1) 0%,
            rgba(175, 82, 222, 0.05) 50%,
            transparent 70%);
}

.hero-content {
    position: relative;
    z-index: 2;
}





.projects-section {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
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
    box-shadow: 0 20px 40px rgba(0, 122, 255, 0.2);
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