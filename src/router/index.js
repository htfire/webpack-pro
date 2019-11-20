import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index/index.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../pages/detail/index.vue'),
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

export default router