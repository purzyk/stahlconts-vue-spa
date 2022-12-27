import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Offers from '../views/Offers/Offers.vue'
import Works from '../views/Works/Works.vue'
import OffersDetails from '../views/Offers/OffersDetails.vue'
import WorksDetails from '../views/Works/WorksDetails.vue'
import Page404 from '../views/Page404.vue'
import AboutUs from '../views/AboutUs.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/offers/:id',
    name: 'OffersDetails',
    component: OffersDetails,
    props: true
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/works/:id',
    name: 'WorksDetails',
    component: WorksDetails,
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
