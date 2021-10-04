<template>
  <Sidenav ref="snav"></Sidenav>
  <Header @openSidenav="openSidenav"></Header>
  <div class="p-3">
    <template v-if="content">

      <div
        v-if="content.type === 'template'"
        v-html="content.html"
      ></div>

      <div
        v-else-if="content.type === 'video'"
        class="p-4 sm:p-10 md:px-20 flex justify-center"
      >
        <div class="max-w-screen-lg w-full">
          <div class="relative" style="padding-top: 56.25%">
            <iframe
              :src="`https://www.youtube.com/embed/${content.v}`"
              class="absolute inset-0 w-full h-full shadow-md"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 class="text-center font-semibold sm:text-2xl lg:text-3xl mt-1 sm:mt-4">{{ content.title }}</h3>
        </div>
      </div>

      <div
        v-else-if="content.type === '360'"
        class="p-4 sm:p-10 md:px-20 flex justify-center"
      >
        <div class="max-w-screen-lg w-full">
          <div class="relative" style="padding-top: 56.25%">
            <iframe
              :src="`https://momento360.com/e/u/${content.v}`"
              class="absolute inset-0 w-full h-full shadow-md"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <h3 class="text-center font-semibold sm:text-2xl lg:text-3xl mt-1 sm:mt-4">{{ content.title }}</h3>
        </div>
      </div>

      <div
        v-else-if="content.type === 'img'"
        class="p-4 sm:p-10 md:px-20 flex justify-center"
      >
        <div class="max-w-screen-2xl w-full">
          <div class="flex flex-wrap justify-between">
            <img
              class="h-40 flex-grow m-1 object-cover rounded-sm shadow-md transform hover:scale-110 hover:z-10 transition"
              v-for="img in content.imgMin"
              :key="img.src"
              :src="`${content.urlPrefix}${img.src}${content.urlSuffix}`"
              alt=""
            >
          </div>
        </div>
      </div>

    </template>
    
    <hr v-if="list" class="border-black border-opacity-20 my-1 mx-2 sm:mx-6">

    <div
      v-if="list"
      class="flex flex-wrap items-end justify-center"
    >
      <div class="w-44 sm:w-56 m-4" v-for="elem in list.content" :key="elem">
        <h6 class="text-center text-sm font-semibold mb-1">{{ elem.title }}</h6>
        <div class="relative" style="padding-top: 56.25%">
          <img
            class="absolute inset-0 w-full h-full object-cover shadow-md cursor-pointer transform hover:scale-110 transition duration-150"
            :src="`${list.urlPrefix}${elem.imgUrl}${list.urlSuffix}`"
            :alt="elem.title"
            @click="navToId(elem.id)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Sidenav from '@/components/Sidenav.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { formatURL, getSectionContent, getList } from '@/convertedUrlData.js'

export default {
  components: {
    Header,
    Sidenav,
    HelloWorld
  },
  setup() {    
    const snav = ref(null);
    const content = getSectionContent();
    const list = getList();

    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      formatURL();
    });

    const openSidenav = () => {
      snav.value.show();
    };

    const navToId = (id) => {
      router.push({ path: '/', query: { sec: route.query.sec, id: id } })
    }

    return { snav, content, list, openSidenav, navToId };
  }
}

</script>