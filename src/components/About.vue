<template>
    <div>
        <mdb-navbar expand="large" dark color="light-blue">
            <mdb-navbar-brand href="#">
                <img src="@/assets/Gamepad_bijeli.png" height="65px;" alt="logo" />
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                    <mdb-navbar-nav class="ml-5">
                        <mdb-nav-item> <router-link style="color:white;" to="/Home"><mdb-nav-item href="#"> Home </mdb-nav-item></router-link></mdb-nav-item>
                         <mdb-nav-item> <router-link style="color:white;" to="/"><mdb-nav-item href="#"> Games </mdb-nav-item></router-link></mdb-nav-item> 
                        <mdb-nav-item> <router-link style="color:white;" to="/About"><mdb-nav-item href="#"> About </mdb-nav-item></router-link></mdb-nav-item>
                    </mdb-navbar-nav>

                    <mdb-navbar-nav right>
                        <mdb-nav-item href="#" active>Your Playlist</mdb-nav-item>
                        <router-link style="color:white;" to="/"><mdb-nav-item href="#"> Sign Out</mdb-nav-item></router-link>
                </mdb-navbar-nav>
                </mdb-navbar-toggler>
        </mdb-navbar>

        <div class="mx-auto mt-5 " style="background-color:#7D7D7D; color:white; width:900px; height:40px; font-size:25px;">
            About us
        </div>

  
  <div class="onama">
    <div class=" p-5 mx-5 mt-4 mb-2 " style="width:900px;">
      <h2>What is GameDB?</h2>

      <p
        class="lead"
        id="tekst"
        style="margin:0; padding:0; text-indent: 40px;"
      >
        We love games, we grew up with games and now we are doing our dream: working professionally with games.
      </p>
      <p class="lead" style="text-indent: 40px" id="tekst">
        We are gathering all relevant information about games in one place and also gathering a community of both Gamers and people from the game
        industry and let them communicate with each other.
      </p>
      <p class="lead" style="text-indent: 40px" id="tekst">
        This is GameDB, a gaming website for everyone that loves game.
      </p>
      <h2 class="mt-5">Our goal?</h2>
      <p class="lead" style="text-indent: 40px" id="tekst">
       We wish to create Your ultimate gaming website that has all information about the games.
      </p>
    </div>
  </div>





    
  <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
    <div style="backgroundColor: #0099cc">
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="6" lg="5" class="text-center text-md-left mb-2 mb-md-0">
            <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
          </mdb-col>
          <mdb-col md="6" lg="7" class="text-center text-md-right">
            <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class="mt-5 text-center text-md-left ">
      <mdb-row class="mt-3 mx-auto">
        <mdb-col md="2" lg="5" xl="4"  class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>GameDB</strong></h6>
          <hr class="info-color mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p> We love games, we grew up with games and now we are doing our dream: working professionally with games.</p>
        </mdb-col>
        
        <mdb-col md="2" lg="5" xl="4" class="mb-4 pl-5">
          <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
          <hr class="info-color  mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="#!">Games</a></p>
          <p><a href="#!">About</a></p>
          <p><a href="#!">Your playlist</a></p>
         
        </mdb-col>
        <mdb-col xl="4" class="mb-2">
          <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
          <hr class="info-color mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
         <p><i class="fas fa-home mr-3"></i> Pula, Croatia</p>
          <p><i class="fas fa-envelope mr-3"></i> gamedb@games.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 099 567 6524</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2021 Copyright: <a> GameDB </a>
      </mdb-container>
    </div>
  </mdb-footer>
  
    </div>
</template>
<script>
 import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbFooter,mdbRow,
      mdbCol } from 'mdbvue';
  export default {
    name: 'HelloWorld',
    name: 'FooterPage',
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
      mdbCol
    }
  }
</script>

<style scoped>
#tekst {
  line-height: 30px;
  font-family: "Segoe UI";
  color: black;
}
h2 {
  font-family: "Segoe UI";
  color: black;
  
}
.onama {
  display: flex;
  justify-content: center;
}
</style>