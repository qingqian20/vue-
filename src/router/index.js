import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import main_menu from '@/components/main_menu'
import user from '@/components/user'
import login from '@/components/login'
import register from '@/components/register'
import adduser from '@/components/adduser'
import goodsinfo from '@/components/goodsinfo'
import order from '@/components/order'

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
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: adduser
    },
    {
      path: '/goodsinfo',
      name: 'goodsinfo',
      component: goodsinfo
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
