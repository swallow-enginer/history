import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "about" */ '../components/History.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../components/Test.vue')
  },
  {
    path: '/account',
    name: 'Acount',
    component: () => import('../components/Account.vue'),
    props: true,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/Login.vue'),
        props: true
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../components/Register.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
