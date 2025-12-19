<template>
    <div class="apple-about">
        <!-- Hero Section -->
        <section class="about-hero section-padding">
            <div class="hero-background">
                <div class="floating-elements">
                    <div class="floating-element" v-for="i in 6" :key="i" :style="getFloatingStyle(i)"></div>
                </div>
            </div>
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
                    <div class="experience-item linkedin-card scroll-animate">
                        <div class="company-logo">
                            <div class="logo-placeholder">H2</div>
                        </div>
                        <div class="experience-details">
                            <div class="experience-header">
                                <h3 class="company-name">{{ t('about.experience.items.h2.company') }}</h3>
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
                    </div>

                    <div class="experience-item linkedin-card scroll-animate">
                        <div class="company-logo">
                            <div class="logo-placeholder">FS</div>
                        </div>
                        <div class="experience-details">
                            <div class="experience-header">
                                <h3 class="company-name">{{ t('about.experience.items.foursys.company') }}</h3>
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
                    </div>

                    <div class="experience-item linkedin-card scroll-animate">
                        <div class="company-logo">
                            <div class="logo-placeholder">EY</div>
                        </div>
                        <div class="experience-details">
                            <div class="experience-header">
                                <h3 class="company-name">{{ t('about.experience.items.ey.company') }}</h3>
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
                    </div>

                    <div class="experience-item linkedin-card scroll-animate">
                        <div class="company-logo">
                            <div class="logo-placeholder">KM</div>
                        </div>
                        <div class="experience-details">
                            <div class="experience-header">
                                <h3 class="company-name">{{ t('about.experience.items.komus.company') }}</h3>
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
                    </div>

                    <div class="experience-item linkedin-card scroll-animate">
                        <div class="company-logo">
                            <div class="logo-placeholder">NP</div>
                        </div>
                        <div class="experience-details">
                            <div class="experience-header">
                                <h3 class="company-name">{{ t('about.experience.items.neopdv.company') }}</h3>
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
.apple-about {
    background: transparent;
}

.title-gradient {
    background: linear-gradient(135deg, #007AFF, #AF52DE) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    color: transparent !important;
}

.about-hero {
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

.education-summary-section {
    background: transparent;
}

.education-summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
}

.experience-section {
    background: transparent;
}

.experience-timeline {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.linkedin-card {
    display: flex;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.linkedin-card::before {
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
    opacity: 0;
    transition: opacity 0.3s;
}

.linkedin-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 107, 53, 0.2);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(255, 107, 53, 0.1);
}

.linkedin-card:hover::before {
    opacity: 1;
}

.company-logo {
    flex-shrink: 0;
}

.logo-placeholder {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.experience-details {
    flex: 1;
    min-width: 0;
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-sm);
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.company-name {
    color: var(--apple-text-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.experience-period {
    color: var(--accent-orange);
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
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
    background: transparent;
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
    background: transparent;
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

    .linkedin-card {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-md);
    }

    .company-logo {
        align-self: center;
    }

    .experience-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .experience-content {
        text-align: left;
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