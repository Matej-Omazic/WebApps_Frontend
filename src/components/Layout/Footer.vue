<template>
    

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
          <p><router-link  to="/Games">Games</router-link></p>
          <p> <router-link  to="/About">About</router-link></p>
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
  
</template>

<style scoped>

footer {
  clear: both;
  position: relative;
}

</style>>



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
      mdbCol,
    },
    data(){
        return {

        }
    }
}

</script>
