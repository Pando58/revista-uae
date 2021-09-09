import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sidenav, sections } from '@/contenido.json'

const formatURL = () => {
  const router = useRouter();
  const route = useRoute();

  // sec
  const sec = route.query.hasOwnProperty('sec') ? parseInt(route.query.sec) : null;
  const section = sections.find(i => i.sec === sec);

  if (!section) {
    router.replace({ path: '/', query: {} });
    return;
  }

  // id
  if (
    !section.hasOwnProperty('elements') ||
    !section.elements.find(i => i.id === parseInt(route.query.id))
  ) {
    router.replace({ path: '/', query: sec !== null ? { sec: sec } : {} });
    return;
  }
}

const getTitle = () => {
  const route = useRoute();

  const title = computed(() => {
    if (!route.query.hasOwnProperty('sec')) return 'Revista UAE';

    let found = null;

    sidenav.some(i => {
      const result = i.list.find(j => +j.sec === +route.query.sec);

      if (result !== undefined) {
        found = result;
        return true;
      }
    })

    return found ? found.name : null;
  });

  return title;
}

const getSectionContent = () => {
  const route = useRoute();

  const getSec = () => {
    if (route.query.hasOwnProperty('sec')) {
      return route.query.sec;
    }

    return null;
  }

  const sec = route.query.hasOwnProperty('sec') ? route.query.sec : null;

  // console.log(sec);


  console.log();
}

export { getTitle, getSectionContent, formatURL };