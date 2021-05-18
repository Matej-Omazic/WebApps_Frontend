<template>
    
    <div>
        <Navbar />



      
            <div class="bg-image" style="background-image: url('https://i.ibb.co/V9Pwtx8/%20%20%20%20Background-cb-Copy.jpg'); height:720px; background-size: cover;background-attachment: scroll;"></div> 


        <br> <br> <br> <br> <br> <br>
                <div style="text-align: left;" class="ml-5">           
                <div class="mb-5" style="float:left">Popular Games</div><br>
                <hr style="clear: none; position: relative; top: 0.8rem;">
        </div>
        <br> <br>
       
       <div class="mx-auto" style=" max-width: 81%; ">
           <div class="row" style=" max-width: 1000px;  ">
            <div class="column">
              <router-link to="/GtaV"><img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
            <div class="column">
             <router-link to="/Zelda"> <img src="@/assets/Zelda.jpg" alt="Forest" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
            <div class="column">
              <router-link to="/GtaV"><img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
          </div>
        </div>
        <br>




         <div style="text-align: left;" class="ml-5 mt-5">           
                <div style="float:left">New games</div><br>
                <hr style="clear: none; position: relative; top: 0.8rem;">

        </div>
        <br> <br>

        
           <div class="mx-auto" style="max-width: 81%; ">
           <div class="row" style=" max-width: 1000px;  ">
            <div class="column">
             <router-link to="/GtaV"><img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
            <div class="column">
             <router-link to="/Zelda"><img src="@/assets/Zelda.jpg" alt="Forest" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
            <div class="column">
              <router-link to="/GtaV"><img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;"></router-link>
            </div>
          </div>
        </div>

       
                

    <Footer />


  

    </div>

      


</template>

<script>


  import Navbar from '@/components/Layout/Navbar'
  import Footer from '@/components/Layout/Footer'

  export default {
    name: 'Home',
    components: {
      Navbar,
      Footer
    },
    mounted () {
      window.scrollTo(0, 0)
    },
  }


</script>

<style scoped>


hr {
    border: none;
    height: 1px;
    color: #333;
    background-color: #333;
    width:100%;
    margin: 0;
}



.gg{
    
  margin-left: 11rem !important;
}



.column {
  float: left;
  width: 190px;
}



</style>