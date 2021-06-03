import Vue from 'vue'
import Router from "vue-router";
import Login from '@/components/Prijava/Login'
import Signup from '@/components/Prijava/Signup'
import Home from '@/components/Home'
import About from '@/components/About'
import Games from '@/components/Games'
import Zelda from '@/components/List_games/Zelda'
import GtaV from '@/components/List_games/GtaV'
import Playlist from '@/components/Playlist'
import It_takes_2 from '@/components/List_games/It_takes_2'
import All_games from '@/components/All_games'
import Cyberpunk from '@/components/List_games/Cyberpunk'
import { Auth } from "@/services"


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
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
    {
      path: '/GtaV',
      name: 'GtaV',
      component: GtaV
    },
    {
      path: '/Playlist',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/It_takes_2',
      name: 'It_takes_2',
      component: It_takes_2
    },
    {
      path: '/Cyberpunk',
      name: 'Cyberpunk',
      component: Cyberpunk
    },
    {
      path: '/games:id',
      props: true,
      name: 'All_games',
      component: All_games
    },

  ]
})

router.beforeEach((to, from, next) => {
  const javneStranice = ["/login", "/Signup"];
  const loginPotreban = !javneStranice.includes(to.path);
  const user = Auth.getUser();

  if (loginPotreban && !user) {
  next("/login")
  return;
  }
  next();
});

export default router