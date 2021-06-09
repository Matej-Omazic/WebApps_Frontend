<template>
	<div>
		<Navbar />
		<div v-if="!a_username.admin">
			<mdb-container class="mt-5">
				<mdb-card>
					<mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
					<mdb-card-body>
						<mdb-card-text class="pr-5 pl-5" mr-4 ml-4
							>Do you have any questions? Please do not hesitate to contact us
							directly. Our team will get back to you within a matter of hours
							to help you.</mdb-card-text
						>
						<form
							class="needs-validation"
							novalidate
							@submit="add_contact"
							style="display: inline;"
						>
							<mdb-input
								type="textarea"
								label="Your message"
								v-model="message"
								required
							/>

							<div class="mx-auto mt-4">
								<mdb-icon icon="map-marker-alt" size="2x" />
								<p class="paragraf mr-3" style=" width:120px; font-size:18px;">
									Pula, Croatia
								</p>

								<mdb-icon icon="phone" size="2x" />
								<p class="paragraf mr-3" style=" width:120px; font-size:18px;">
									+ 099 567 6524
								</p>

								<mdb-icon icon="envelope" size="2x" />
								<p class="paragraf mr-3" style=" width:160px; font-size:18px;">
									gamedb@games.com
								</p>
							</div>
							<button
								type="submit"
								class="btn btn-outline-primary comm mx-auto mt-4 "
								data-mdb-ripple-color="dark"
							>
								Send a message
							</button>
						</form>
					</mdb-card-body>
				</mdb-card>
			</mdb-container>
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
import { Service, Auth, Contact, a_Auth } from "@/services/index.js";
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
	name: "Contact",

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
		};
	},
	methods: {
		submitForm(event) {
			event.target.classList.add("was-validated");
		},
		async add_contact() {
			let contact_object = {
				message: this.message,
				author: this.auth.userEmail,
			};
			let newlist = await Contact.add(contact_object);
			console.log("Spremljeni post", newlist.data);
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
