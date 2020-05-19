import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import("../components/Index"),
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import("../pages/layout/layout"),
    }
  ]
})
