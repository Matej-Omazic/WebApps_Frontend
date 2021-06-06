<template>
	<div>
		<Navbar />

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
			<b-card-group deck style="margin: 0;">
				<div @click="gotoDetails(game)" v-for="game in games" :key="game.id">
					<game-card :info="game" />
				</div>
			</b-card-group>
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
import { Games } from "@/services/index.js";
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
	},

	watch: {
		"store.search_text": function() {
			//console.log("Promjenio sam se!", this.store.search_text)
			this.fetchGames();
		},
	},
};
</script>
