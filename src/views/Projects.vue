<script setup>
import { ref, computed } from 'vue';
import NeiProjeto from '../assets/projetos/projeto-nei.png'
import TheMovie from '../assets/projetos/the-movie.png'
import SearchGitHub from '../assets/projetos/search-github-user.png'

const Projects = ref([
    {
        id: 1,
        image: NeiProjeto,
        title: 'NEI Market Analytics',
        description: 'Projeto de análise de mercado: Criptomoedas, ações, fundos imobiliarios, bolsa de valores com o intuito de passar dados em tempo real. Além disso o projeto tem um chat bot que usa a API do gemini para responder perguntas ao usuário.',
        technologies: ['Vue.js 3', 'TypeScript', 'Express.js', 'Tailwind CSS'],
        gitURL: 'https://github.com/bush1D3v/NEI_market_analytics',
        webURL: 'Em breve...'
    },
    {
        id: 2,
        image: TheMovie,
        title: 'The Movie API',
        description: 'O projeto consiste em fazer o consumo de uma API de filmes e exibir os filmes na tela com informações como: poster, título, sinopse, gênero, duração e data de lançamento.',
        technologies: ['CSS', 'JavaScript', 'React', 'Axios'],
        gitURL: 'https://github.com/eracksonsouza/EracksonT-05-APi-The-Movie',
        webURL: 'https://eracksont-05-api-the-movie-1siezwwho-erackson-souzas-projects.vercel.app/'
    },
    {
        id: 3,
        image: SearchGitHub,
        title: 'Search User GitHub',
        description: 'O projeto consiste em consumir a API do GitHub utilizando a função fetch. O usuário digita um nome de usuário e com base nisso, os dados do GitHub relacionados a esse usuário são retornados e exibidos diretamente na interface da aplicação.',
        technologies: ['CSS', 'JavaScript', 'Fetch'],
        gitURL: 'https://github.com/eracksonsouza/03.Search-User-Quest-APi-GitHub',
        webURL: 'https://eracksonsouza.github.io/03.Search-User-Quest-APi-GitHub/'
    },
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

</script>

<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="flex flex-col ">
                <h2 class="text-4xl font-bold text-white mt-10">Meus últimos Projetos</h2>
                <div class="border-b-2 border-[#f0bf6c] w-[100px] mt-2"></div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                        :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                    hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
                    ">
                            <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                    data-slot="icon"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                    </path>
                                </svg></a><a
                                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                                :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                    data-slot="icon"
                                    class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                </svg></a>
                        </div>
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-[#34353a] shadow-lg border border-[#34353a] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>
                        <p>Repositório 🔗: <a :href="project.gitURL" class="text-[#f0bf6c]"> {{ project.gitURL }}</a></p>
                        <p>Site 💻: <a :href="project.webURL" class="text-[#f0bf6c]"> {{ project.webURL }}</a></p>
                        <div class="flex flex-wrap p-2.5">
                            <div v-for="technology in project.technologies" :key="technology"
                                class="text-center ml-1 mt-1 rounded-3xl bg-[#f0bf6c] p-1"
                                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #34353a;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>
