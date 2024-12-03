<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const routes = ref ([
    { path: '/', name: 'Home' },
    { path: '/about', name: 'Sobre mim' },
    { path: '/skills', name: 'Habilidades' },
    { path: '/projects', name: 'Projetos' },
    { path: '/contact', name: 'Contato' },
])


const isMenuOpen = ref(false)
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

import LogoEs from '../assets/images/logo-es.png'

</script>


<template>
    <header class="bg-[#34353a] flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="text-white text-3xl font-bold">
            <img :src="LogoEs" alt="Logo Es" class="w-[100px] h-[100px] cursor-pointer">
        </div>

        <!--Mobile toggle Button-->
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <i class="fa-solid fa-x" style="color: #ffffff;"></i>
                </span>

                <span v-else class="text-5xl">
                    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
                </span>
            </button>
        </div>
        <!-- Navbar link -->
        <nav :class="['h-[50dvh] bg-opacity-90 fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#34353a] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block' : 'hidden'
        ]">

            <ul class=" flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">

                <li><a href="#home" class="block text-white transition hover:text-[#f0bf6c] ease-linear text-2xl md:text-lg" >HOME</a></li>
                <li><a href="#about" class="block text-white transition hover:text-[#f0bf6c] ease-linear text-2xl md:text-lg">SOBRE MIM</a></li>
                <li><a href="#skills" class="block text-white transition hover:text-[#f0bf6c] ease-linear text-2xl md:text-lg">HABILIDADES</a></li>
                <li><a href="#projects" class="block text-white transition hover:text-[#f0bf6c] ease-linear text-2xl md:text-lg">PROJETOS</a></li>
                <li><a href="#contact" class="block text-white transition hover:text-[#f0bf6c] ease-linear text-2xl md:text-lg">CONTATO</a></li>


            </ul>
        </nav>

    </header>
</template>

<style scoped>
li:hover {
    text-decoration: underline;
}
</style>