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

<script setup>
    import '@/assets/styles/home.css';
</script>