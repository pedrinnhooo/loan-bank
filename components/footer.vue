<template>
    <footer class="apple-footer">
        <div class="container-apple">
            <!-- Footer Content -->
            <div class="footer-content">
                <!-- Brand Section -->
                <div class="footer-brand-section">
                    <NuxtLink to="/" class="footer-brand">
                        <OrangeLogo size="large" variant="gradient" />
                        <span class="brand-text">{{ t('footer.brand') }}</span>
                    </NuxtLink>
                    <p class="brand-description">
                        {{ t('footer.description') }}
                    </p>
                </div>

                <!-- Navigation Links -->
                <div class="footer-nav">
                    <div class="nav-column">
                        <h4 class="nav-title">{{ t('footer.columns.navigation.title') }}</h4>
                        <ul class="nav-list">
                            <li><NuxtLink to="/" class="nav-link">{{ t('footer.columns.navigation.links.home') }}</NuxtLink></li>
                            <li><NuxtLink to="/sobre" class="nav-link">{{ t('footer.columns.navigation.links.about') }}</NuxtLink></li>
                            <li><NuxtLink to="/projetos" class="nav-link">{{ t('footer.columns.navigation.links.projects') }}</NuxtLink></li>
                            <li><NuxtLink to="/contato" class="nav-link">{{ t('footer.columns.navigation.links.contact') }}</NuxtLink></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-title">{{ t('footer.columns.services.title') }}</h4>
                        <ul class="nav-list">
                            <li v-for="service in t('footer.columns.services.items')" :key="service">
                                <span class="nav-link">{{ service }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-title">{{ t('footer.columns.tech.title') }}</h4>
                        <ul class="nav-list">
                            <li v-for="tech in t('footer.columns.tech.items')" :key="tech">
                                <span class="nav-link">{{ tech }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-title">{{ t('footer.columns.contact.title') }}</h4>
                        <ul class="nav-list">
                            <li>
                                <a href="mailto:pedro.ruffo.dev@gmail.com" class="nav-link">
                                    {{ t('footer.columns.contact.email') }}
                                </a>
                            </li>
                            <li>
                                <a href="tel:+5511912117442" class="nav-link">
                                    {{ t('footer.columns.contact.phone') }}
                                </a>
                            </li>
                            <li><span class="nav-link">{{ t('footer.columns.contact.location') }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; {{ currentYear }} Pedro Ruffo. {{ t('footer.bottom.copyright') }}</p>
                    </div>

                    <div class="social-links">
                        <a 
                            href="https://github.com/pedrinnhooo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="social-link"
                            :aria-label="t('footer.social.github')"
                        >
                            <i class="bi bi-github"></i>
                        </a>
                        <a 
                            href="https://linkedin.com/in/pedro-ruffo-501385181" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="social-link"
                            :aria-label="t('footer.social.linkedin')"
                        >
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a 
                            href="https://wa.me/5511912117442" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="social-link"
                            :aria-label="t('footer.social.whatsapp')"
                        >
                            <i class="bi bi-whatsapp"></i>
                        </a>
                        <a 
                            href="https://discord.gg/NwWySEJF" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="social-link"
                            :aria-label="t('footer.social.discord')"
                        >
                            <i class="bi bi-discord"></i>
                        </a>
                        <a 
                            href="mailto:pedro.ruffo.dev@gmail.com" 
                            class="social-link"
                            :aria-label="t('footer.social.email')"
                        >
                            <i class="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script setup>
import { computed } from 'vue'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.apple-footer {
    background: transparent;
    border-top: 1px solid rgba(255, 107, 53, 0.2);
    padding: var(--spacing-3xl) 0 var(--spacing-xl);
    margin-top: auto;
    position: relative;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-3xl);
    margin-bottom: var(--spacing-3xl);
}

.footer-brand-section {
    max-width: 400px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    text-decoration: none;
    color: var(--apple-text-primary);
    margin-bottom: var(--spacing-lg);
}

/* Brand logo styles removed - now using AppleLogo component */

.brand-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--apple-text-primary);
}

.brand-description {
    color: var(--apple-text-secondary);
    line-height: 1.6;
    margin: 0;
}

.footer-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
}

.nav-column {
    display: flex;
    flex-direction: column;
}

.nav-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--apple-text-primary);
    margin-bottom: var(--spacing-md);
    margin-top: 0;
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.nav-link {
    color: var(--apple-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--transition-normal);
    cursor: pointer;
}

.nav-link:hover {
    color: var(--accent-orange);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--spacing-xl);
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
}

.copyright p {
    margin: 0;
    color: var(--apple-text-tertiary);
    font-size: 0.875rem;
}

.social-links {
    display: flex;
    gap: var(--spacing-md);
}

.social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--apple-text-secondary);
    text-decoration: none;
    font-size: 1.125rem;
    transition: all var(--transition-normal);
}

.social-link:hover {
    background: var(--accent-orange);
    border-color: var(--accent-orange);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
    
    .footer-nav {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .apple-footer {
        padding: var(--spacing-2xl) 0 var(--spacing-lg);
    }
    
    .footer-nav {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
    
    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-md);
    }
    
    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .footer-brand {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-md);
    }
    
    .brand-text {
        font-size: 1.25rem;
    }
    
    .social-links {
        flex-wrap: wrap;
        gap: var(--spacing-sm);
    }
}
</style>
