<template>
	<div>
		<Navbar />

		<div
			class="bg-image"
			style="background-image: url('https://i.ibb.co/ck8Gqz4/Background-cb-Copy.jpg'); height:720px; background-size: cover;background-attachment: scroll;"
		></div>

		<!--Popular Games-->
		<div v-if="!a_username.admin">
			<div style="text-align: left;" class="ml-5 mt-5">
				<div class="mb-5" style="float:left">Popular Games</div>
				<br />
				<hr style="clear: none; position: relative; top: 0.8rem;" />
			</div>
			<br />
			<br />

			<div class="mx-auto" style=" max-width: 81%; ">
				<div class="row" style=" max-width: 1000px;  ">
					<div class="column">
						<router-link to="Games/60ba3ace5b55f53bcb56ea1f"
							><img
								src="https://i.ibb.co/wwmFrfF/Gta5.jpg"
								alt="GtaV"
								class="mb-3"
								style="width:140px; height:180px;"
						/></router-link>
					</div>
					<div class="column">
						<router-link to="Games/60ba3fbd5b55f53bcb5c5e6b">
							<img
								src="https://i.ibb.co/Qpm3frZ/Zelda.jpg"
								alt="Zelda"
								class="mb-3"
								style="width:140px; height:180px;"
						/></router-link>
					</div>
					<div class="column">
						<router-link to="Games/60bdeba138713d1e1087c39d">
							<img
								src="https://i.ibb.co/fnbM5Dm/resized-image-Promo.jpg"
								alt="R6"
								class="mb-3"
								style="width:140px; height:180px;"
						/></router-link>
					</div>
				</div>
			</div>
			<br />

			<!--New Games-->

			<div style="text-align: left;" class="ml-5 mt-5">
				<div style="float:left">New games</div>
				<br />
				<hr style="clear: none; position: relative; top: 0.8rem;" />
			</div>
			<br />
			<br />

			<div class="mx-auto" style="max-width: 81%; ">
				<div class="row" style=" max-width: 1000px;  ">
					<div class="column">
						<router-link to="/Games/60ba441d5b55f53bcb60fb4b"
							><img
								src="https://i.ibb.co/YBsw0VY/ittakes2.png"
								alt="ItTakes2"
								class="mb-3"
								style="width:140px; height:180px;"
						/></router-link>
					</div>
					<div class="column">
						<router-link to="Games/60ba420b5b55f53bcb5edf18"
							><img
								src="https://i.ibb.co/jfySqVB/resized-image-Promo.jpg"
								alt="CP2077"
								class="mb-3"
								style="width:140px; height:180px;"
						/></router-link>
					</div>
				</div>
			</div>
		</div>

		<div v-if="a_username.admin"></div>

		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Auth, a_Auth } from "@/services/index.js";

export default {
	name: "Home",
	components: {
		Navbar,
		Footer,
	},

	data() {
		return {
			////////////
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

	created() {
		this.get_username();
		this.a_get_username();
	},

	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>

<style scoped>
hr {
	border: none;
	height: 1px;
	color: #333;
	background-color: #333;
	width: 100%;
	margin: 0;
}

.gg {
	margin-left: 11rem !important;
}

.column {
	float: left;
	width: 190px;
}
</style>
