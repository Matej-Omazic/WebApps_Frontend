<template>
	<div>
		<Navbar />
		<div v-if="pushMod()">
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
				<div class="max-width: 900px; mt-4 mb-3  ">
					<b-card
						class="mx-auto text-left"
						style="width: 900px; -webkit-box-shadow:none; -moz-box-shadow:none; box-shadow:none; padding:0;"
					>
						<div transition="bounce" v-for="lista in lista" :key="lista._id">
							<img v-bind:src="lista.url" style="width:140px; height:180px;" />
							<label>
								<p class="text-left ml-3">{{ lista.name }}</p>
								<p class="text-left ml-3">&#11088; {{ lista.grade }}</p>
							</label>
							<button
								class="mt-5"
								style=" float:right; background-color:white;border: none;outline: none;"
								@click.prevent="del_plist(lista.name)"
							>
								<span class="trash">
									<span></span>
									<i></i>
								</span>
							</button>
							<hr style="background-color:#c2c2c2" />
						</div>
					</b-card>
				</div>
			</form>

			<b-form> </b-form>

			<br /><br /><br />
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
import GameCard from "@/components/GameCard";
import { Playlist, Service, Auth, a_Auth } from "@/services/index.js";

export default {
	name: "Playlist",
	data() {
		return {
			lista: {},
			auth: Auth.state,
			a_auth: a_Auth.state,
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
		pushMod() {
			if (this.a_username.admin) {
				this.$router.replace({ path: "/home" });
			}
		},

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
	beforeMount() {
		this.pushMod();
	},

	mounted() {
		window.scrollTo(0, 0);
		this.pushMod();
	},
	created() {
		this.pozoviList();
		this.get_username();
		this.a_get_username();
		this.pushMod();
	},
};
</script>

<style scoped>
.card-body {
	padding: 0 !important;
}
.trash {
	background: #ff6873;
	width: 66px;
	height: 80px;
	display: inline-block;
	margin: 0 auto;

	position: relative;
	-webkit-border-bottom-right-radius: 6px;
	-webkit-border-bottom-left-radius: 6px;
	-moz-border-radius-bottomright: 6px;
	-moz-border-radius-bottomleft: 6px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}
.trash:after {
	position: absolute;
	left: -99px;
	right: 0;
	bottom: -50px;
	width: 300px;
}
.trash span {
	position: absolute;
	height: 12px;
	background: #ff6873;
	top: -19px;
	left: -10px;
	right: -10px;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	transform: rotate(0deg);
	transition: transform 250ms;
	transform-origin: 19% 100%;
}
.trash span:after {
	content: "";
	position: absolute;
	width: 27px;
	height: 7px;
	background: #ff6873;
	top: -10px;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	transform: rotate(0deg);
	transition: transform 250ms;
	transform-origin: 19% 100%;
	left: 27px;
}

.trash i {
	position: relative;
	width: 5px;
	height: 50px;
	background: #fff;
	display: block;
	margin: 14px auto;
	border-radius: 5px;
}
.trash i:after {
	content: "";
	width: 5px;
	height: 50px;
	background: #fff;
	position: absolute;
	left: -18px;
	border-radius: 5px;
}
.trash i:before {
	content: "";
	width: 5px;
	height: 50px;
	background: #fff;
	position: absolute;
	right: -18px;
	border-radius: 5px;
}

.trash:hover span {
	transform: rotate(-45deg);
	transition: transform 250ms;
}
.bounce-transition {
	display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
	animation: bounce-in 0.5s;
}
.bounce-leave {
	animation: bounce-out 0.5s;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes bounce-out {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(0);
	}
}
</style>
