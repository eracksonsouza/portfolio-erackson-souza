<script setup>
import fotoErackson from "../assets/images/foto-erackson.png";
</script>

<template>
  <section
    id="about"
    class="w-full h-[90vh] md:h-[80vh] flex flex-col items-center justify-center"
  >
    <h2 class="text-4xl font-bold text-white mt-10">Sobre mim</h2>
    <div class="border-b-2 border-[#f0bf6c] w-[120px] mt-2"></div>

    <div
      class="flex flex-col items-center md:flex md:flex-row md:justify-center"
    >
      <div>
        <img
          :src="fotoErackson"
          alt="Foto about Erackson Souza"
          class="w-[600px] h-[400px]"
        />
      </div>

      <div class="flex flex-col space-y-5 ml-4">


        <p class="text-accent font-bold">
          💡 Sou um desenvolvedor web apaixonado por tecnologia e inovação.
          Tenho um forte interesse por aprimorar minhas habilidades em
          desenvolvimento web, buscando sempre novos desafios e oportunidades
          para aprender e crescer.
        </p>

        <p class="text-accent font-bold">
          💻 Desenvolvedor Web Full-stack sempre em busca de criar soluções
          que facilitam a vida de outras pessoas;
        </p>

        <p class="text-accent font-bold">
          🎓 Graduando em Análise e Desenvolvimento de Sistemas, pela
          Universidade Estácio de Sá
        </p>
      </div>
    </div>
  </section>
</template>
