<template>
    <div>
        
        <Navbar />

        <div>

        <mdb-navbar class="blue-grey lighten-5 mx-auto mt-5" style=" max-width:900px;">
            <mdb-navbar-brand href="#">About Us</mdb-navbar-brand>
        </mdb-navbar>


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




  <Footer />
  
    </div>
</template>
<script>
 

  import Navbar from '@/components/Layout/Navbar'
  import Footer from '@/components/Layout/Footer'
  
  export default {
    name: 'About',
    components: {
      Navbar,
      Footer
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