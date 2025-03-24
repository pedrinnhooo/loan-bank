<template>
    <footer class="footer bg-dark text-white">
        <div class="container">
            <hr class="footer-divider" />

            <div class="footer-main">
                <NuxtLink class="footer-brand fw-bold" to="/">
                    <img src="/favicon.ico" alt="Logo" class="footer-logo" />
                    Pedro Ruffo
                </NuxtLink>

                <div class="footer-top">
                    <div class="footer-column">
                        <h4></h4>
                        <ul>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4></h4>
                        <ul>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"></NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Navegação</h4>
                        <ul>
                            <li>
                                <NuxtLink to="/home">Início</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/sobre">Sobre</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/projetos">Projetos</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contato">Contato</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 - Pedro Ruffo. Todos os direitos reservados.</p>
                <div class="social-icons">
                    <a href="mailto:pedro.ruffo.dev@gmail.com" class="social-icon" target="_blank"
                        rel="noopener noreferrer">
                        <i class="bi bi-envelope-fill"></i>
                    </a>

                    <a href="https://github.com/pedrinnhooo" class="social-icon" target="_blank"
                        rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a>

                    <a href="https://linkedin.com/in/pedro-ruffo-501385181" class="social-icon" target="_blank"
                        rel="noopener noreferrer">
                        <i class="bi bi-linkedin"></i>
                    </a>

                    <a href="https://discord.gg/NwWySEJF" class="social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-discord"></i>
                    </a>

                    <a href="https://wa.me/5511912117442" class="social-icon" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>


<script setup></script>

<style scoped>
p {
    margin-top: 0 !important;
    margin-bottom: 0;
}

.footer {
    background-color: #000;
    padding: 40px 0;
    font-size: 14px;
}

.footer-main {
    padding: 3% 0;
}

.footer-divider {
    border: 0;
    height: 2px;
    background: #00dc82;
    margin-bottom: 15px;
}

.footer-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.footer-brand {
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.footer-logo {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-top: -6px;
}

.footer-top {
    margin-top: -19px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
}

.footer-column {
    flex: 1;
    min-width: 200px;
    margin-bottom: 20px;
    text-align: right;
}

.footer-column h4 {
    color: #00dc82;
    font-size: 16px;
    margin-bottom: 15px;
    text-transform: uppercase;
}

.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column ul li {
    margin-bottom: 8px;
}

.footer-column ul li a {
    color: rgba(255, 255, 255, 0.521);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-column ul li a:hover {
    color: #00dc82;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 22px;
    border-radius: 20px;
    border: 1px solid #00dc8059;
    background-color: #021009;
}

.footer-bottom:hover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 22px;
    border-radius: 20px;
    border: 1px solid #00dc82;
    background-color: #021009;
    cursor: pointer;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icon {
    padding-left: 10px;
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
}

.social-icon:hover {
    color: #00dc82;
}

@media (max-width: 768px) {
    .footer-top {
        flex-direction: column;
        text-align: center;
    }

    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 24px;
    }

    .footer-header {
        justify-content: center;
    }
}
</style>
