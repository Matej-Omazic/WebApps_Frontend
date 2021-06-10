<template>
	<div>
		<Navbar />

		<div
			v-if="a_username.admin"
			class=" container mx-auto mt-5 mb-5"
			style="width: 800px; border-color:gray; border-style:solid;"
		>
			<h1>Please add game</h1>
			<form novalidate @submit.prevent="add_game">
				<mdb-input
					label="Image url"
					size="md"
					v-model="img_url"
					required
					invalidFeedback="Please enter valid image url"
				/>
				<mdb-input
					label="Name of the game"
					size="md"
					v-model="name"
					required
					invalidFeedback="Please enter valid name of the game"
				/>
				<mdb-input
					label="Release date"
					size="md"
					v-model="release_date"
					required
					invalidFeedback="Please enter valid release date"
				/>
				<mdb-input
					label="Genre"
					size="md"
					v-model="genre"
					required
					invalidFeedback="Please enter valid genre"
				/>
				<mdb-input
					label="Rate game out of 100"
					size="md"
					v-model="rate"
					required
					invalidFeedback="Please enter valid rate"
				/>
				<mdb-input
					label="Writer"
					size="md"
					v-model="writer"
					required
					invalidFeedback="Please enter valid writer name"
				/>
				<mdb-input
					label="Stars"
					size="md"
					v-model="stars"
					required
					invalidFeedback="Please enter valid star/s name"
				/>
				<mdb-input
					label="Developer"
					size="md"
					v-model="developer"
					required
					invalidFeedback="Please enter valid developer name"
				/>
				<mdb-input
					label="Publisher"
					size="md"
					v-model="publisher"
					required
					invalidFeedback="Please enter valid publisher name"
				/>
				<mdb-input
					label="Platforms"
					size="md"
					v-model="platforms"
					required
					invalidFeedback="Please enter platforms"
				/>
				<mdb-input
					label="Budget"
					size="md"
					v-model="budget"
					required
					invalidFeedback="Please enter valid budget"
				/>
				<mdb-input
					label="Image #1"
					size="md"
					v-model="slika1"
					required
					invalidFeedback="Please enter valid image#1 url"
				/>
				<mdb-input
					label="Image #2"
					size="md"
					v-model="slika2"
					required
					invalidFeedback="Please enter valid image#2 url"
				/>
				<mdb-input
					label="Image #3"
					size="md"
					v-model="slika3"
					required
					invalidFeedback="Please enter valid image#3 url"
				/>
				<mdb-input
					label="How long is main story"
					size="md"
					v-model="main_story"
					required
					invalidFeedback="Please enter valid main story lenght"
				/>
				<mdb-input
					label="How long is main story + extras"
					size="md"
					v-model="main_story_extra"
					required
					invalidFeedback="Please enter valid main story + extras lenght"
				/>
				<mdb-input
					label="How long is completionist"
					size="md"
					v-model="completionist"
					required
					invalidFeedback="Please enter valid cmopletionist lenght"
				/>
				<mdb-input
					label="Fastest speedrun"
					size="md"
					v-model="speedrun"
					required
					invalidFeedback="Please enter valid speedrun lenght"
				/>
				<mdb-input
					label="Storyline"
					size="md"
					v-model="storyline"
					required
					invalidFeedback="Please enter valid storyline"
				/>
				<mdb-input
					label="Cast #1"
					size="md"
					v-model="cast1"
					required
					invalidFeedback="Please enter valid cast name#1"
				/>
				<mdb-input
					label="Cast #2"
					size="md"
					v-model="cast2"
					required
					invalidFeedback="Please enter valid cast name#2"
				/>
				<mdb-input
					label="Cast #3"
					size="md"
					v-model="cast3"
					required
					invalidFeedback="Please enter valid cast name#3"
				/>
				<mdb-input
					label="Cast #4"
					size="md"
					v-model="cast4"
					required
					invalidFeedback="Please enter valid cast name#4"
				/>
				<mdb-input
					label="Cast #5"
					size="md"
					v-model="cast5"
					required
					invalidFeedback="Please enter valid cast name#5"
				/>
				<mdb-input
					label="Cast #6"
					size="md"
					v-model="cast6"
					required
					invalidFeedback="Please enter valid cast name#6"
				/>
				<mdb-input
					label="Cast #7"
					size="md"
					v-model="cast7"
					required
					invalidFeedback="Please enter valid cast name#7"
				/>
				<mdb-input
					label="Cast #8"
					size="md"
					v-model="cast8"
					required
					invalidFeedback="Please enter valid cast name#8"
				/>
				<mdb-input
					label="Cast #9"
					size="md"
					v-model="cast9"
					required
					invalidFeedback="Please enter valid cast name#9"
				/>
				<mdb-input
					label="Cast #10"
					size="md"
					v-model="cast10"
					required
					invalidFeedback="Please enter valid cast name#10"
				/>

				<p style="color:red">{{ feedback }}</p>
				<button
					type="submit"
					style="float:right;"
					class="btn btn-outline-primary comm "
					data-mdb-ripple-color="dark"
				>
					Comment
				</button>
			</form>
			<br /><br /><br />
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
			feedback: "",
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

		async add_game(event) {
			if (
				this.img_url == "" ||
				this.name == "" ||
				this.release_date == "" ||
				this.genre == "" ||
				this.rate == "" ||
				this.writer == "" ||
				this.stars == "" ||
				this.developer == "" ||
				this.publisher == "" ||
				this.platforms == "" ||
				this.budget == "" ||
				this.slika1 == "" ||
				this.slika2 == "" ||
				this.slika3 == "" ||
				this.main_story == "" ||
				this.main_story_extra == "" ||
				this.completionist == "" ||
				this.speedrun == "" ||
				this.storyline == "" ||
				this.cast1 == "" ||
				this.cast2 == "" ||
				this.cast3 == "" ||
				this.cast4 == "" ||
				this.cast5 == "" ||
				this.cast6 == "" ||
				this.cast7 == "" ||
				this.cast8 == "" ||
				this.cast9 == "" ||
				this.cast10 == ""
			) {
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
				event.target.classList.add("was-validated");
				return (this.feedback = "You need to fill up all the fields");
			}
			this.feedback = "";
			try {
				let newlist = await Games.add_game(whole_game);
				console.log("Spremljeni post", newlist.data);
			} catch (e) {
				this.feedback = "You need to fill up all the fields";
			}
		},
	},

	created() {
		this.get_username();
		this.a_get_username();
	},
};
</script>
