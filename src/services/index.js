import axios from "axios";
import $router from "@/router";

let Service = axios.create({
	baseURL: "https://arcane-fjord-44394.herokuapp.com/",
	timeout: 3000,
});

Service.interceptors.request.use((request) => {
	try {
		request.headers["Authorization"] = "Bearer " + Auth.getToken();
	} catch (e) {
		console.error(e);
	}
	return request;
});

Service.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status == 401 || error.response.status == 403) {
			Auth.logout();
			$router.go();
		}
	}
);

let Games = {
	add(game) {
		return Service.game("/games", game);
	},
	add_game(whole_game) {
		return Service.post("/games", whole_game);
	},

	async getOne(id) {
		let response = await Service.get(`/games/${id}`);
		let element = response.data;
		return {
			id: element._id,
			url: element.img_url,
			game_name: element.name,
			rel_date: element.release_date,
			genre: element.genre,
			rank: element.rate,
			writer: element.writer,
			stars: element.stars,
			developer: element.developer,
			publisher: element.publisher,
			platforms: element.platforms,
			budget: element.budget,
			slika1: element.slika1,
			slika2: element.slika2,
			slika3: element.slika3,
			main_story: element.main_story,
			main_story_extra: element.main_story_extra,
			completionist: element.completionist,
			speedrun: element.speedrun,
			storyline: element.storyline,
			cast1: element.cast1,
			cast2: element.cast2,
			cast3: element.cast3,
			cast4: element.cast4,
			cast5: element.cast5,
			cast6: element.cast6,
			cast7: element.cast7,
			cast8: element.cast8,
			cast9: element.cast9,
			cast10: element.cast10,
		};
	},

	async getAll(search_text) {
		let options = {};

		if (search_text) {
			options.params = {
				name2: search_text,
			};
		}
		let response = await Service.get("/games", options);
		return response.data.map((element) => {
			return {
				id: element._id,
				url: element.img_url,
				game_name: element.name,
				genre: element.genre,
				rel_date: element.release_date,
				rank: element.rate,
				route: element.route,
			};
		});
	},
};
let Komentari = {
	add(comm) {
		return Service.post("/comments", comm);
	},

	async getAll(com) {
		let response = await Service.get(`/comments/${com}`);
		let data = response.data;
		data = data.map((doc) => {
			return {
				comment: doc.comment,
				game_id: doc.game_id,
				author: doc.author,
				author_id: doc.author_id,
			};
		});
		return data;
	},
};
let Playlist = {
	add(plist) {
		return Service.post("/Playlist", plist);
	},

	async getAll(lista) {
		let response = await Service.get(`/Playlist/${lista}`);
		let data = response.data;
		data = data.map((doc) => {
			return {
				url: doc.img_url,
				name: doc.game_name,
				grade: doc.rate,
				author: doc.author,
				game_id: doc.game_id,
			};
		});
		return data;
	},
	async getOne(lista) {
		let response = await Service.get(`/Playlist_c/${lista}`);
		let doc = response.data;

		return {
			url: doc.img_url,
			name: doc.game_name,
			grade: doc.rate,
			author: doc.author,
			game_id: doc.game_id,
		};
	},
};

let Auth = {
	async register(email, username, password) {
		let response = await Service.post("/users", {
			email: email,
			username: username,
			password: password,
		});

		let user = response.data;

		localStorage.setItem("user", JSON.stringify(user));

		return true;
	},

	async login(email, password) {
		let response = await Service.post("/auth", {
			email: email,
			password: password,
		});
		let user = response.data;

		localStorage.setItem("user", JSON.stringify(user));
		//tu ga ima, console.log(user)
		return true;
	},
	logout() {
		localStorage.removeItem("user");
	},
	getUser() {
		return JSON.parse(localStorage.getItem("user"));
	},

	async getOne(username) {
		let response = await Service.get(`/users/${username}`);
		let element = response.data;

		return {
			id: element._id,
			email: element.email,
			username: element.username,
			password: element.password,
		};
	},

	authenticated() {
		let user = Auth.getUser();
		if (user && user.token) {
			return true;
		} else {
			return false;
		}
	},
	state: {
		get authenticated() {
			return Auth.authenticated();
		},
		get userEmail() {
			let user = Auth.getUser();
			if (user) {
				return user.email;
			}
		},
	},

	getToken() {
		let user = Auth.getUser();
		if (user && user.token) {
			return user.token;
		} else {
			return false;
		}
	},

	prijavljen() {
		let user = Auth.getUser();
		if (user && user.token) {
			return true;
		}
		return false;
	},
	async changePassword(old_password, new_password) {
		let response = await Service.patch("/users", {
			old_password: old_password,
			new_password: new_password,
		});
		console.log("respone", response);
		let user = response.data;

		localStorage.setItem("user", JSON.stringify(user));

		return true;
	},
};

let a_Auth = {
	async register1(email, username, password, admin) {
		let response = await Service.post("/admins", {
			email: email,
			username: username,
			password: password,
			admin: admin,
		});

		let user_a = response.data;

		localStorage.setItem("admin", JSON.stringify(user_a));

		return true;
	},

	async login1(email, password) {
		let response = await Service.post("/a_auth", {
			email: email,
			password: password,
		});
		let user_a = response.data;

		localStorage.setItem("admin", JSON.stringify(user_a));
		return true;
	},
	a_logout() {
		localStorage.removeItem("admin");
	},
	getUser() {
		return JSON.parse(localStorage.getItem("admin"));
	},

	async a_getOne(username) {
		let response = await Service.get(`/admins/${username}`);
		let element = response.data;

		return {
			id: element._id,
			email: element.email,
			username: element.username,
			password: element.password,
			admin: element.admin,
		};
	},

	authenticated() {
		let user_a = a_Auth.getUser();
		if (user_a && user_a.token) {
			return true;
		} else {
			return false;
		}
	},
	state: {
		get authenticated() {
			return a_Auth.authenticated();
		},
		get userEmail() {
			let user_a = a_Auth.getUser();
			if (user_a) {
				return user_a.email;
			}
		},
	},

	getToken() {
		let user_a = a_Auth.getUser();
		if (user_a && user_a.token) {
			return user_a.token;
		} else {
			return false;
		}
	},

	prijavljen() {
		let user_a = a_Auth.getUser();
		if (user_a && user_a.token) {
			return true;
		}
		return false;
	},
	async a_changePassword(a_old_password, a_new_password) {
		let response = await Service.patch("/admins", {
			old_password: a_old_password,
			new_password: a_new_password,
		});
		console.log("respone", response);
		let user_a = response.data;

		localStorage.setItem("user", JSON.stringify(user_a));

		return true;
	},
};

let Contact = {
	add(comm) {
		return Service.post("/Contact", comm);
	},
};

export { Service, Games, Komentari, Playlist, Auth, Contact, a_Auth };
