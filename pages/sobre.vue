<template>
    <div class="apple-about">
        <!-- Hero Section -->
        <section class="about-hero section-padding">
            <div class="container-apple">
                <div class="hero-content text-center scroll-animate">
                    <h1 class="text-large-title gradient-text mb-lg">{{ t('about.hero.title') }}</h1>
                    <p class="text-title-3 mb-xl"
                        style="color: var(--apple-text-secondary); max-width: 800px; margin: 0 auto;">
                        {{ t('about.hero.subtitle') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Education & Summary Section -->
        <section class="education-summary-section section-padding">
            <div class="container-apple">
                <div class="education-summary-grid">
                    <!-- Formação Card -->
                    <div class="glass-card scroll-animate">
                        <h2 class="text-title-1 mb-lg" style="color: var(--apple-text-primary);">{{ t('about.education.title') }}</h2>
                        <div class="education-item">
                            <h3 class="text-headline mb-sm">{{ t('about.education.course') }}</h3>
                            <p class="text-callout" style="color: var(--apple-blue);">{{ t('about.education.schoolPeriod') }}</p>
                        </div>
                    </div>

                    <!-- Resumo Card -->
                    <div class="glass-card scroll-animate">
                        <h2 class="text-title-1 mb-lg" style="color: var(--apple-text-primary);">{{ t('about.summary.title') }}</h2>
                        <p class="text-body" style="color: var(--apple-text-secondary); line-height: 1.8;">
                            {{ t('about.summary.content') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="experience-section section-padding">
            <div class="container-apple">
                <h2 class="text-title-1 text-center mb-2xl scroll-animate">{{ t('about.experience.title') }}</h2>

                <div class="experience-timeline">
                    <div class="experience-item glass-card scroll-animate">
                        <div class="experience-header">
                            <h3 class="text-title-2 gradient-text">{{ t('about.experience.items.h2.company') }}</h3>
                            <span class="experience-period">{{ t('about.experience.items.h2.period') }}</span>
                        </div>
                        <div class="experience-content">
                            <ul class="experience-list">
                                <li v-for="bullet in t('about.experience.items.h2.bullets')" :key="bullet">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="tag in t('about.experience.items.h2.tags')" :key="tag" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="experience-item glass-card scroll-animate">
                        <div class="experience-header">
                            <h3 class="text-title-2 gradient-text">{{ t('about.experience.items.foursys.company') }}</h3>
                            <span class="experience-period">{{ t('about.experience.items.foursys.period') }}</span>
                        </div>
                        <div class="experience-content">
                            <ul class="experience-list">
                                <li v-for="bullet in t('about.experience.items.foursys.bullets')" :key="bullet">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="tag in t('about.experience.items.foursys.tags')" :key="tag" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="experience-item glass-card scroll-animate">
                        <div class="experience-header">
                            <h3 class="text-title-2 gradient-text">{{ t('about.experience.items.ey.company') }}</h3>
                            <span class="experience-period">{{ t('about.experience.items.ey.period') }}</span>
                        </div>
                        <div class="experience-content">
                            <ul class="experience-list">
                                <li v-for="bullet in t('about.experience.items.ey.bullets')" :key="bullet">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="tag in t('about.experience.items.ey.tags')" :key="tag" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="experience-item glass-card scroll-animate">
                        <div class="experience-header">
                            <h3 class="text-title-2 gradient-text">{{ t('about.experience.items.komus.company') }}</h3>
                            <span class="experience-period">{{ t('about.experience.items.komus.period') }}</span>
                        </div>
                        <div class="experience-content">
                            <ul class="experience-list">
                                <li v-for="bullet in t('about.experience.items.komus.bullets')" :key="bullet">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="tag in t('about.experience.items.komus.tags')" :key="tag" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="experience-item glass-card scroll-animate">
                        <div class="experience-header">
                            <h3 class="text-title-2 gradient-text">{{ t('about.experience.items.neopdv.company') }}</h3>
                            <span class="experience-period">{{ t('about.experience.items.neopdv.period') }}</span>
                        </div>
                        <div class="experience-content">
                            <ul class="experience-list">
                                <li v-for="bullet in t('about.experience.items.neopdv.bullets')" :key="bullet">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="tag in t('about.experience.items.neopdv.tags')" :key="tag" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="skills-section section-padding">
            <div class="container-apple">
                <h2 class="text-title-1 text-center mb-2xl scroll-animate">{{ t('about.skills.title') }}</h2>

                <div class="skills-grid grid-apple grid-3">
                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-phone"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.mobile.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.mobile.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-laptop"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.web.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.web.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-server"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.backend.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.backend.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-diagram-3"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.architecture.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.architecture.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-palette"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.design.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.design.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="skill-category glass-card scroll-animate">
                        <div class="skill-icon">
                            <i class="bi bi-gear"></i>
                        </div>
                        <h3 class="text-headline mb-md">{{ t('about.skills.categories.methods.title') }}</h3>
                        <div class="skill-tags">
                            <span v-for="tag in t('about.skills.categories.methods.tags')" :key="tag" class="skill-tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section section-padding">
            <div class="container-apple">
                <div class="contact-card glass-card text-center scroll-animate">
                    <h2 class="text-title-1 mb-lg gradient-text">{{ t('about.contactCta.title') }}</h2>
                    <div class="contact-info grid-apple grid-2">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="bi bi-telephone"></i>
                            </div>
                            <div class="contact-details">
                                <h4 class="text-callout">{{ t('about.contactCta.phone') }}</h4>
                                <p class="text-subhead">+55 (11) 91211-7442</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h4 class="text-callout">{{ t('about.contactCta.email') }}</h4>
                                <p class="text-subhead">
                                    <a href="mailto:pedro.ruffo.dev@gmail.com" style="color: var(--apple-blue);">
                                        pedro.ruffo.dev@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="bi bi-geo-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4 class="text-callout">{{ t('about.contactCta.location') }}</h4>
                                <p class="text-subhead">São Paulo, Brasil</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="bi bi-github"></i>
                            </div>
                            <div class="contact-details">
                                <h4 class="text-callout">{{ t('about.contactCta.github') }}</h4>
                                <p class="text-subhead">
                                    <a href="https://github.com/pedrinnhooo" target="_blank"
                                        style="color: var(--apple-blue);">
                                        github.com/pedrinnhooo
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-xl">
                        <NuxtLink to="/contato" class="btn-apple btn-apple-primary">
                            {{ t('about.contactCta.button') }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { useScrollAnimation } from '~/composables/useAnimations'

const { t } = useI18n()

// Initialize scroll animations
useScrollAnimation()
</script>

<style scoped>
.apple-about {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.title-gradient {
    background: linear-gradient(135deg, #007AFF, #AF52DE) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    color: transparent !important;
}

.about-hero {
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

.about-hero::before {
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

.education-summary-section {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.education-summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
}

.experience-section {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.experience-timeline {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.experience-item {
    transition: all var(--transition-normal);
}

.experience-item:hover {
    transform: translateY(-4px);
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-md);
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.experience-period {
    color: var(--apple-blue);
    font-size: 0.875rem;
    font-weight: 500;
}

.experience-list {
    list-style: none;
    padding: 0;
    margin-bottom: var(--spacing-lg);
}

.experience-list li {
    position: relative;
    padding-left: var(--spacing-lg);
    margin-bottom: var(--spacing-sm);
    color: var(--apple-text-secondary);
    line-height: 1.6;
}

.experience-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    background: var(--apple-blue);
    border-radius: 50%;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.3);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-blue);
    font-weight: 500;
}

.skills-section {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.skills-grid {
    gap: var(--spacing-xl);
}

.skill-category {
    text-align: center;
    padding: var(--spacing-xl);
    transition: all var(--transition-normal);
}

.skill-category:hover {
    transform: translateY(-8px);
}

.skill-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--spacing-md);
    font-size: 1.5rem;
    color: white;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    justify-content: center;
}

.skill-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-text-secondary);
}

.contact-section {
    background: linear-gradient(135deg,
            var(--apple-dark-1) 0%,
            var(--apple-dark-2) 50%,
            var(--apple-dark-3) 100%);
}

.contact-card {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl);
}

.contact-info {
    gap: var(--spacing-xl);
    margin: var(--spacing-2xl) 0;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    text-align: left;
}

.contact-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.contact-details h4 {
    margin-bottom: var(--spacing-xs);
    color: var(--apple-text-primary);
}

.contact-details p {
    margin: 0;
    color: var(--apple-text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
    .education-summary-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .experience-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .skills-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .contact-info {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .contact-card {
        padding: var(--spacing-xl);
    }
}

@media (max-width: 480px) {

    .tech-tags,
    .skill-tags {
        justify-content: center;
    }

    .contact-item {
        flex-direction: column;
        text-align: center;
    }
}
</style>