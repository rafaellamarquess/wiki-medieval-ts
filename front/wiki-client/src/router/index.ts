import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Buscadetalhada from "../components/Buscadetalhada.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/Buscadetalhada',
      name: 'buscadetalhada',
      component: Buscadetalhada
    },
  ]
})

export default router
