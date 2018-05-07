import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import home from '@/views/home/home'
export default new Router({
  routes: [
    {
      path: '/',
      component:home,
      name:'home'
    }
  ]
})
