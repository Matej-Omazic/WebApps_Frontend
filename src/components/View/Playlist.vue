<template>
	<div>
		<Navbar />
		<div>
			<div
				class="mx-auto mt-5"
				style=" max-width:900px; height:246px; background-color:#eceff1 ;"
			>
				<br />
				<p class="text-left mt-1 ml-3" style="font-size:27px;">Your playlist</p>
				<br /><br />
				<p class="text-left ml-3" style="font-size:16px;">
					What is a Playlist? It's a simply list of games, also helps you save
					<br />
					games that you would like to play or explore even more
				</p>
				<hr style="background-color: white;" />
				<p class="ml-3" style="font-size:18px; float: left;">Titles</p>
				<p class="mr-3" style="font-size:18px; float: right;">
					Private playlist 🔒
				</p>
			</div>

			<form>
				<div class=" max-width: 900px; mt-4 mb-3">
					<b-card
						class="mx-auto text-left"
						style="width: 900px; -webkit-box-shadow:none; -moz-box-shadow:none; box-shadow:none; padding:0;"
					>
						<transition-group tag="div" name="fade" class="lista">
							<div v-for="lista in lista" :key="lista.name">
								<img
									v-bind:src="lista.url"
									style="width:140px; height:180px;"
								/>
								<label>
									<p class="text-left ml-3">{{ lista.name }}</p>
									<p class="text-left ml-3">&#11088; {{ lista.grade }}</p>
								</label>
								<a @click.prevent="del_plist(lista.name)" class="close" />

								<hr style="background-color:#c2c2c2" />
							</div>
						</transition-group>
					</b-card>
				</div>
			</form>

			<b-form> </b-form>

			<br /><br /><br />
		</div>

		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GameCard from "@/components/View/GameCard";
import { Playlist, Service, Auth, a_Auth } from "@/services/index.js";
export default {
	name: "Playlist",
	data() {
		return {
			lista: {},
			auth: Auth.state,

			username: "",
			a_username: "",
		};
	},
	components: {
		Navbar,
		Footer,
		GameCard,
		Playlist,
		Service,
	},
	methods: {
		async pozoviList() {
			this.lista = await Playlist.getAll(this.auth.userEmail);
		},
		del_plist(name) {
			let plist = {
				name: name,
			};
			Service.post("/Playlist/delete/" + name, plist).then((result) => {
				console.log(result);
				this.pozoviList();
			});
		},
		async get_username() {
			try {
				this.username = await Auth.getOne(this.auth.userEmail);
			} catch (e) {
				console.clear(e);
			}
		},
	},
	mounted() {
		window.scrollTo(0, 0);
	},
	created() {
		this.pozoviList();
		this.get_username();
	},
};
</script>

<style scoped>
.card-body {
	padding: 0 !important;
}

.close {
	position: relative;
	right: 32px;
	top: 70px;
	width: 20px;
	height: 20px;
	opacity: 0.3;
	cursor: pointer;
}
.close:hover {
	opacity: 1;
}
.close:before,
.close:after {
	position: absolute;
	left: 15px;
	content: " ";
	height: 50px;
	width: 3px;
}
.close:before {
	transform: rotate(45deg);
	background-color: black;
}
.close:after {
	transform: rotate(-45deg);
	background-color: black;
}

.close:hover:after {
	background-color: red;
}

.close:hover:before {
	background-color: red;
}
.fadesample {
	animation-name: fadeIn;
	animation-duration: 1s;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
