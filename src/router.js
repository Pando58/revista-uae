import { createRouter, createWebHistory } from 'vue-router'
import Main from './routes/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router