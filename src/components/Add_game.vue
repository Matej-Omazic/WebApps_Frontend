<template>
	<div>
		<Navbar />

		<div v-if="a_username.admin" class="mx-auto" style="width: 500px;">
			<form @submit="add_game">
				<mdb-input label="Image url" size="md" v-model="img_url" />
				<mdb-input label="Name of the game" size="md" v-model="name" />
				<mdb-input label="Release date" size="md" v-model="release_date" />
				<mdb-input label="Genre" size="md" v-model="genre" />
				<mdb-input label="Rate game out of 100" size="md" v-model="rate" />
				<mdb-input label="Writer" size="md" v-model="writer" />
				<mdb-input label="Stars" size="md" v-model="stars" />
				<mdb-input label="Developer" size="md" v-model="developer" />
				<mdb-input label="Publisher" size="md" v-model="publisher" />
				<mdb-input label="Platforms" size="md" v-model="platforms" />
				<mdb-input label="Budget" size="md" v-model="budget" />
				<mdb-input label="Image #1" size="md" v-model="slika1" />
				<mdb-input label="Image #2" size="md" v-model="slika2" />
				<mdb-input label="Image #3" size="md" v-model="slika3" />
				<mdb-input
					label="How long is main story"
					size="md"
					v-model="main_story"
				/>
				<mdb-input
					label="How long is main story + extras"
					size="md"
					v-model="main_story_extra"
				/>
				<mdb-input
					label="How long is completionist"
					size="md"
					v-model="completionist"
				/>
				<mdb-input label="Fastest speedrun" size="md" v-model="speedrun" />
				<mdb-input label="Storyline" size="md" v-model="storyline" />
				<mdb-input label="Cast #1" size="md" v-model="cast1" />
				<mdb-input label="Cast #2" size="md" v-model="cast2" />
				<mdb-input label="Cast #3" size="md" v-model="cast3" />
				<mdb-input label="Cast #4" size="md" v-model="cast4" />
				<mdb-input label="Cast #5" size="md" v-model="cast5" />
				<mdb-input label="Cast #6" size="md" v-model="cast6" />
				<mdb-input label="Cast #7" size="md" v-model="cast7" />
				<mdb-input label="Cast #8" size="md" v-model="cast8" />
				<mdb-input label="Cast #9" size="md" v-model="cast9" />
				<mdb-input label="Cast #10" size="md" v-model="cast10" />
				<button
					type="submit"
					style="float:right;"
					class="btn btn-outline-primary comm"
					data-mdb-ripple-color="dark"
				>
					Comment
				</button>
			</form>
			<br /><br />
		</div>

		<div v-if="!a_username.admin">
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
import { Games, Service, Auth, a_Auth } from "@/services/index.js";
import {
	mdbContainer,
	mdbInput,
	mdbCard,
	mdbCardHeader,
	mdbCardTitle,
	mdbCardText,
	mdbCardBody,
	mdbIcon,
	mdbBtn,
	mdbRow,
	mdbCol,
} from "mdbvue";

export default {
	name: "Add_game",
	components: {
		mdbInput,
	},

	mounted() {
		window.scrollTo(0, 0);
	},
	components: {
		mdbContainer,
		mdbInput,
		mdbCard,
		mdbCardHeader,
		mdbCardTitle,
		mdbCardBody,
		mdbCardText,
		mdbIcon,
		mdbBtn,
		mdbRow,
		mdbCol,
		Navbar,
		Footer,
	},
	data() {
		return {
			img_url: "",
			name: "",
			release_date: "",
			genre: "",
			rate: "",
			writer: "",
			stars: "",
			developer: "",
			publisher: "",
			platforms: "",
			budget: "",
			slika1: "",
			slika2: "",
			slika3: "",
			main_story: "",
			main_story_extra: "",
			completionist: "",
			speedrun: "",
			storyline: "",
			cast1: "",
			cast2: "",
			cast3: "",
			cast4: "",
			cast5: "",
			cast6: "",
			cast7: "",
			cast8: "",
			cast9: "",
			cast10: "",
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

		async add_game() {
			let whole_game = {
				img_url: this.img_url,
				name: this.name,
				release_date: this.release_date,
				genre: this.genre,
				rate: this.rate,
				writer: this.writer,
				stars: this.stars,
				developer: this.developer,
				publisher: this.publisher,
				platforms: this.platforms,
				budget: this.budget,
				slika1: this.slika1,
				slika2: this.slika2,
				slika3: this.slika3,
				main_story: this.main_story,
				main_story_extra: this.main_story_extra,
				completionist: this.completionist,
				speedrun: this.speedrun,
				storyline: this.storyline,
				cast1: this.cast1,
				cast2: this.cast2,
				cast3: this.cast3,
				cast4: this.cast4,
				cast5: this.cast5,
				cast6: this.cast6,
				cast7: this.cast7,
				cast8: this.cast8,
				cast9: this.cast9,
				cast10: this.cast10,
			};
			let newlist = await Games.add_game(whole_game);
			console.log("Spremljeni post", newlist.data);
		},
	},

	created() {
		this.get_username();
		this.a_get_username();
	},
};
</script>
