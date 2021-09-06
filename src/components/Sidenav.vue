<template>
  <div @click.self="hide" class="overlay bg-black fixed w-screen h-screen top-0 left-0 z-10 transition duration-500" :class="{ active: active ? 'active' : '', showing: showing ? 'showing': '' }">
    <div class="sidenav h-full w-screen sm:w-80 float-right p-2 bg-white shadow-lg transition duration-500 overflow-y-auto">
      <ul class="text-sm font-medium text-gray-500">
        <div v-for="(entry, index) in menu" v-bind:key="entry">
          <li class="p-2 text-black flex items-center">
            <i class="text-lg mr-2" :class="entry.icon"></i>
            <span class="text-xs font-bold uppercase">{{ entry.name }}</span>
          </li>
          <li
            class="p-3 pl-4 select-none cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-5 transition duration-150"
            v-for="item in entry.list"
            v-bind:key="item.sec"
            @click="navTo(item.sec)"
          >
            {{ item.name }}
          </li>
          <li v-if="index < menu.length - 1"><hr class="m-2"></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { sidenav } from '@/contenido.json'

export default {
  setup() {
    const router = useRouter();
        
    const active = ref(false);
    const showing = ref(false);
    const menu = ref(sidenav);

    const hide = () => {
      active.value = false;
      setTimeout(() => showing.value = false, 500);
    };
    
    const show = () => {
      active.value = true;
      showing.value = true;
    };
    
    const navTo = (sec) => {
      router.push({ path: '/', query: { sec: sec } })
    }

    return { active, showing, menu, hide, show, navTo };
  },
}
</script>

<style lang="postcss" scoped>
.overlay {
  @apply bg-opacity-0 invisible;
}

.overlay.active {
  @apply bg-opacity-50;
}

.overlay.showing {
  @apply visible;
}

.overlay:not(.active) .sidenav {
  @apply transform translate-x-full;
}

</style>