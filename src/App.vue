<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
import Home from './views/Home.vue';
import About from './views/About.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import Footer from './components/Footer.vue';


</script>

<template>

  <div class="bg-[#34353a] min-h-screen">
    <NavBar class="h-[80px]	sticky top-0"/>
    <Home />
    <About class="h-screen w-full"/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  
</template>
