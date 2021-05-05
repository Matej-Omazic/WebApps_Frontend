<template>

<div>
    <Navbar />


  <div>

        <mdb-navbar class="blue-grey lighten-5 mx-auto mt-5" style=" max-width:900px;">
            <mdb-navbar-brand href="#">List of all games</mdb-navbar-brand>
            <mdb-navbar-toggler>
                    <mdb-navbar-nav right>
                <mdb-form-inline class="ml-auto">
                    <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </mdb-form-inline>
                    </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>


  </div>





<div class=" mx-auto" style="max-width: 900px;">
 
    <b-card-group dock>
    <b-card class="mt-3 " style="max-width: 450px; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
            <b-card img-src="https://i.ibb.co/CKFBPBv/Gta5.jpg"  img-alt="Card image" img-left class="mb-3" >
        <b-card-text class="mt-5" style="max-width 200px;" >
            <p>Grand Theft Auto V <br>Action, Adventure, Comedy <br>17 September 2013<br>&#11088;96/100 </p>
        </b-card-text>
        </b-card>
        </b-card>

        <b-card class="mt-3 " style="max-width: 450px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none;  ">
        <b-card img-src="https://i.ibb.co/rdMnFhR/zelda.jpg"  img-alt="Card image" img-left class="mb-3" style="height: 246px; ">
        <b-card-text class="mt-5" style="max-width 200px;">
            <p>The Legend of Zelda: Breath of the Wild <br>Action, Adventure, Fantasy  <br>3 March 2017<br>&#11088;97/100 </p>
        </b-card-text>
        </b-card>
        </b-card>

    </b-card-group >

    

</div>






    <Footer />



</div>


</template>


<style scoped>




</style>


<script>
import { mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody } from 'mdbvue';
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
  
  export default {
    components: {
      Navbar,
      Footer,
      mdbCard,
      mdbView,
      mdbMask,
      mdbCardImage,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardBody
    }
  }


</script>
