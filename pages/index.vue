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
            
            <div class="container-apple">
                <div class="hero-content">
                    <div class="hero-text scroll-animate">
                        <h1 class="text-large-title gradient-text mb-lg">
                            {{ displayText }}
                            <span class="cursor" :class="{ 'blink': !isTypewriterComplete }">|</span>
                        </h1>
                        <p class="text-title-3 mb-xl" style="color: var(--apple-text-secondary);">
                            Mobile Software Engineer especializado em Flutter, Dart, Firebase e desenvolvimento web moderno
                        </p>
                        <div class="hero-buttons">
                            <NuxtLink to="/projetos" class="btn-apple btn-apple-primary">
                                Ver Projetos
                            </NuxtLink>
                            <NuxtLink to="/contato" class="btn-apple btn-apple-secondary">
                                Fale Comigo
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section section-padding">
            <div class="container-apple">
                <div class="stats-grid grid-apple grid-3">
                    <div class="stat-card glass-card scroll-animate" v-for="stat in stats" :key="stat.label">
                        <div class="stat-number text-title-1 gradient-text">{{ stat.displayValue }}+</div>
                        <div class="stat-label text-callout">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="projects-section section-padding">
            <div class="container-apple">
                <div class="section-header text-center mb-2xl scroll-animate">
                    <h2 class="text-title-1 mb-md">Projetos em Destaque</h2>
                    <p class="text-body" style="color: var(--apple-text-secondary);">
                        Alguns dos principais projetos que desenvolvi ao longo da minha carreira
                    </p>
                </div>

                <div class="projects-grid grid-apple grid-3">
                    <div 
                        v-for="(project, index) in featuredProjects" 
                        :key="project.id" 
                        class="project-card glass-card scroll-animate"
                        :style="{ animationDelay: `${index * 0.1}s` }"
                        @click="openProjectModal(project)"
                    >
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
                            <h3 class="text-headline mb-sm">{{ project.name }}</h3>
                            <p class="text-subhead mb-md" style="color: var(--apple-text-secondary);">
                                {{ project.shortDescription }}
                            </p>
                            <div class="project-tech">
                                <span v-for="tech in project.technologies.split(', ').slice(0, 3)" :key="tech" class="tech-tag">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-xl">
                    <NuxtLink to="/projetos" class="btn-apple btn-apple-secondary">
                        Ver Todos os Projetos
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
                            Por que escolher meus <span class="gradient-text">serviços</span>?
                        </h2>
                        <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                            Com 7 anos de experiência como Software Engineer, desenvolvo soluções digitais completas e 
                            personalizadas — de apps mobile robustos a interfaces web modernas — unindo performance, 
                            inovação e design intuitivo.
                        </p>
                        
                        <div class="services-list">
                            <div v-for="service in services" :key="service.title" class="service-item scroll-animate">
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
                        Pronto para dar o próximo passo no seu <span class="gradient-text">projeto</span>?
                    </h2>
                    <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                        Quer desenvolver um aplicativo do zero, modernizar sua plataforma ou criar uma experiência digital 
                        completa? Vamos conversar e descobrir como posso ajudar você a alcançar seus objetivos.
                    </p>
                    <NuxtLink to="/contato" class="btn-apple btn-apple-primary">
                        Fale Comigo Agora
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
                            <p class="text-body" style="color: var(--apple-text-secondary);">
                                {{ selectedProject.longDescription }}
                            </p>
                        </div>
                    </div>
                    <div class="modal-body">
                        <h4 class="text-headline mb-md">Tecnologias Utilizadas</h4>
                        <div class="modal-tech">
                            <span v-for="tech in selectedProject.technologies.split(', ')" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="modal-links mt-lg" v-if="selectedProject.appleLink || selectedProject.googleLink">
                            <a v-if="selectedProject.appleLink" :href="selectedProject.appleLink" target="_blank" class="btn-apple btn-apple-secondary">
                                <i class="bi bi-apple"></i> App Store
                            </a>
                            <a v-if="selectedProject.googleLink" :href="selectedProject.googleLink" target="_blank" class="btn-apple btn-apple-secondary">
                                <i class="bi bi-google-play"></i> Google Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>



<style scoped>
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.card-project {
    background-color: var(--color-card-bg);
    border: 1px solid #8080804d;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.card-project:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

.card-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-title {
    font-size: 1.1rem;
    color: #fff;
}

.card-desc {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.4;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.store-icons {
    margin-top: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.icon-link img {
    color: green;
    width: 24px;
    height: auto;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: var(--color-bg-darker);
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    padding: 2rem;
    position: relative;
    color: #fff;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { useScrollAnimation, useTypewriter, useCountUp } from '~/composables/useAnimations'

// Scroll animations
useScrollAnimation()

// Typewriter effect
const { displayText, isComplete: isTypewriterComplete, startTypewriter } = useTypewriter(
    'Desenvolvedor de Soluções Digitais', 
    100
)

// Stats with count up animation
const stats = ref([
    { label: 'Anos de Experiência', value: 7, displayValue: 0 },
    { label: 'Projetos Concluídos', value: 50, displayValue: 0 },
    { label: 'Clientes Satisfeitos', value: 30, displayValue: 0 }
])

// Services data
const services = ref([
    {
        title: 'Desenvolvimento Mobile',
        description: 'Flutter, Dart, GetX, MobX, MVVM e metodologias ágeis para apps escaláveis',
        icon: 'bi bi-phone'
    },
    {
        title: 'Desenvolvimento Web',
        description: 'Vue.js, Nuxt.js, JavaScript, TypeScript, HTML e CSS para interfaces dinâmicas',
        icon: 'bi bi-laptop'
    },
    {
        title: 'Arquitetura de Software',
        description: 'Clean Architecture e Microfrontend para organização e manutenção eficiente',
        icon: 'bi bi-diagram-3'
    },
    {
        title: 'Integrações Backend',
        description: 'Firebase, .Net, PHP, BigQuery e SQL para backends seguros e performáticos',
        icon: 'bi bi-server'
    },
    {
        title: 'UI/UX Design',
        description: 'Figma e Marvel App, com foco total na experiência do usuário',
        icon: 'bi bi-palette'
    }
])

// Projects data
const projects = ref([
    {
        id: 1,
        name: 'Bnb - Banco do Nordeste',
        thumbnail: '/images/bnb-thumb.jpg', 
        shortDescription: 'Aplicativo de cartões do Banco do Nordeste, permitindo controle de faturas, limites e muito mais.',
        longDescription: 'Aplicativo desenvolvido para o Banco do Nordeste, focado em gerenciamento de cartões de crédito. Implementações incluem controle de faturas, acompanhamento de gastos em tempo real, definição de limites, etc. O app foi desenvolvido em Flutter com arquitetura limpa, garantindo escalabilidade e fácil manutenção.',
        technologies: 'Flutter, Firebase, Clean Architecture, GitLab',
        appleLink: 'https://apps.apple.com/br/app/bnb-cartões/id1435796374',
        googleLink: 'https://play.google.com/store/apps/details?id=com.csu.bnb&hl=pt'
    },
    {
        id: 2,
        name: 'Banpara - Banco do Pará',
        thumbnail: '/images/banpara-thumb.jpg',
        shortDescription: 'Solução de cartão de crédito e controle de gastos para clientes Banpara, com múltiplas funcionalidades.',
        longDescription: 'Aplicativo de cartão de crédito Banpara, desenvolvido com Flutter. Funcionalidades incluem gerenciamento de fatura, notificação de compras em tempo real, ajuste de limite e integração com carteiras digitais (Apple Pay, Google Pay).',
        technologies: 'Flutter, .NET, Firebase, Docker, Nuxt.js',
        appleLink: 'https://apps.apple.com/br/app/banpará-cartões/id1526688256',
        googleLink: 'https://play.google.com/store/apps/details?id=com.csu.banpara&hl=pt'
    },
    {
        id: 3,
        name: 'Losango - Banco Losango',
        thumbnail: '/images/losango-thumb.jpg',
        shortDescription: 'Aplicativo Losango para gerenciamento de cartão, controle de gastos e parcelamentos flexíveis.',
        longDescription: 'Desenvolvimento de app para o Banco Losango, oferecendo aos usuários acompanhamento de despesas, parcelamentos e suporte direto. Integrado a uma arquitetura white-label que permitiu adaptação rápida para outros bancos.',
        technologies: 'Flutter, Vue.js, Clean Architecture, BigQuery',
        appleLink: 'https://apps.apple.com/br/app/losango/id1456294810?l=en-GB',
        googleLink: 'https://play.google.com/store/apps/details?id=com.csu.losango&hl=pt_BR'
    },
    {
        id: 6,
        name: 'Afinz - Banco Afinz',
        thumbnail: '/images/afinz-thumb.png',
        shortDescription: 'Banco Afinz com recursos de banco digital, controle de cartão e interface intuitiva.',
        longDescription: 'Criação do aplicativo para o Banco Afinz, focado em funcionalidades de um banco digital completo: abertura de conta, cartões de crédito, pagamentos de boletos e recarga de serviços. Forte ênfase em UI/UX.',
        technologies: 'Flutter, Firebase, Vue.js, UI/UX, JWT',
        appleLink: 'https://apps.apple.com/br/app/afinz/id1416167782',
        googleLink: 'https://play.google.com/store/apps/details?id=br.com.sorocred.sorocredapp&hl=en_US'
    },
    {
        id: 8,
        name: 'HeiClub - Heineken',
        thumbnail: '/images/heineken-thumb.jpg',
        shortDescription: 'Projeto privado para clientes Heineken, com pontos e integração de pagamentos digitais.',
        longDescription: 'Desenvolvimento de plataforma interna para Heineken, englobando programa de fidelidade (resgate de pontos) e integração com métodos de pagamento digital. Acesso restrito a clientes e funcionários.',
        technologies: 'Flutter, .NET, Docker, UI/UX',
        appleLink: null,
        googleLink: null
    },
    {
        id: 9,
        name: 'BackOffice - Prudential',
        thumbnail: '/images/prudential-thumb.jpeg',
        shortDescription: 'Sistema de gerenciamento de usuários e exportação/importação de dados em XLSX/CSV.',
        longDescription: 'Projeto interno para a Prudential, incluindo interface administrativa para cadastro e controle de usuários. Permite exportar dados em planilhas, além de importação e mapeamento automático de grandes volumes de informações.',
        technologies: 'Flutter Web, Firebase, Docker, XLSX',
        appleLink: null,
        googleLink: null
    }
])

// Featured projects (first 6)
const featuredProjects = computed(() => projects.value.slice(0, 6))

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

// Initialize animations on mount
onMounted(() => {
    setTimeout(() => {
        startTypewriter()
    }, 500)
    
    // Start count up animations for stats
    setTimeout(() => {
        stats.value.forEach((stat, index) => {
            const { current, startCountUp } = useCountUp(stat.value, 2000)
            setTimeout(() => {
                startCountUp()
                // Update the reactive value
                const updateStat = () => {
                    stat.displayValue = current.value
                    if (current.value < stat.value) {
                        requestAnimationFrame(updateStat)
                    }
                }
                updateStat()
            }, index * 200)
        })
    }, 1000)
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    /* No padding-top needed as header is transparent over hero */
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        var(--apple-dark-1) 0%, 
        var(--apple-dark-2) 50%, 
        var(--apple-dark-3) 100%
    );
}

.hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        ellipse at center,
        rgba(0, 122, 255, 0.1) 0%,
        rgba(175, 82, 222, 0.05) 50%,
        transparent 70%
    );
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
    background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
    border-radius: 50%;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
    filter: blur(40px);
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: var(--spacing-3xl) 0;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
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

/* Stats Section */
.stats-section {
    background: var(--apple-surface);
}

.stats-grid {
    gap: var(--spacing-xl);
}

.stat-card {
    text-align: center;
    padding: var(--spacing-xl);
}

.stat-number {
    display: block;
    margin-bottom: var(--spacing-sm);
}

.stat-label {
    color: var(--apple-text-secondary);
}

/* Projects Section */
.projects-section {
    background: var(--apple-background);
}

.projects-grid {
    gap: var(--spacing-xl);
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.project-card {
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-normal);
    min-height: 400px;
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

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    color: var(--apple-text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Services Section */
.services-section {
    background: var(--apple-surface);
}

.services-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.service-item {
    display: flex;
    gap: var(--spacing-md);
    align-items: flex-start;
}

.service-icon {
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

.service-content {
    flex: 1;
}

/* CTA Section */
.cta-section {
    background: var(--apple-background);
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl);
}

/* Modal */
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
    max-width: 600px;
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
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: var(--radius-md);
    flex-shrink: 0;
}

.modal-info {
    flex: 1;
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
@media (max-width: 768px) {
    .hero-content {
        padding: var(--spacing-2xl) 0;
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