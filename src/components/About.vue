<template>
	<div>
		<Navbar />
		<div v-if="!a_username.admin">
			<div>
				<mdb-navbar
					class="blue-grey lighten-5 mx-auto mt-5"
					style=" max-width:900px;"
				>
					<mdb-navbar-brand href="#">About Us</mdb-navbar-brand>
				</mdb-navbar>
			</div>

			<div class="onama">
				<div class=" p-5 mx-5 mt-4 mb-2 " style="width:900px;">
					<h2>What is GameDB?</h2>

					<p
						class="lead"
						id="tekst"
						style="margin:0; padding:0; text-indent: 40px;"
					>
						We love games, we grew up with games and now we are doing our dream:
						working professionally with games.
					</p>
					<p class="lead" style="text-indent: 40px" id="tekst">
						We are gathering all relevant information about games in one place
						and also gathering a community of both Gamers and people from the
						game industry and let them communicate with each other.
					</p>
					<p class="lead" style="text-indent: 40px" id="tekst">
						This is GameDB, a gaming website for everyone that loves game.
					</p>
					<h2 class="mt-5">Our goal?</h2>
					<p class="lead" style="text-indent: 40px" id="tekst">
						We wish to create Your ultimate gaming website that has all
						information about the games.
					</p>
				</div>
			</div>
		</div>

		<div v-if="a_username.admin">
			<br /><img
				src="https://i.ibb.co/x8grpxd/404-error-design-with-sign-23-2147735302.jpg"
				alt="Stop"
				class="mb-3"
				style="width:626px; height:588px;"
			/>
		</div>

		<Footer />
	</div>
</template>
<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Auth, a_Auth } from "@/services";

export default {
	name: "About",
	components: {
		Navbar,
		Footer,
	},
	data() {
		return {
			auth: Auth.state,
			a_auth: a_Auth.state,
			username: "",
			a_username: "",
		};
	},

	methods: {
		async get_username() {
			try {
				this.username = await Auth.getOne(this.auth.userEmail);
			} catch (e) {
				console.clear(e);
			}
		},

		async a_get_username() {
			try {
				this.a_username = await a_Auth.a_getOne(this.a_auth.userEmail);
			} catch (e) {
				console.clear(e);
			}
		},
	},

	logout() {
		Auth.logout();
		this.$router.go();
	},

	mounted() {
		window.scrollTo(0, 0);
	},

	created() {
		this.get_username();
		this.a_get_username();
	},
};
</script>

<style scoped>
#tekst {
	line-height: 30px;
	font-family: "Segoe UI";
	color: black;
}
h2 {
	font-family: "Segoe UI";
	color: black;
}
.onama {
	display: flex;
	justify-content: center;
}
</style>
