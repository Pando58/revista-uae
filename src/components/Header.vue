<template>
  <div class="h-14">
    <nav class="fixed z-10 w-full h-14 p-2 flex justify-between items-center bg-green-600 shadow-md">
      <div class="h-10 hidden sm:block">
        <a href="https://unialvaedison.edu.mx/" target="_blank">
          <img src="@/assets/logo_aguila_borde.png" class="h-full cursor-pointer filter hover:brightness-110 transition duration-75" alt="Página principal">
        </a>
      </div>
      <span class="mx-1 text-white font-medium sm:text-center sm:text-lg lg:text-xl">{{ title }}</span>
      <button class="w-10 h-10 flex justify-center items-center rounded-sm hover:bg-transparent-white active:bg-transparent-black transition duration-150" @click="$emit('openSidenav')">
        <i class="fas fa-bars text-white text-xl"></i>
      </button>
    </nav>
  </div>
</template>

<script>
import { getTitle } from '@/convertedUrlData.js'

export default {
  emits: ['openSidenav'],
  setup() {
    const title = getTitle();

    return { title };
  }
}
</script>