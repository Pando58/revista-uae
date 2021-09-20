<template>
  <Sidenav ref="snav"></Sidenav>
  <Header @openSidenav="openSidenav"></Header>
  <div class="p-3">
    <template v-if="content.type === 'template'">
      <div v-html="content.html"></div>
    </template>
    <template v-else-if="content.type === 'video'">
      <div class="p-4 sm:p-10 md:px-20 flex justify-center">
        <div class="max-w-screen-lg w-full">
          <div class="relative" style="padding-top: 56.25%">
            <iframe
              :src="`https://www.youtube.com/embed/${content.v}`"
              class="absolute inset-0 w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 class="text-center font-semibold sm:text-2xl lg:text-3xl mt-1 sm:mt-4">{{ content.title }}</h3>
        </div>
      </div>
    </template>
    
    <hr class="border-black border-opacity-20 my-1 mx-2 sm:mx-6">

    <div class="flex flex-wrap justify-center">
      <div class="w-44 sm:w-56 m-4" v-for="i in [1,1,1,1,1,1,1]" :key="i">
        <h6 class="text-center text-sm font-semibold mb-1">Lic. en Administración y Gestión Empresarial</h6>
        <div class="relative" style="padding-top: 56.25%">
          <img
            class="absolute inset-0 w-full h-full object-cover shadow-md cursor-pointer transform hover:scale-110 transition duration-150"
            src="https://img.youtube.com/vi/i4PrwRXx4Fg/0.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import Header from '@/components/Header.vue'
import Sidenav from '@/components/Sidenav.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { formatURL, getSectionContent } from '@/convertedUrlData.js'

export default {
  components: {
    Header,
    Sidenav,
    HelloWorld
  },
  setup() {    
    const snav = ref(null);
    const content = getSectionContent();

    onBeforeMount(() => {
      formatURL();
    });

    const openSidenav = () => {
      snav.value.show();
    };

    return { snav, content, openSidenav };
  }
}

</script>