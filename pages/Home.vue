<template>
    <div class="dark-home">

        <section class="hero-section">
            <img  class="hero-video-bg" src="/images/capa.jpg" alt="Pessoa fazendo empréstimo"  style="z-index: 0;"/>

            <!-- <video class="hero-video-bg" src="/video/v6.mp4" autoplay muted loop playsinline></video> -->

            <div class="hero-overlay"></div>

            <div class="hero-content container">
                <h1 class="hero-title">Seu Empréstimo Bancário</h1>
                <p class="hero-subtitle">
                    Obtenha crédito de forma simples, segura e sem burocracia.
                </p>
                <div class="hero-buttons">
                    <NuxtLink to="#" class="btn btn-white">Simular Empréstimo</NuxtLink>
                    <NuxtLink to="#" class="btn btn-outline-white">Fale Conosco</NuxtLink>
                </div>
            </div>
        </section>

        <section class="presentation-section">
            <div class="container">
                <div class="presentation-content">
                    <h2>Por que seu Empréstimo conosco <span style="color: #00dc82;">?</span></h2>
                    <p>
                        Trabalhamos com as melhores taxas do mercado e uma análise rápida.
                        Aqui, você consegue:
                    </p>
                    <ul class="ul-style">
                        <li>Taxas de juros competitivas e transparentes;</li>
                        <li>Parcelas que cabem no seu bolso;</li>
                        <li>Atendimento consultivo, sem burocracia excessiva;</li>
                        <li>Processo 100% digital, rápido e seguro.</li>
                    </ul>
                </div>
                <div class="presentation-image">
                    <img src="/images/img1.webp" alt="Pessoa fazendo empréstimo" />
                </div>
            </div>
        </section>

        <section class="cards-section">
            <div class="container">
                <h2 class="section-title">Principais Vantagens</h2>
                <p class="section-subtitle">
                    Entenda por que nosso serviço de crédito é ideal para você.
                </p>
                <div class="cards-grid">
                    <div class="card-item">
                        <img src="/images/img2.webp" alt="Aprovação Rápida" class="card-image" />
                        <h3 class="card-title">Aprovação Rápida</h3>
                        <p class="card-text">
                            Conte com agilidade: análise de crédito sem demoras desnecessárias.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img3.webp" alt="Taxas Competitivas" class="card-image" />
                        <h3 class="card-title">Taxas Competitivas</h3>
                        <p class="card-text">
                            Juros adequados ao seu perfil, sem surpresas na hora do pagamento.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img4.webp" alt="Parcelas Flexíveis" class="card-image" />
                        <h3 class="card-title">Parcelas Flexíveis</h3>
                        <p class="card-text">
                            Personalize os prazos de pagamento conforme sua necessidade.
                        </p>
                    </div>

                    <div class="card-item">
                        <img src="/images/img5.webp" alt="Atendimento Especializado" class="card-image" />
                        <h3 class="card-title">Atendimento Especializado</h3>
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
                <h2 class="cta-title">Está pronto para dar o próximo passo  <span style="color: #00dc82;">?</span></h2>
                <p class="cta-text">
                    Garanta já seu crédito e resolva suas pendências, invista no seu negócio
                    ou realize aquele sonho que estava faltando!
                </p>
                <NuxtLink to="#" class="btn btn-white" style="margin-top: 2%;">Solicitar Agora</NuxtLink>
            </div>
        </section>

    </div>
</template>

<script setup></script>

<style scoped>

/* ---------------------------
     VARIÁVEIS DE COR (DARK MODE)
  ---------------------------- */
:root {
    --color-bg-dark: #000000;
    --color-bg-darker: #1a1a1c;
    --color-text: #ffffff;
    --color-text-secondary: #cccccc;
    --color-border: #2f2f31;
    --color-card-bg: #212224;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p {
    color: rgb(169, 169, 169) !important;
    margin: 20px;
}

.dark-home {
    background-color: var(--color-bg-dark);
    color: var(--color-text);
    font-family: 'Open Sans', sans-serif;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

/* ---------------------------
     HERO SECTION
  ---------------------------- */
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 12%;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #fff;
    letter-spacing: 1px;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: #fff;
    max-width: 650px;
    margin: 0 auto 2rem;
}

.hero-buttons {
    display: inline-flex;
    gap: 1rem;
}

/* ---------------------------
     BOTÕES GERAIS
  ---------------------------- */
.btn {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
}

.btn-white {
    background-color: #00dc8200;
    color: #ffffff;
    border-color: #00dc82;
    border-radius: 45px !important;
}

.btn-white:hover {
    background-color: transparent;
    color: #00dc82;
    border-color: #fff;
}

.btn-outline-white {
    background-color: transparent;
    color: #fff;
    border-color: #fff;
    border-radius: 45px !important;
}

.btn-outline-white:hover {
    background-color: #fff;
    color: #000;
}

/* ---------------------------
     SEÇÃO DE APRESENTAÇÃO
  ---------------------------- */
.presentation-section {
    background-color: black;
    color: white !important;
    padding: 3rem 0;
}

.presentation-content {
    flex: 1;
}

.presentation-image {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.presentation-image img {
    max-width: 75%;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.ul-style {
    background-color: #0d0d0d;
    border: 1px solid #00dc802a;
    padding: 40px;
    border-radius: 10px;
    color: #b9b7b7;
}

li {
    margin: 10px 0;
}

li::marker {
  color: #00dc82;
}

@media (min-width: 768px) {
    .presentation-section .container {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
}

/* ---------------------------
     CARDS SECTION
  ---------------------------- */
.cards-section {
    background-color: black;
    color: white !important;
    padding: 4rem 0;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.section-subtitle {
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
}

.cards-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.card-item {
    background-color: var(--color-card-bg);
    border: 1px solid #8080804d;
    border-radius: 10px;
    padding-bottom: 20px;
    font-size: smaller;
    box-shadow: 0 0 15px rgb(123 123 123 / 38%);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.card-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

.card-image {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 1rem;
}

.card-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

.card-text {
    color: var(--color-text-secondary);
    line-height: 1.4;
}

/* ---------------------------
     SEÇÃO EXTRA
  ---------------------------- */
.extra-section {
    background-color: #0f0f0f;
    color: white !important;
    padding: 4rem 0;
}

.extra-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.extra-text {
    flex: 1;
}

.extra-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.extra-image img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

@media (min-width: 768px) {
    .extra-content {
        flex-direction: row;
        align-items: center;
    }
}

/* ---------------------------
     CTA SECTION (FINAL)
  ---------------------------- */
.cta-section {
    background-color: black;
    color: white !important;
    text-align: center;
    padding: 4rem 0;
}

.cta-title {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.cta-text {
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}
</style>