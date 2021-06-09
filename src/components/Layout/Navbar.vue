<template>
  <mdb-navbar expand="large" dark color="light-blue">
    <mdb-navbar-brand href="#">
      <router-link style="color: white" to="/">
        <img src="@/assets/Gamepad_bijeli.png" height="65px;" alt="logo"
      /></router-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav class="ml-5">
        <router-link style="color: white" to="/Home">
          <mdb-nav-item class="mr-5" href="#" active
            >Home</mdb-nav-item
          ></router-link
        >
        <router-link v-if="!a_username.admin" style="color: white" to="/Games"
          ><mdb-nav-item class="mr-5" href="#">Games</mdb-nav-item></router-link
        >
        <router-link v-if="!a_username.admin" style="color: white" to="/About"
          ><mdb-nav-item class="mr-5" href="#">
            About
          </mdb-nav-item></router-link
        >
        <router-link v-if="!a_username.admin" style="color: white" to="/Contact"
          ><mdb-nav-item class="mr-5" href="#">
            Contact
          </mdb-nav-item></router-link
        >
        <router-link v-if="a_username.admin" style="color: white" to="/add_game"
          ><mdb-nav-item class="mr-5" href="#">
            Add a game
          </mdb-nav-item></router-link
        >
      </mdb-navbar-nav>

      <mdb-navbar-nav right>
        <mdb-dropdown start>
          <mdb-dropdown-toggle
            v-if="!a_username.admin"
            class=""
            style="
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              box-shadow: none;
              color: white;
            "
            color="#03a9f4"
            slot="toggle"
            >(User) {{ username.username }}</mdb-dropdown-toggle
          >

          <mdb-dropdown-toggle
            v-if="a_username.admin"
            class=""
            style="
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              box-shadow: none;
              color: white;
            "
            color="#03a9f4"
            slot="toggle"
            >(Moderator) {{ a_username.username }}</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu color="primary">
            <mdb-dropdown-item v-if="!a_username.admin"
              ><router-link to="/Playlist"
                >Playlist</router-link
              ></mdb-dropdown-item
            >
            <mdb-dropdown-item>
              <a
                @click="
                  logout();
                  a_logout();
                "
                href="#"
                >Logout</a
              >
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbFooter,
  mdbRow,
  mdbCol,
} from "mdbvue";
import { Auth, a_Auth } from "@/services";

export default {
  name: "HelloWorld",
  name: "FooterPage",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbFooter,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
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

    logout() {
      Auth.logout();
      this.$router.go();
    },

    a_logout() {
      a_Auth.a_logout();
      this.$router.go();
    },
  },

  created() {
    this.get_username();
    this.a_get_username();
  },
};
</script>
