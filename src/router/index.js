import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Oferty from '../views/Oferty/Oferty.vue'
import Realizacje from '../views/Realizacje/Realizacje.vue'
import OfertyDetails from '../views/Oferty/OfertyDetails.vue'
import RealizacjeDetails from '../views/Realizacje/RealizacjeDetails.vue'
import Page404 from '../views/Page404.vue'
import Onas from '../views/Onas.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/oferty',
    name: 'Oferty',
    component: Oferty
  },
  {
    path: '/onas',
    name: 'Onas',
    component: Onas
  },
  {
    path: '/oferty/:id',
    name: 'OfertyDetails',
    component: OfertyDetails,
    props: true
  },
  {
    path: '/realizacje',
    name: 'Realizacje',
    component: Realizacje
  },
  {
    path: '/realizacje/:id',
    name: 'RealizacjeDetails',
    component: RealizacjeDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: Page404,
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
