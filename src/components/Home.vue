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
                    <mdb-nav-item class="mr-5" href="#">About</mdb-nav-item>
                </mdb-navbar-nav>

                <mdb-navbar-nav right>
                    <mdb-nav-item href="#" active>Your Playlist</mdb-nav-item>
                    <router-link style="color:white;" to="/"><mdb-nav-item href="#"> Sign Out</mdb-nav-item></router-link>
             </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>



      
            <div class="bg-image" style="background-image: url('https://i.ibb.co/xF75QnS/Background-cb.jpg'); height:720px; background-size: cover;background-attachment: fixed;"></div> 


        <br> <br> <br> <br> <br> <br>
        <div style="text-align: left;" class="ml-5">


              
                <div style="float: left">Popular Games</div>
                <hr style="clear: none; position: relative; top: 0.5em;">

        </div>

            
  








    </div>

      


</template>

<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'HelloWorld',
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
      mdbDropdownItem
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
    width:75%;
}


</style>