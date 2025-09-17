<template>
    <div class="apple-projects">
        <!-- Hero Section -->
        <section class="projects-hero section-padding">
            <div class="container-apple">
                <div class="hero-content text-center scroll-animate">
                    <h1 class="text-large-title gradient-text mb-lg">Meus Projetos</h1>
                    <p class="text-title-3 mb-xl"
                        style="color: var(--apple-text-secondary); max-width: 600px; margin: 0 auto;">
                        Uma coleção dos principais projetos que desenvolvi ao longo da minha carreira,
                        desde aplicativos bancários até soluções empresariais complexas.
                    </p>
                </div>
            </div>
        </section>



        <!-- Projects Grid -->
        <section class="projects-section section-padding">
            <div class="container-apple">
                <div class="projects-grid">
                    <div v-for="(project, index) in projects" :key="project.id"
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
                        <h4 class="text-headline mb-md">Tecnologias Utilizadas</h4>
                        <div class="modal-tech">
                            <span v-for="tech in selectedProject.technologies.split(', ')" :key="tech" class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="modal-links mt-lg" v-if="selectedProject.appleLink || selectedProject.googleLink">
                            <a v-if="selectedProject.appleLink" :href="selectedProject.appleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-apple"></i> App Store
                            </a>
                            <a v-if="selectedProject.googleLink" :href="selectedProject.googleLink" target="_blank"
                                class="btn-apple btn-apple-secondary">
                                <i class="bi bi-google-play"></i> Google Play
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

// Initialize scroll animations
useScrollAnimation()

const selectedProject = ref(null)

const projects = ref([
    {
        id: 1,
        name: 'Bnb - Banco do Nordeste',
        thumbnail: '/images/bnb-thumb.jpg',
        shortDescription: 'Aplicativo de cartões do Banco do Nordeste, permitindo controle de faturas, limites e muito mais.',
        longDescription: 'Aplicativo desenvolvido para o Banco do Nordeste, focado em gerenciamento de cartões de crédito. Implementações incluem controle de faturas, acompanhamento de gastos em tempo real, definição de limites, etc. O app foi desenvolvido em Flutter com arquitetura limpa, garantindo escalabilidade e fácil manutenção.',
        technologies: 'Flutter, Firebase, Clean Architecture, GitLab',
        categories: ['Mobile', 'Fintech'],
        category: 'Mobile',
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
        categories: ['Mobile', 'Fintech'],
        category: 'Mobile',
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
        categories: ['Mobile', 'Fintech'],
        category: 'Mobile',
        appleLink: 'https://apps.apple.com/br/app/losango/id1456294810?l=en-GB',
        googleLink: 'https://play.google.com/store/apps/details?id=com.csu.losango&hl=pt_BR'
    },
    {
        id: 4,
        name: 'H2 Club - Groupe H2',
        thumbnail: '/images/h2club-thumb.png',
        shortDescription: 'App para gerenciamento de torneios, agenda e informações do clube H2, com push notifications.',
        longDescription: 'Aplicativo para membros do H2 Club, exibindo calendário de torneios, resultados, reservas e integração de notificações push segmentadas. Implementa reconhecimento facial/documental para cadastro e compliance com LGPD.',
        technologies: 'Flutter, BigQuery, JWT, Docker, PHP',
        categories: ['Mobile'],
        category: 'Mobile',
        appleLink: 'https://apps.apple.com/br/app/h2-club/id6466628886',
        googleLink: 'https://play.google.com/store/apps/details?id=com.h2.app&hl=pt_BR&pli=1'
    },
    {
        id: 5,
        name: 'BlueC - Banco BlueC',
        thumbnail: '/images/bluec-thumb.avif',
        shortDescription: 'Aplicativo do Banco BlueC, integrando carteiras digitais para pagamento imediato.',
        longDescription: 'Integração de carteiras digitais (Apple Pay, Google Pay, Samsung Pay) ao app BlueC, facilitando pagamentos sem contato e gerenciamento de transações em tempo real.',
        technologies: 'Flutter, Docker, Google Pay, Apple Pay, Firebase',
        categories: ['Mobile', 'Fintech'],
        category: 'Mobile',
        appleLink: null,
        googleLink: 'https://play.google.com/store/apps/details?id=br.com.csu.baas&hl=pt_BR'
    },
    {
        id: 6,
        name: 'Afinz - Banco Afinz',
        thumbnail: '/images/afinz-thumb.png',
        shortDescription: 'Banco Afinz com recursos de banco digital, controle de cartão e interface intuitiva.',
        longDescription: 'Criação do aplicativo para o Banco Afinz, focado em funcionalidades de um banco digital completo: abertura de conta, cartões de crédito, pagamentos de boletos e recarga de serviços. Forte ênfase em UI/UX.',
        technologies: 'Flutter, Firebase, Vue.js, UI/UX, JWT',
        categories: ['Mobile', 'Fintech'],
        category: 'Mobile',
        appleLink: 'https://apps.apple.com/br/app/afinz/id1416167782',
        googleLink: 'https://play.google.com/store/apps/details?id=br.com.sorocred.sorocredapp&hl=en_US'
    },
    {
        id: 7,
        name: 'Komus - Seguro Mobile',
        thumbnail: '/images/komus-thumb.jpeg',
        shortDescription: 'Aplicativo de seguro para celular, com planos e suporte integrado. Marca fundida com Pitz Insurance.',
        longDescription: 'App desenvolvido para oferecer planos de seguro móvel, com funcionalidades de registro de sinistros, acompanhamento de reparos e canal de suporte 24h. Posteriormente, a marca Komus foi incorporada à Pitz Insurance.',
        technologies: 'Flutter, Vue.js, Node.js, TypeScript, UI/UX',
        categories: ['Mobile', 'Web'],
        category: 'Mobile',
        appleLink: null,
        googleLink: null
    },
    {
        id: 8,
        name: 'HeiClub - Heineken',
        thumbnail: '/images/heineken-thumb.jpg',
        shortDescription: 'Projeto privado para clientes Heineken, com pontos e integração de pagamentos digitais.',
        longDescription: 'Desenvolvimento de plataforma interna para Heineken, englobando programa de fidelidade (resgate de pontos) e integração com métodos de pagamento digital. Acesso restrito a clientes e funcionários.',
        technologies: 'Flutter, .NET, Docker, UI/UX',
        categories: ['Web', 'Enterprise'],
        category: 'Web',
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
        categories: ['Web', 'Enterprise'],
        category: 'Web',
        appleLink: null,
        googleLink: null
    },
    {
        id: 10,
        name: 'NeoPDV - Dashboard',
        thumbnail: '/images/neopdv-thumb.jpg',
        shortDescription: 'Dashboard de controle de vendas e PDV móvel para lojas, com métricas em tempo real.',
        longDescription: 'Solução voltada para o controle de vendas, permitindo que vendedores realizem atendimentos fora do caixa (PDV móvel) e acompanhem metas e métricas através de um dashboard web intuitivo.',
        technologies: 'Flutter, Vue.js, Node.js, HTML/CSS, UI/UX',
        categories: ['Web', 'Mobile'],
        category: 'Web',
        appleLink: null,
        googleLink: null
    }
])



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
        var(--apple-dark-3) 100%
    );
}

.projects-hero {
    height: 125vh; /* Compensa o zoom 0.8 (100 / 0.8 = 125) */
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
        var(--apple-dark-3) 100%
    );
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