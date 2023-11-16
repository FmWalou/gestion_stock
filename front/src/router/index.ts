import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { stockRouter } from '@/stock/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legale',
      name: 'legale',
      component: () => import('../views/LegaleView.vue')
    },
      ...stockRouter
  ]
})

export default router
