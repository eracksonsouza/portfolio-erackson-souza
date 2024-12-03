<script setup>
import SocialIcons from '../components/SocialIcons.vue';
import FotoHome from '../assets/images/foto-home.png';
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue';

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '../assets/pdf/curriculo-erackson-souza.pdf'; 
  link.download = 'curriculo-erackson-souza.pdf';
  link.click();
};

</script>

<template>

  <section id="home" class="w-full h-[90vh] md:h-[80vh] flex flex-row items-center justify-center">
    <div class="flex flex-col items-center md:flex-row md:justify-center">
      <div class="flex flex-col items-center md:items-start">
        <div>
          <p class="font-bold text-4xl text-white ">Erackson Souza</p>
        </div>
        <div>
          <p class="font-bold text-2xl text-white">Desenvolvedor Web</p>
        </div>
        <div class="mt-5 flex space-x-5">
          <button
            class="bg-[#f0bf6c] text-white px-3 py-1 rounded-md font-semibold hover:bg-transparent border-2 border-[#f0bf6c] hover:text-yellow" @click="downloadCV">BAIXAR
            CV</button>
          <button id="#projects"
            class="bg-[#f0bf6c] text-white px-3 py-1 rounded-md font-semibold hover:bg-transparent border-2 border-[#f0bf6c] hover:text-yellow" href="#projects">PROJETOS</button>
        </div>
        <div class="mt-5">
          <nav class="p-5">
            <ul class="flex justify-center space-x-5">
              <li><a href="https://www.linkedin.com/in/eracksonsouza/" target="_blank" class="text-gray-400">
                  <i class="fab fa-linkedin fa-2x"></i>
                </a></li>
              <li><a href="https://github.com/eracksonsouza" target="_blank" class="text-gray-400">
                  <i class="fab fa-github fa-2x"></i>
                </a></li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=%2B5584991153472&text&type=phone_number&app_absent=0"
                  target="_blank" class="text-gray-400">
                  <i class="fab fa-whatsapp fa-2x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="order-first md:order-last">
        <img :src="FotoHome" alt="Foto do Erackson Souza">
      </div>
    </div>
  </section>

</template>

<style></style>