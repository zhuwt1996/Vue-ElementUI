import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import 'element-ui/lib/theme-chalk/index.css';


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
    },
    {
      path: '/container-menu',
      name: 'container-menu',
      component: () => import("../pages/container-menu/container-menu"),
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import("../pages/pagination/pagination"),
    }
  ]
})
