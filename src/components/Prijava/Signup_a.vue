<template>
	<div>
		<img src="@/assets/Gamepad.png" alt="logo" style="float:center" />
		<div
			class="container login mx-auto "
			style="width:500px; height:auto;min-height:520px; border-color:gray; border-style:solid;"
		>
			<form novalidate @submit.prevent="register1">
				<p class="text-center mb-2 mt-5" style="font-size:35px;">
					Create account as moderator
				</p>
				<div style="max-width:400px;" class="mx-auto">
					<mdb-input
						label="Username"
						v-model="username"
						type="text"
						required
						invalidFeedback="Please enter your username "
					/>
					<mdb-input
						label="Email"
						v-model="email"
						type="email"
						required
						invalidFeedback="Please enter your e-mail address "
					/>
					<mdb-input
						label="Pasword"
						v-model="password"
						type="password"
						required
						invalidFeedback="Please enter your password "
					/>
					<p style="color:red; margin:0;">{{ feedback }}</p>
				</div>
				<div
					style="color:red;"
					v-if="
						!$v.password.minLength ||
							(!$v.password.containsUppercase && password)
					"
				>
					Password should have at least
					{{ $v.password.$params.minLength.min }}
					characters and one uppercase characters
				</div>
				<div class="text-center">
					<button
						class="h-40 mt-3 btn btn-info"
						style="width:375px;"
						type="submit"
					>
						Create your account
					</button>
				</div>
				<br />
				<h5 class="mx-auto"><span>Already have an account?</span></h5>
			</form>

			<router-link
				class="h-40 mt-4 mb-5  btn btn-light"
				style="width:375px; "
				to="/Login_a"
			>
				Sign-in</router-link
			>
		</div>
	</div>
</template>

<script>
import { a_Auth } from "@/services";
import { required, minLength } from "vuelidate/lib/validators";

export default {
	name: "Signup_a",
	data() {
		return {
			email: "",
			username: "",
			password: "",
			admin: true,
			feedback: "",
		};
	},
	validations: {
		password: {
			required,
			minLength: minLength(6),
			containsUppercase(s) {
				const upper = /[A-Z]/.test(s);
				return upper;
			},
		},
	},
	methods: {
		async register1(event) {
			if (this.email == "" || this.username == "" || this.password == "") {
				event.target.classList.add("was-validated");
			}
			if (
				this.$v.password.minLenght == false ||
				this.$v.password.containsUppercase == false
			) {
				return (this.feedback = "Password is invalid");
			}
			try {
				let succes = await a_Auth.register1(
					this.email,
					this.username,
					this.password,
					this.admin
				);
				if (
					(succes == true &&
						this.$v.password.minLenght == true &&
						this.$v.password.containsUppercase == true) ||
					this.email !== "" ||
					this.username !== "" ||
					this.password !== ""
				) {
					console.log("Rezultat registracije", succes);
					this.$router.push({ name: "Login_a" });
				}
			} catch (e) {}
		},
	},
};
</script>

<style scoped>
h5 {
	width: 76%;
	text-align: center;
	border-bottom: 1px solid gray;
	line-height: 0.05em;
}

h5 span {
	background: #fff;
	padding: 0 10px;
}
</style>
