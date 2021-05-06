import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Prijava/Login'
import Signup from '@/components/Prijava/Signup'
import Home from '@/components/Home'
import About from '@/components/About'
import Games from '@/components/Games'
import Zelda from '@/components/List_games/Zelda'

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
  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/Games',
    name: 'Games',
    component: Games
  },
  {
    path: '/Zelda',
    name: 'Zelda',
    component: Zelda
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router