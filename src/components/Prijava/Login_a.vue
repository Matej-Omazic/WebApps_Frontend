<template>
	<div>
		<img src="@/assets/Gamepad.png" style="float:center" />
		<div
			class="container login mx-auto "
			style="width:500px; height:auto;min-height:550px; border-color:gray; border-style:solid;"
		>
			<form novalidate @submit.prevent="login1" class="tekst">
				<p class="text-center mb-2 mt-5" style="font-size:35px;">
					Sign in as moderator
				</p>
				<div style="max-width:400px;" class="mx-auto">
					<mdb-input
						v-model="email"
						type="email"
						label="E-mail"
						required
						invalidFeedback="Please use the valid e-mail address "
					/>
					<mdb-input
						label="Your password"
						v-model="password"
						type="password"
						required
						invalidFeedback="Please enter the correct password"
						style="margin-bottom:15px;"
					/>
				</div>

				<p
					class="text-center"
					v-if="feedback"
					style="color:red; margin:0; padding:0;"
				>
					{{ feedback }}
				</p>

				<div class="text-center">
					<button
						class="h-40  mt-3 btn btn-info"
						type="submit"
						style="width:375px;"
					>
						Sign-in
					</button>
					<p class="mt-2 mb-2 " style="margin:0;">
						You want to login as user? Click <a href="/">here</a>
					</p>
				</div>
				<br />
				<h5 class="mx-auto"><span>New to GameDB?</span></h5>
			</form>

			<router-link
				to="/Signup_a"
				class="h-40 mt-4 btn btn-light"
				style="width:375px;"
			>
				Create your account as moderator</router-link
			>
			<p class="mt-2 mb-4">
				You want to create account as user? Click
				<a href="Signup">here</a>
			</p>
		</div>
	</div>
</template>
<script>
import { a_Auth } from "@/services";

export default {
	name: "Login_a",
	data() {
		return {
			email: "",
			password: "",
			feedback: "",
		};
	},
	methods: {
		async login1(event) {
			if (this.email == "" || this.password == "") {
				event.target.classList.add("was-validated");
				return (this.feedback = "Wrong e-mail or password");
			}
			this.feedback = "";
			try {
				let succes = await a_Auth.login1(this.email, this.password);
				console.log("Rezultat prijave", succes);
				if ((succes == true && this.email !== "") || this.password !== "") {
					this.$router.replace({ path: "/home" });
				}
			} catch (e) {
				this.feedback = "Wrong e-mail or password";
			}
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
