import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    }
  ]
})

export default router
