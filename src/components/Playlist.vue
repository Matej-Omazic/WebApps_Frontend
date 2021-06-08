<template>
	<div>
		<Navbar />
		<div><router-view></router-view></div>
		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Playlist2 from "../components/Playlist2";

export default {
	name: "Playlist",

	data() {
		return {};
	},

	components: {
		Navbar,
		Footer,
		Playlist2,
	},
};
</script>

<style scoped></style>
