<script setup>
import { ref } from 'vue';

import logoHTML from '../assets/images-technologies/logo-html.png'
import logoCSS from '../assets/images-technologies/logo-css.png'
import logoJavaScript from '../assets/images-technologies/logo-js.png'
import logoTypeScript from '../assets/images-technologies/logo-typescript.png'
import logoVue from '../assets/images-technologies/logo-vue.js.png'
import logoReact from '../assets/images-technologies/react-logo.png'
import logoTailwind from '../assets/images-technologies/logo-tailwind.png'
import logoPostgresql from '../assets/images-technologies/logo-postgre.png'
import logoNode from '../assets/images-technologies/logo-node.png'
import logoExpress from '../assets/images-technologies/logo-express.png'

const tabs = ref([
    { id: 'front-end', name: ' < Front-end >' },
    { id: 'back-end', name: ' < Back-end />' },
])

const selectTab = ref('front-end')

const technologies = ref([
    { id: 'html', name: 'HTML', tab: 'front-end', logo: logoHTML },
    { id: 'css', name: 'CSS', tab: 'front-end', logo: logoCSS },
    { id: 'javascript', name: 'JavaScript', tab: 'front-end', logo: logoJavaScript },
    { id: 'typescript', name: 'TypeScript', tab: 'front-end', logo: logoTypeScript },
    { id: 'react', name: 'React', tab: 'front-end', logo: logoReact },
    { id: 'vue', name: 'Vue', tab: 'front-end', logo: logoVue },
    { id: 'node', name: 'Node.js', tab: 'back-end', logo: logoNode },
    { id: 'express', name: 'Express.js', tab: 'back-end', logo: logoExpress },  
    { id: 'postgresql', name: 'PostgreSQL', tab: 'back-end', logo: logoPostgresql },
    { id: 'tailwind', name: 'Tailwind CSS', tab: 'front-end', logo: logoTailwind },
])

const changeTab = (id) => {
    selectTab.value = id
}

const buttonClass = 'bg-[#fffefe] hover:bg-[#f0bf6c] w-[110px] h-[40px] px-4 py-2 rounded-md flex items-center justify-center text-black font-bold'
</script>

<template>
    <section id="skills">
        <div class="flex flex-col items-center justify-center ">
            <h2 class="text-4xl font-bold text-white mt-10">Linguagens e Frameworks</h2>
            <div class="border-b-2 border-[#f0bf6c] w-[100px] mt-2"></div>
        </div>
        <div class="flex  space-x-5 mt-10 items-center justify-center">
            <button v-for="tab in tabs" :key="tab.id" @click="changeTab(tab.id)"
                :class="{ 'active': selectTab === tab.id, 'bg-[#f0bf6c]': selectTab === tab.id }"
                class="bg-[#fffefe] hover:bg-[#f0bf6c] w-[110px] h-[40px] px-4 py-2 rounded-md flex items-center justify-center text-black font-bold">
                {{ tab.name }}
            </button>
        </div>
        <div class="flex flex-wrap justify-center mt-10 gap-10">
        <div v-for="tech in technologies" :key="tech.id" v-show="selectTab === tech.tab">
          <div
            class="cursor-pointer bg-accent w-32 h-32 border border-primary p-3 rounded-md flex flex-col items-center justify-center">
            <img v-if="tech.logo" :src="tech.logo" alt="" class="w-[50px] h-[50px]">
            <svg v-else viewBox="0 0 128 128">
              <path
                d="M128,64c0,25.4-20.6,46-46,46S0,89.4,0,64S20.6,0,46,0s46,20.6,46,46S89.4,128,64,128S0,89.4,0,64S20.6,0,46,0S128,20.6,128,46S101.4,128,64,128z"
                fill="#35495e"></path>
            </svg>
            <span class="text-black font-bold">{{ tech.name }}</span>
          </div>
        </div>
          </div>
    </section>
</template>

<style scoped>
svg {
    max-width: 65px;
    max-height: 65px;
}

.active {
    background-color: #f0bf6c;
    color: white;
}
</style>