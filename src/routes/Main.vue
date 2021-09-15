<template>
  <Sidenav ref="snav"></Sidenav>
  <Header @openSidenav="openSidenav"></Header>
  <div class="p-3">
    <template v-if="content.type === 'template'">
      <div v-html="content.html"></div>
    </template>
    <template v-else-if="content.type === 'video'">
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${content.v}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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