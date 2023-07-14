import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenClothes from '../views/MenClothes.vue'
import WomenClothes from '../views/WomenClothes.vue'
import Electronic from '../views/Electronic.vue'
import Cart from '../views/Cart.vue'
import Pay from '../views/Pay.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mujer',
    name: 'WomenClothes',
    component: WomenClothes
  },
  {
    path: '/hombre',
    name: 'MenClothes',
    component: MenClothes
  },
  {
    path: '/electronica',
    name: 'Electronic',
    component: Electronic
  },
  {
    path: '/carrito',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment',
    name: 'Pay',
    component: Pay
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
