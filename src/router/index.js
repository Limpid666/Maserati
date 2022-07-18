import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
