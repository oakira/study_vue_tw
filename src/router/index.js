import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
    // props: true
  },
  {
    path: '/about',
    name: 'About',
    // component: About,
    // props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  // {
  //   path: '*',
  //   name: 'notFound',
  //   component: NotFound
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/**
 * all page function
 */
router.afterEach((to, from) => {
})

export default router
