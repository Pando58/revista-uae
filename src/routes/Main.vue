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
    
    <!-- Contenido (Descripción si no se especifíca un ID, de lo contrario mostrar el video / 360 / fotos) -->
    <!-- División -->
    <!-- Lista de videos del mismo tema -->
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