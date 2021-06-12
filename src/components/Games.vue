<template>
	<div>
		<Navbar />
		<div v-if="!a_username.admin">
			<div>
				<mdb-navbar
					class="blue-grey lighten-5 mx-auto mt-5"
					style=" max-width:900px;"
				>
					<mdb-navbar-brand href="#">List of all games</mdb-navbar-brand>
					<mdb-navbar-toggler>
						<mdb-navbar-nav right>
							<mdb-form-inline class="ml-auto">
								<mdb-input
									v-model="store.search_text"
									class="mr-sm-2"
									type="text"
									placeholder="Search"
									aria-label="Search"
								/>
							</mdb-form-inline>
						</mdb-navbar-nav>
					</mdb-navbar-toggler>
				</mdb-navbar>
			</div>

			<div class=" mx-auto" style="max-width: 900px;">
				<b-card-group deck style="margin: 0; cursor:pointer;">
					<div @click="gotoDetails(game)" v-for="game in games" :key="game.id">
						<game-card :info="game" />
					</div>
				</b-card-group>
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

<style scoped></style>

<script>
import {
	mdbCard,
	mdbView,
	mdbMask,
	mdbCardImage,
	mdbCardTitle,
	mdbCardText,
	mdbCardFooter,
	mdbCardBody,
} from "mdbvue";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GameCard from "@/components/GameCard";
import store from "@/store";
import { Games, Auth, a_Auth } from "@/services/index.js";
import _ from "lodash";

export default {
	components: {
		Navbar,
		Footer,
		mdbCard,
		mdbView,
		mdbMask,
		mdbCardImage,
		mdbCardTitle,
		mdbCardText,
		mdbCardFooter,
		mdbCardBody,
		GameCard,
		Games,
	},

	data() {
		return {
			store,
			games: [],
			auth: Auth.state,
			a_auth: a_Auth.state,
			username: "",
			a_username: "",
		};
	},
	watch: {
		"store.search_text": _.debounce(function(val) {
			this.fetchGames(val);
		}, 500),
	},
	mounted() {
		window.scrollTo(0, 0);
	},

	created() {
		this.fetchGames();
		this.get_username();
		this.a_get_username();
	},

	name: "Games",
	methods: {
		async fetchGames(term) {
			term = term || store.search_text;
			this.games = await Games.getAll(term);
		},
		gotoDetails(game) {
			this.$router.push({ path: `Games/${game.id}` });
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

	watch: {
		"store.search_text": function() {
			//console.log("Promjenio sam se!", this.store.search_text)
			this.fetchGames();
		},
	},
};
</script>
