import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Prijava/Login";
import Signup from "@/components/Prijava/Signup";
import Home from "@/components/View/Home";
import About from "@/components/View/About";
import Games from "@/components/View/Games";
import Playlist from "@/components/View/Playlist";
import All_games from "@/components/View/All_games";
import { Auth, a_Auth } from "@/services";
import Contact from "@/components/View/Contact";
import Account from "@/components/View/Account";
import Add_game from "@/components/View/Add_game";
import Login_a from "@/components/Prijava/Login_a";
import Signup_a from "@/components/Prijava/Signup_a";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Login",
			component: Login,
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
			path: "/Account",
			name: "Account",
			component: Account,
		},
		{
			path: "/add_game",
			name: "Add_game",
			component: Add_game,
		},
		{
			path: "/Login_a",
			name: "Login_a",
			component: Login_a,
		},
		{
			path: "/Signup_a",
			name: "Signup_a",
			component: Signup_a,
		},
	],
});

router.beforeEach((to, from, next) => {
	const javneStranice = ["/", "/Signup", "/Login_a", "/Signup_a"];
	const loginPotreban = !javneStranice.includes(to.path);
	const user = Auth.getUser();
	const admin = a_Auth.getUser();
	//console.log("dal je ovo user", user)

	if (loginPotreban && !user && !admin) {
		next("/", "/Login_a");
		return;
	}
	next();
});

export default router;
