import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import main_menu from '@/components/main_menu'

Vue.use(Router)

export default new Router({

	  mode:"history",
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main_menu',
      name: 'main_menu',
      component: main_menu
    }
  ]
})
