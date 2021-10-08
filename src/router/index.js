import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BooksView from '@/views/BooksView.vue'
import AccessView from '@/views/AccessView.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: AccessView
  },
  {
    path: '/libros',
    name: 'Books',
    component: BooksView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * checkAuthentication
 *
 * Hace una consulta al módulo de usuarios para saber si el usuario actual
 * está autenticado, si es así lo deja continuar, si no, lo redirecciona al login.
 *
 * @param {object} to    Es el objeto que representa la dirección a donde se desea llegar.
 * @param {object} next  Es la función que da pie a que el programa pueda
 *                       continuar o no, o se redireccione a otra ruta.
 */
const checkAuthentication = async (to, next, from) => {
  const isAuthenticated = store.getters['authModule/isAuthenticated']

  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated) return next('/login')

  if (!requiresAuth && isAuthenticated) return next({ name: 'Home' })

  next()
}

router.beforeEach((to, from, next) => {
  checkAuthentication(to, next, from)
})

export default router
