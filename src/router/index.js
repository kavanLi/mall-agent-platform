import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Regin from '@/components/Regin'
import Products from '@/components/page/Products'
import FAQ from '@/components/page/FAQ'
import Manger from '@/components/page/Manger'
import My from '@/components/page/manger/My'
import Send from '@/components/page/manger/Send'
import MyHistory from '@/components/page/manger/History'
import Page404 from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      hidden: true,
      component: Page404
    },
    {
      path: '/',
      name: 'home',
      hidden: true,
      component: Home
    },
    {
      path: '/login',
      name: '',
      hidden: true,
      component: Login
    },
    {
      path: '/regin',
      name: '',
      hidden: true,
      component: Regin
    },
    {
      path: '/products',
      name: 'goods',
      class: "el-icon-goods",
      component: Products
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/manger',
      name: 'my manger',
      redirect: "/manger/my",
      component: Manger,
      hasChild: true,
      children: [
        { path: '/manger/my', name: "my info", component: My },
        { path: '/manger/send', name: "send manger", component: Send },
        { path: '/manger/history', name: "send info", component: MyHistory },
      ]
    },
  ]
})

