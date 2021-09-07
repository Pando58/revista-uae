import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sidenav } from '@/contenido.json'

const getTitle = () => {
  const route = useRoute();
 
  const title = computed(() => {
    if (!route.query.hasOwnProperty('sec')) return '';
    
    let found = null;

    sidenav.some(i => {
      const result = i.list.find(j => +j.sec === +route.query.sec);

      if (result !== undefined) {
        found = result;
        return true;
      }
    })

    return found.name;
  });

  return title;
}

export { getTitle };