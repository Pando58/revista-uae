<template>
  <div @click.self="hide" class="overlay bg-black fixed w-screen h-screen top-0 left-0 z-10 transition duration-500" :class="{ active: active ? 'active' : '', showing: showing ? 'showing': '' }">
    <div class="sidenav h-full w-80 float-right bg-white shadow-lg transition duration-500"><span class="inline-block m-3 font-medium">Test</span></div>
  </div>
</template>

<script>


/* 


cambiar color transparente por bg-opacity-
hacer responsivo, mobile first


*/


import { ref } from 'vue'

export default {
  setup() {
    const active = ref(false);
    const showing = ref(false);

    const hide = () => {
      active.value = false;
      setTimeout(() => showing.value = false, 500);
    };
    
    const show = () => {
      active.value = true;
      showing.value = true;
    };

    return { active, showing, show, hide };
  },
}
</script>

<style scoped>
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