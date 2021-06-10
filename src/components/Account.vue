<template>
	<div>
		<Navbar />

		<div
			class="container mx-auto mt-3 "
			style="width:500px; height:auto; min-height:400px; border-color:gray; border-style:solid;"
		>
			<form novalidate @submit.prevent="changePass" class="tekst">
				<p class="text-center mb-2 mt-5" style="font-size:35px;">
					Change password
				</p>
				<div style="max-width:400px;" class="mx-auto">
					<mdb-input
						v-model="old_password1"
						type="password"
						label="Old password"
						required
						invalidFeedback="Please use the valid e-mail address "
					/>
					<mdb-input
						label="New password"
						v-model="new_password2"
						type="password"
						required
						invalidFeedback="Please enter the correct password"
						style="margin-bottom:15px;"
					/>
					<p style="color:red; margin:0;">{{ feedback1 }}</p>
					<button
						class="h-40  mt-2 btn btn-info"
						type="submit"
						style="width:375px;"
					>
						Change your password
					</button>
				</div>
			</form>
		</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Service, Auth, a_Auth } from "@/services/index.js";
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
	name: "Account",

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
			message: "",
			auth: Auth.state,
			a_auth: a_Auth.state,
			username: "",
			a_username: "",
			feedback: "",
			email: "",
			old_password1: "",
			new_password2: "",
			feedback1: "",
		};
	},
	methods: {
		submitForm(event) {
			event.target.classList.add("was-validated");
		},
		async changePass(event) {
			if (this.old_password1 == "" || this.new_password2 == "") {
				event.target.classList.add("was-validated");
				return (this.feedback1 = "Wrong password");
			}
			this.feedback1 = "";
			try {
				let succes = await Auth.changePassword(
					this.old_password1,
					this.new_password2
				);
				console.log("Rezultat promjene", succes);
				if (succes == true) {
					this.$router.replace({ path: "/" });
				}
			} catch (e) {
				this.feedback1 = "You typed wrong old password";
			}
		},
		async get_username() {
			try {
				this.username = await Auth.getOne(this.auth.userEmail);
			} catch (e) {}
		},

		async a_get_username() {
			try {
				this.a_username = await a_Auth.a_getOne(this.a_auth.userEmail);
			} catch (e) {}
		},
	},

	created() {
		this.get_username();
		this.a_get_username();
	},
};
</script>

<style scoped>
.container {
	text-align: center;
}
.paragraf {
	display: inline !important;
}
</style>
