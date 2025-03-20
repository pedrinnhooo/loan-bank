<template>
    <div class="dark-home">

        <section class="hero-section">
            <img class="hero-video-bg" src="/images/capa.jpg" alt="Pessoa fazendo empréstimo" style="z-index: 0;" />

            <!-- <video class="hero-video-bg" src="/video/v6.mp4" autoplay muted loop playsinline></video> -->

            <div class="hero-overlay"></div>

            <div class="hero-content container">
                <h1 class="hero-title">Desenvolvedor de Soluções Digitais</h1>
                <p class="hero-subtitle">
                    Mobile Software Engineer - Flutter | Dart | Firebase | Front-end Developer | UI UX Designer
                </p>
                <div class="hero-buttons">
                    <NuxtLink to="#" class="btn btn-white">Projetos</NuxtLink>
                    <NuxtLink to="#" class="btn btn-outline-white">Fale Comigo</NuxtLink>
                </div>
            </div>
        </section>

        <section class="presentation-section">
            <div class="container">
                <div class="presentation-content">
                    <h2>Por que escolher meus serviços <span style="color: #00dc82;">?</span></h2>
                    <p>
                        Como Software Engineer com 7 anos de experiência, entrego soluções digitais que unem
                        performance, inovação e design intuitivo. Trabalho em todas as etapas do desenvolvimento – desde
                        aplicativos mobile robustos até interfaces web modernas – garantindo resultados consistentes e
                        personalizados para cada projeto.
                    </p>
                    <ul class="ul-style">
                        <li><strong>Desenvolvimento Mobile:</strong> Expertise em Flutter, Dart, GetX, MobX, MVVM e
                            metodologias ágeis para apps escaláveis e performáticos;</li>
                        <li><strong>Web e Front-end:</strong> Criação de interfaces dinâmicas com Vue.js, Nuxt.js,
                            JavaScript, TypeScript, HTML e CSS;</li>
                        <li><strong>Arquitetura Moderna:</strong> Aplicação de Clean Architecture e Microfrontend para
                            soluções organizadas e de fácil manutenção;</li>
                        <li><strong>Integração e Backend:</strong> Experiência com Firebase, .Net, PHP, BigQuery e SQL
                            para
                            integrações seguras e eficientes;</li>
                        <li><strong>Design &amp; UI/UX:</strong> Foco na experiência do usuário com ferramentas como
                            Figma e Marvel App, transformando ideias em interfaces atrativas e funcionais.</li>
                    </ul>
                </div>
                <div class="presentation-image">
                    <img src="/images/img1.webp" alt="Desenvolvedor Mobile e Web" />
                </div>
            </div>
        </section>


        <section class="cards-section">
            <div class="container">
                <h2 class="section-title">Projetos</h2>
                <p class="section-subtitle">
                    Conheça meus projetos que combinam inovação, design intuitivo e alta performance.
                </p>
                <div class="cards-grid">
                    <div class="card-item">
                        <img src="/images/img2.webp" alt="Aprovação Rápida" class="card-image" />
                        <h3 class="card-title">Banco do Nordeste</h3>
                        <p class="card-text">
                            Conte com agilidade: análise de crédito sem demoras desnecessárias.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img3.webp" alt="Taxas Competitivas" class="card-image" />
                        <h3 class="card-title">Banco do Pará</h3>
                        <p class="card-text">
                            Juros adequados ao seu perfil, sem surpresas na hora do pagamento.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img4.webp" alt="Parcelas Flexíveis" class="card-image" />
                        <h3 class="card-title">Banco Losango</h3>
                        <p class="card-text">
                            Personalize os prazos de pagamento conforme sua necessidade.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img5.webp" alt="Atendimento Especializado" class="card-image" />
                        <h3 class="card-title">Heineken</h3>
                        <p class="card-text">
                            Equipe pronta para ajudar em cada etapa, do início ao fim.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="extra-section">
            <div class="container extra-content">
                <div class="extra-text">
                    <h2>Quem pode solicitar <span style="color: #00dc82;">?</span></h2>
                    <p>
                        Qualquer pessoa maior de 18 anos, com renda comprovada e CPF regular,
                        pode dar início à solicitação do empréstimo. Atendemos também microempreendedores
                        e profissionais autônomos.
                    </p>
                </div>
                <div class="extra-image">
                    <img src="/images/img6.webp" alt="Clientes satisfeitos" />
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container cta-content">
                <h2 class="cta-title">Está pronto para dar o próximo passo <span style="color: #00dc82;">?</span></h2>
                <p class="cta-text">
                    Garanta já seu crédito e resolva suas pendências, invista no seu negócio
                    ou realize aquele sonho que estava faltando!
                </p>
                <NuxtLink to="#" class="btn btn-white" style="margin-top: 2%;">Solicitar Agora</NuxtLink>
            </div>
        </section>

    </div>
</template>

<script setup>
import '@/assets/styles/home.css';
</script>