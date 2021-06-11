<template>
  <div v-if="game">
    <Navbar />

    <div>
      <b-card
        class="mt-3 mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none; "
      >
        <b-card
          :img-src="game.url"
          img-alt="Card image"
          img-left
          class="mb-3"
          style="height:246px;background-color:#7D7D7D; "
        >
          <b-card-text
            class="mt-2"
            style="max-width 200px; color:white; text-align:left; "
          >
            <p style="font-size:25px;">{{ game.game_name }}</p>
            <p style="font-size:18px;">
              Video game released on {{ game.rel_date }}
            </p>

            <p style="font-size:18px;">{{ game.genre }}</p>
            <p style="font-size:22px;">&#11088;{{ game.rank }}</p>
          </b-card-text>
        </b-card>
      </b-card>
    </div>
    <div>
      <b-form @submit.prevent="add_plist()">
        <b-card
          class="mx-auto"
          style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
        >
          <b-card-text
            class=""
            style="max-width 200px; color:black; text-align:left;"
          >
            <p style="margin:0;"><b>Writer:</b> {{ game.writer }}</p>
            <p style="margin:0;"><b>Stars:</b> {{ game.stars }}</p>
          </b-card-text>
          <div style="float:left; ">
            <button class="add" type="submit">
              Add to playlist
            </button>
          </div>
        </b-card>
      </b-form>
      <p style="color:red ">{{ feedback }}</p>
    </div>
    <!-- Photos -->
    <div class=" mx-auto" style="max-width: 900px;">
      <hr style="clear: none; position: relative; " />
    </div>
    <div>
      <b-card
        class=" mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
      >
        <b-card-text
          class=""
          style="max-width 200px; color:black; text-align:left;"
        >
          <p style="font-size:22px;">Photos</p>
        </b-card-text>
        <div class="mx-auto" style=" max-width: 900px; ">
          <div class="row" style=" max-width:900px; justify-content:center; ">
            <div class="column">
              <img
                :src="game.slika1"
                alt="Snow"
                class="mb-3 mr-3"
                style="width:280px; height:169px;"
              />
            </div>
            <div class="column">
              <img
                :src="game.slika2"
                alt="Forest"
                class="mb-3  mr-3"
                style="width:280px; height:169px;"
              />
            </div>
            <div class="column">
              <img
                :src="game.slika3"
                alt="Mountains"
                class="mb-3 mr-3"
                style="width:280px; height:169px;"
              />
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <!-- Details -->
    <div class=" mx-auto" style="max-width: 900px;">
      <hr style="clear: none; position: relative; " />
    </div>
    <div>
      <b-card
        class=" mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
      >
        <b-card-text
          class=""
          style="max-width 200px; color:black; text-align:left;"
        >
          <p style="font-size:22px;">Details</p>
          <p style="margin:0;"><b>Developer:</b> {{ game.developer }}</p>
          <p style="margin:0;"><b>Publisher:</b> {{ game.publisher }}</p>
          <p style="margin:0;"><b>Platforms:</b> {{ game.platforms }}</p>
          <p style="margin:0;"><b>Budget: </b> {{ game.budget }}</p>
        </b-card-text>
      </b-card>

      <div class=" mx-auto" style="max-width: 900px;">
        <hr style="clear: none; position: relative; " />
      </div>
    </div>
    <!-- Time to beat -->
    <div>
      <b-card
        class=" mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
      >
        <b-card-text
          class=""
          style="max-width 200px; color:black; text-align:left;"
        >
          <p style="font-size:22px;">Time to beat</p>
          <p style="margin:0;"><b>Main story:</b> {{ game.main_story }}</p>
          <p style="margin:0;">
            <b>Main story + Extras:</b> {{ game.main_story_extra }}
          </p>
          <p style="margin:0;">
            <b>Completionist:</b> {{ game.completionist }}
          </p>
          <p style="margin:0;"><b>Speedrun(Any%): </b> {{ game.speedrun }}</p>
        </b-card-text>
      </b-card>
      <div class=" mx-auto" style="max-width: 900px;">
        <hr style="clear: none; position: relative; " />
      </div>
    </div>
    <!-- Storyline -->
    <div>
      <b-card
        class=" mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
      >
        <b-card-text
          class=""
          style="max-width 200px; color:black; text-align:left;"
        >
          <p style="font-size:22px;">Storyline</p>
          <p style="margin:0;">{{ game.storyline }}</p>
        </b-card-text>
      </b-card>
      <div class=" mx-auto" style="max-width: 900px;">
        <hr style="clear: none; position: relative; " />
      </div>
    </div>
    <!-- Cast -->
    <div>
      <b-card
        class=" mx-auto"
        style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
      >
        <b-card-text
          class=""
          style="max-width 200px; color:black; text-align:left;"
        >
          <p style="font-size:22px;">Cast</p>
          <p style="margin:0;">{{ game.cast1 }}</p>
          <p style="margin:0;">{{ game.cast2 }}</p>
          <p style="margin:0;">{{ game.cast3 }}</p>
          <p style="margin:0;">{{ game.cast4 }}</p>
          <p style="margin:0;">{{ game.cast5 }}</p>
          <p style="margin:0;">{{ game.cast6 }}</p>
          <p style="margin:0;">{{ game.cast7 }}</p>
          <p style="margin:0;">{{ game.cast8 }}</p>
          <p style="margin:0;">{{ game.cast9 }}</p>
          <p style="margin:0;">{{ game.cast10 }}</p>
        </b-card-text>
      </b-card>
      <div class=" mx-auto" style="max-width: 900px;">
        <hr style="clear: none; position: relative; " />
      </div>
    </div>
    <div class="animate ">
      <form @submit.prevent="add_comment">
        <b-card
          class=" mx-auto"
          style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; "
        >
          <b-card-text style="max-width 200px; color:black; text-align:left;">
            <p style="font-size:22px;">Comments</p>
            <div class="komentari list-group">
              <a
                class="animate list-group-item list-group-item-action flex-column align-items-	"
                v-for="komentari in komentari"
                :key="komentari.id"
              >
                {{ komentari.comment }} <br />
                by
                <b style="color:#0c99e0;">{{ komentari.author }}</b>
                <a
                  v-if="auth.userEmail == komentari.author_id"
                  style="float: right; align-items: center;"
                >
                  <a @click="del_com(komentari.comment)" class="close" />
                </a>
              </a>
            </div>

            <mdb-input
              v-model="comment"
              type="textarea"
              outline
              inputClass="z-depth-1 p-3"
              placeholder="Write a comment..."
            />
          </b-card-text>
          <button
            type="submit"
            style="float:right;"
            class="btn btn-outline-primary comm"
            data-mdb-ripple-color="dark"
          >
            Comment
          </button>
          <p class="mt-5" style="color: red">{{ feedback_com }}</p>
        </b-card>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GameCard from "@/components/GameCard";

import { Games, Komentari, Service, Playlist, Auth } from "@/services/index.js";

export default {
  props: ["id"],
  name: "All_games",
  components: {
    GameCard,
    Navbar,
    Footer,
    show: true,
  },
  data() {
    return {
      game: null,
      auth: Auth.state,
      lista: [],
      komentari: [],
      comment: "",
      username: "",
      feedback: "",
      feedback_com: "",
    };
  },
  async mounted() {
    this.game = await Games.getOne(this.id);
  },
  methods: {
    async pozoviCom() {
      this.komentari = await Komentari.getAll(this.id);
    },
    async pozoviList() {
      try {
        this.lista = await Playlist.getOne(this.id);
      } catch (e) {
        throw new Error(
          "Error is happening because this game is not in your playlist"
        );
      }
    },

    async add_plist() {
      let plist = {
        img_url: this.game.url,
        game_name: this.game.game_name,
        rate: this.game.rank,
        author: this.auth.userEmail,
        game_id: this.game.id,
      };
      if (
        this.lista.name == this.game.game_name &&
        this.lista.author == this.auth.userEmail
      ) {
        this.feedback = "Game has already been added";
      } else {
        let newlist = await Playlist.add(plist);
        console.log("Spremljeni post", newlist.data);

        this.feedback = "Game has been added";
      }
    },

    async add_comment(e) {
      let comm = {
        comment: this.comment,
        game_id: this.game.id,
        author: this.username.username,
        author_id: this.auth.userEmail,
      };
      if (this.comment == "") {
        this.feedback_com = "Message must be filled out";
        e.preventDefault();
      } else {
        let newlist = await Komentari.add(comm);
        console.log("Spremljeni komentar", newlist.data);
        this.pozoviCom();
        this.comment = "";
        this.feedback_com = "";
      }
      //this.$router.go();
    },

    del_com(comment_name) {
      let komentari = {
        comment_name: comment_name,
      };
      Service.post("/comments/delete/" + comment_name, komentari).then(
        (result) => {
          console.log(result);
          this.pozoviCom();
        }
      );
    },

    async get_username() {
      try {
        this.username = await Auth.getOne(this.auth.userEmail);
      } catch (e) {}
    },
  },
  created() {
    this.get_username();
    this.pozoviList();
    this.pozoviCom();
  },
};
</script>

<style scoped>
hr {
  border: none;
  height: 2px;
  /* Set the hr color */
  color: #707070; /* old IE */
  background-color: #707070; /* Modern Browsers */
  width: 100%;
}
.comm {
  color: black;
}
.comm b {
  color: #0c99e0;
  font-size: 13px;
}
.add {
  max-width: 450px;
  width: 350px;
  background-color: #0c99e0;
  border: none;
  color: white;
  text-align: center;
  height: 35px;
  border-radius: 4px;
}
.del {
  max-width: 450px;
  width: 350px;
  background-color: #7d7d7d;
  border: none;
  color: white;
  text-align: center;
  height: 35px;
  border-radius: 4px;
}
@-webkit-keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
.animate {
  -webkit-animation: fade-in-fwd 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-fwd 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.close {
  position: absolute;
  right: 32px;
  top: 23px;
  width: 20px;
  height: 20px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 23px;
  width: 2px;
}
.close:before {
  transform: rotate(45deg);
  background-color: black;
}
.close:after {
  transform: rotate(-45deg);
  background-color: black;
}

.close:hover:after {
  background-color: red;
}

.close:hover:before {
  background-color: red;
}
</style>
