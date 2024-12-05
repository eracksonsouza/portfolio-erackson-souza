<script setup></script>

<template>
    <footer class="footer flex flex-col md:flex-row items-center justify-between p-5">
        <div>
            <p class="text-white font-bold">© 2024 Erackson Souza</p>
        </div>

        <div class="flex flex-col space-y-5 mt-4">

            <div >
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
            </div>
        </div>

    </footer>
</template>

<style scoped>
  .footer-title {
    font-size: 24px;
  }
  .footer-info {
    margin-bottom: 20px;
  }
  .footer-socials {
    margin-top: 20px;
  }
  .footer-socials ul {
    list-style: none;
  }
  .footer-socials li {
    margin-right: 20px;
  }
  .footer-socials a {
    color: #fff;
  }
  .footer-socials i {
    font-size: 24px;
  }
</style>