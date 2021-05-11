<template>
    
<mdb-navbar expand="large" dark color="light-blue">
        <mdb-navbar-brand href="#">
            <img src="@/assets/Gamepad_bijeli.png" height="65px;" alt="logo" />
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
                <mdb-navbar-nav class="ml-5">
                    <mdb-nav-item class="mr-5" href="#" active><router-link style="color:white;" to="/Home">Home</router-link></mdb-nav-item>
                     <mdb-nav-item class="mr-5" href="#"><router-link style="color:white;" to="/Games">Games</router-link></mdb-nav-item>
                    <mdb-nav-item class="mr-5" href="#"><router-link style="color:white;" to="/About"> About </router-link></mdb-nav-item>
                </mdb-navbar-nav>

                <mdb-navbar-nav right >
                <mdb-dropdown start>
                    <mdb-dropdown-toggle style=" -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; color:white;" color="#03a9f4" slot="toggle">User@email.com</mdb-dropdown-toggle>
                    <mdb-dropdown-menu color="primary">
                      <mdb-dropdown-item><router-link to="/Playlist">Playlist</router-link></mdb-dropdown-item>
                    <mdb-dropdown-item><router-link to="/">Sign Out</router-link></mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>
            
                   
                    
             </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>

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
      mdbCol,
    },
    data(){
        return {

        }
    }
}
</script>
