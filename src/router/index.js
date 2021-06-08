import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Prijava/Login";
import Signup from "@/components/Prijava/Signup";
import Home from "@/components/Home";
import About from "@/components/About";
import Games from "@/components/Games";
import Playlist from "@/components/Playlist";
import All_games from "@/components/All_games";
import { Auth } from "@/services";
import Contact from "@/components/Contact";
import Add_game from "@/components/Add_game";
import Playlist2 from "@/components/Playlist2";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Login",
			component: Login,
			meta: { transition: "fade-in-left" },
		},
		{
			path: "/Signup",
			name: "Signup",
			component: Signup,
		},
		{
			path: "/Home",
			name: "Home",
			component: Home,
		},

		{
			path: "/About",
			name: "About",
			component: About,
		},

		{
			path: "/Games",
			name: "Games",
			component: Games,
		},
		{
			path: "/Playlist",
			name: "Playlist",
			component: Playlist,
			children: [
				{
					name: "Playlist2",
					path: "/Playlist",
					component: Playlist2,
				},
			],
		},
		{
			path: "/Games/:id",
			props: true,
			name: "All_games",
			component: All_games,
		},
		{
			path: "/Contact",
			name: "Contact",
			component: Contact,
		},
		{
			path: "/add_game",
			name: "Add_game",
			component: Add_game,
		},
	],
});

router.beforeEach((to, from, next) => {
	const javneStranice = ["/", "/Signup"];
	const loginPotreban = !javneStranice.includes(to.path);
	const user = Auth.getUser();
	//console.log("dal je ovo user", user)

	if (loginPotreban && !user) {
		next("/");
		return;
	}
	next();
});

export default router;
