<template>
    
<mdb-navbar expand="large" dark color="light-blue">
        <mdb-navbar-brand href="#">
            <img src="@/assets/Gamepad_bijeli.png" height="65px;" alt="logo" />
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
                <mdb-navbar-nav class="ml-5">
                    <router-link style="color:white;" to="/Home"><mdb-nav-item class="mr-5" href="#" active>Home</mdb-nav-item></router-link>
                     <router-link style="color:white;" to="/Games"><mdb-nav-item class="mr-5" href="#">Games</mdb-nav-item></router-link>
                    <router-link style="color:white;" to="/About"><mdb-nav-item class="mr-5" href="#"> About </mdb-nav-item></router-link>
                </mdb-navbar-nav>

                <mdb-navbar-nav right >
                    <mdb-dropdown tag="li" class="nav-item mx-5" > 
          <mdb-dropdown-toggle tag="a" navLink color="" slot="toggle" waves-fixed >user@gmail.com</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
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
