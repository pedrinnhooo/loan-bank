<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="height: 85px;">
        <div class="container">
            <NuxtLink class="navbar-brand fw-bold" to="/" style="font-family: 'Roboto Mono', monospace;">
                <img src="/favicon.ico" alt="Logo" class="me-2 rounded" style="width: 21%;height: auto;"> />
                Pedro Ruffo
            </NuxtLink>

            <button class="navbar-toggler" type="button" @click="toggleSidebar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-2 li-style">
                        <NuxtLink to="/" class="nav-link" exact-active-class="active">Início</NuxtLink>
                    </li>
                    <li class="nav-item me-2 li-style">
                        <NuxtLink to="/sobre" class="nav-link" exact-active-class="active">Sobre</NuxtLink>
                    </li>
                    <li class="nav-item me-2 li-style">
                        <NuxtLink to="/projetos" class="nav-link" exact-active-class="active">Projetos</NuxtLink>
                    </li>
                    <li class="nav-item me-2 li-style">
                        <NuxtLink to="/contato" class="nav-link" exact-active-class="active">Contato</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <transition name="slide">
            <div v-if="isSidebarOpen" class="sidebar">
                <button class="close-btn" @click="toggleSidebar">&times;</button>
                <ul class="sidebar-nav">
                    <li>
                        <NuxtLink to="/home" class="nav-link" @click="toggleSidebar">Início</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/emprestimos" class="nav-link" @click="toggleSidebar">Empréstimos</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/taxas" class="nav-link" @click="toggleSidebar">Taxas</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contato" class="nav-link" @click="toggleSidebar">Contato</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/simulacao" class="nav-link" @click="toggleSidebar">Simulação</NuxtLink>
                    </li>
                </ul>
            </div>
        </transition>

        <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen;
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background-color: #000;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.5);
    padding-top: 60px;
    transition: transform 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    z-index: 1050;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s ease;
}

.close-btn:hover {
    color: #00dc82;
}

.sidebar-nav {
    list-style: none;
    padding: 0;
    text-align: center;
}

.sidebar-nav li {
    margin: 15px 0;
}

.sidebar-nav li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    display: block;
    transition: background 0.3s ease;
}

.sidebar-nav li a:hover {
    background-color: #00dc82;
    border-radius: 8px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1040;
}

.li-style {
    padding: 0px 5px;
    font-size: 14px;
    background-color: transparent;
    border-radius: 45px;
    border: 1px solid transparent;
}

.li-style .nav-link {
    display: block;
    padding: 7px 40px;
    text-align: center;
    color: grey;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 45px;
    transition: all 0.3s ease;
}

.li-style .nav-link.active {
    color: white;
    background-color: #272f2c70;
    border: 1px solid #00dc82;
}

.li-style .nav-link:hover:not(.active) {
    color: white !important;
    background-color: #272f2c70;
    border: 1px solid #00dc82;
}

@media (min-width: 992px) {
    .sidebar {
        display: none;
    }
}
</style>
