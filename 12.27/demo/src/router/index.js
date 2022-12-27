import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Object',
    name: 'Object',
    component: () => import('../views/Object.vue')
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('../views/one.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
