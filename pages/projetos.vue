<template>
    <div class="dark-home">
        <section class="background-section">
            <div class="container">
                <h2 class="top-space">Projetos</h2>
                <p>Alguns dos principais projetos em que atuei:</p>

                <div class="projects-grid">
                    <div v-for="project in projects" :key="project.id" class="card-project" @click="openModal(project)">
                        <img :src="project.thumbnail" class="card-image" :alt="project.name" />

                        <div class="card-content">
                            <h3 class="card-title">{{ project.name }}</h3>
                            <p class="card-desc">
                                {{ project.shortDescription }}
                            </p>

                            <div class="store-icons">
                                <a v-if="project.appleLink" :href="project.appleLink" target="_blank" @click.stop
                                    class="icon-link">
                                    <i class="bi bi-apple"></i>
                                </a>

                                <a v-if="project.googleLink" :href="project.googleLink" target="_blank" @click.stop
                                    class="icon-link" style="display: flex; align-items: center; gap: 2px;">
                                    <i class="bi bi-google"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <transition name="fade">
            <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button class="modal-close" @click="closeModal">&times;</button>
                    <h2>{{ selectedProject.name }}</h2>
                    <p>{{ selectedProject.longDescription }}</p>

                    <h4>Tecnologias Utilizadas:</h4>
                    <p>{{ selectedProject.technologies }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedProject = ref(null);

const projects = ref([
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
        id: 1,
        name: 'Bnb - Banco do Nordeste',
        thumbnail: '/images/bnb-thumb.jpg', // Substituir pela imagem real
        shortDescription: 'Aplicativo de cartões do Banco do Nordeste, permitindo controle de faturas, limites e muito mais.',
        longDescription: 'Aplicativo desenvolvido para o Banco do Nordeste, focado em gerenciamento de cartões de crédito. Implementações incluem controle de faturas, acompanhamento de gastos em tempo real, definição de limites, etc. O app foi desenvolvido em Flutter com arquitetura limpa, garantindo escalabilidade e fácil manutenção.',
        technologies: 'Flutter, Firebase, Clean Architecture, GitLab',
        appleLink: 'https://apps.apple.com/br/app/bnb-cartões/id1435796374',
        googleLink: 'https://play.google.com/store/apps/details?id=com.csu.bnb&hl=pt'
    },
    {
        id: 2,
        name: 'Banpara - Banco do Pará',
        thumbnail: '/images/banpara-thumb.jpg', // Substituir pela imagem real
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
        id: 9,
        name: 'BackOffice - Prudential',
        thumbnail: '/images/prudential-thumb.jpeg',
        shortDescription: 'Sistema de gerenciamento de usuários e exportação/importação de dados em XLSX/CSV.',
        longDescription: 'Projeto interno para a Prudential, incluindo interface administrativa para cadastro e controle de usuários. Permite exportar dados em planilhas, além de importação e mapeamento automático de grandes volumes de informações.',
        technologies: 'Flutter Web, Firebase, Docker, XLSX',
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
        appleLink: null,
        googleLink: null
    },
    {
        id: 7,
        name: 'Komus - Seguro Mobile',
        thumbnail: '/images/komus-thumb.jpeg',
        shortDescription: 'Aplicativo de seguro para celular, com planos e suporte integrado. Marca fundida com Pitz Insurance.',
        longDescription: 'App desenvolvido para oferecer planos de seguro móvel, com funcionalidades de registro de sinistros, acompanhamento de reparos e canal de suporte 24h. Posteriormente, a marca Komus foi incorporada à Pitz Insurance.',
        technologies: 'Flutter, Vue.js, Node.js, TypeScript, UI/UX',
        appleLink: null,
        googleLink: null
    },
    {
        id: 5,
        name: 'BlueC - Banco BlueC',
        thumbnail: '/images/bluec-thumb.avif',
        shortDescription: 'Aplicativo do Banco BlueC, integrando carteiras digitais para pagamento imediato.',
        longDescription: 'Integração de carteiras digitais (Apple Pay, Google Pay, Samsung Pay) ao app BlueC, facilitando pagamentos sem contato e gerenciamento de transações em tempo real.',
        technologies: 'Flutter, Docker, Google Pay, Apple Pay, Firebase',
        appleLink: null,  // Exemplo: não tem link Apple Store
        googleLink: 'https://play.google.com/store/apps/details?id=br.com.csu.baas&hl=pt_BR'
    },
    {
        id: 4,
        name: 'H2 Club - Groupe H2',
        thumbnail: '/images/h2club-thumb.png',
        shortDescription: 'App para gerenciamento de torneios, agenda e informações do clube H2, com push notifications.',
        longDescription: 'Aplicativo para membros do H2 Club, exibindo calendário de torneios, resultados, reservas e integração de notificações push segmentadas. Implementa reconhecimento facial/documental para cadastro e compliance com LGPD.',
        technologies: 'Flutter, BigQuery, JWT, Docker, PHP',
        appleLink: 'https://apps.apple.com/br/app/h2-club/id6466628886',
        googleLink: 'https://play.google.com/store/apps/details?id=com.h2.app&hl=pt_BR&pli=1'
    },
]);

function openModal(project) {
    selectedProject.value = project;
}

function closeModal() {
    selectedProject.value = null;
}
</script>

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