import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main_menu from '@/components/main_menu'

Vue.use(Router)

export default new Router({

	  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main_menu',
      name: 'main_menu',
      component: main_menu
    }
  ]
})
