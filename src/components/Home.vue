<template>
    
    <div>
        <mdb-navbar expand="large" dark color="light-blue">
        <mdb-navbar-brand href="#">
            <img src="@/assets/Gamepad_bijeli.png" height="65px;" alt="logo" />
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
                <mdb-navbar-nav class="ml-5">
                    <mdb-nav-item class="mr-5" href="#" active>Home</mdb-nav-item>
                    <mdb-nav-item class="mr-5" href="#">Games</mdb-nav-item>
                    <router-link style="color:white;" to="/About"><mdb-nav-item href="#"> About </mdb-nav-item></router-link>
                </mdb-navbar-nav>

                <mdb-navbar-nav right>
                    <mdb-nav-item href="#" active>Your Playlist</mdb-nav-item>
                    <router-link style="color:white;" to="/"><mdb-nav-item href="#"> Sign Out</mdb-nav-item></router-link>
             </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>



      
            <div class="bg-image" style="background-image: url('https://i.ibb.co/V9Pwtx8/%20%20%20%20Background-cb-Copy.jpg'); height:720px; background-size: cover;background-attachment: scroll;"></div> 


        <br> <br> <br> <br> <br> <br>
                <div style="text-align: left;" class="ml-5">           
                <div style="float:left">Popular Games</div>
                <div><hr style="clear: none; position: relative; top: 0.8rem;"></div>

        </div>
        <br> <br>
       
        <div class="row">    
            
        <div class="card gg" >
            <img src="@/assets/Zelda.jpg" alt="Snow" style="width:140px; height:180px;"
                class="card-img-top" />
        </div>
        
            
            <div class="card ml-5 ">
                <img src="@/assets/Gta5.jpg" alt="Snow" style="width:140px; height:180px;"
                    class="card-img-top" />
            </div>
           
        </div>
        <br>
         <div style="text-align: left;" class="ml-5 mt-5">           
                <div style="float:left">New games</div>
                <div><hr  style="clear: none; position: relative; top: 0.8rem;"></div>

        </div>
        <br> <br>
       
        <div class="row">    
            
        <div class="card gg" >
            <img src="@/assets/Zelda.jpg" alt="Snow" style="width:140px; height:180px;"
                class="card-img-top" />
        </div>
        
            
            <div class="card  ml-5 ">
                <img src="@/assets/Gta5.jpg" alt="Snow" style="width:140px; height:180px;"
                    class="card-img-top" />
            </div>
             <div class="card  ml-5 ">
                <img src="@/assets/Gta5.jpg" alt="Snow" style="width:140px; height:180px;"
                    class="card-img-top" />
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


hr {
    border: none;
    height: 1px;
    /* Set the hr color */
    color: #333; /* old IE */
    background-color: #333; /* Modern Browsers */
    width:85%;
}



.gg{
    
  margin-left: 11rem !important;
}




</style>