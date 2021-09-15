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
    formatURL();

    const sec = route.query.sec === null || route.query.sec === undefined ? null : parseInt(route.query.sec);
    
    let found = null;

    sidenav.some(i => {
      const result = i.list.find(j => j.sec === sec);

      if (result !== undefined) {
        found = result;
        return true;
      }
    })

    return (found || {}).name || null;
  });

  return title;
}

const getSectionContent = () => {
  const route = useRoute();
  
  return computed(() => {
    const sec = route.query.hasOwnProperty('sec') && !isNaN(parseInt(route.query.sec)) ? parseInt(route.query.sec) : null;
    const id = route.query.hasOwnProperty('id') ? parseInt(route.query.id) : null;
    
    return (() => {
      const secContent = sections.find(i => i.sec === sec);

      if (!secContent) return null;

      if (id !== null) {
        if (secContent.hasOwnProperty('elements')) {
          const idContent = secContent.elements.find(i => i.id === id);

          if (!idContent) return null;

          if (idContent.hasOwnProperty('data')) {
            return JSON.stringify(idContent.data);
          }
        }
      }

      if (secContent.hasOwnProperty('data')) {
        return JSON.stringify(secContent.data);
      }

      return null;
    })();
  });
}

export { formatURL, getTitle, getSectionContent };