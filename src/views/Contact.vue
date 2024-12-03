<script setup>
import '@fortawesome/fontawesome-free/css/all.css'

</script>

<template>
    <section id="contact" class="flex flex-col items-center mt-10">
        <h1 class="text-white text-3xl font-bold mt-5">ENTRE EM CONTATO</h1>
        <div class="border-b-2 border-[#f0bf6c] w-[100px] mb-10 mt-5"></div>
        <div class="flex flex-col items-center md:flex-row md:justify-center md:gap-5 ">
            <div class="mt-5 mb-5">
                <p class="w-[200px] bg-[#f0bf6c] text-white font-bold hover:bg-[#eccb91] hover:cursor-pointer p-1 rounded-md text-center"><i class="fa-regular fa-envelope"></i> souza.erackson@gmail.com</p>
            </div>
            <div>
                <p class="w-[200px] bg-[#f0bf6c] text-white font-bold hover:bg-[#eccb91] hover:cursor-pointer p-1 rounded-md text-center"><i class="fa-solid fa-phone"></i> <a href="https://wa.me/+5584991153472" target="_blank">(84) 99115-3472</a></p>
            </div>
        </div>
        <div class=" w-[400px] flex flex-col p-5 py-10 items-center bg-[#505053] mt-10 px-10 rounded-md">
            <form class="flex flex-col">
                <label for="name" class="text-white font-bold py-3">Nome:</label>
                <input type="text" placeholder="Nome" id="name" class="px-3 py-1 rounded-md w-[300px]">
                <label for="email" class="text-white font-bold py-3">Email: </label>
                <input type="email" placeholder="Email" id="email" class=" px-3 py-1 rounded-md w-[300px]">
                <label for="title" class="text-white font-bold py-3">Assunto:</label>
                <input type="text" placeholder="Assunto" id="title" class=" px-3 py-1 rounded-md w-[300px]">
                <label for="message" class="text-white font-bold py-3">Mensagem:</label>
                <input type="text" placeholder="Mensagem" id="message" class="px-3 py-1 rounded-md w-[300px] h-[200px]">
                <div class="flex  justify-center">
                    <button type="submit" class="bg-[#f0bf6c] text-white hover:bg-[#eccb91] rounded-md w-[64px] h-[32px] mt-5 font-bold ml-3" >Enviar</button>
                </div>
            </form>
        </div>
    </section>
</template>

