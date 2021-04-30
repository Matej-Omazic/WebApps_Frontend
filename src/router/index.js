import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Prijava/Login'
import Signup from '@/components/Prijava/Signup'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    
  },
 
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router