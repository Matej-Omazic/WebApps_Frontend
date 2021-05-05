<template>
    
    <div>
        <Navbar />



      
            <div class="bg-image" style="background-image: url('https://i.ibb.co/V9Pwtx8/%20%20%20%20Background-cb-Copy.jpg'); height:720px; background-size: cover;background-attachment: scroll;"></div> 


        <br> <br> <br> <br> <br> <br>
                <div style="text-align: left;" class="ml-5">           
                <div style="float:left">Popular Games</div>
                <div><hr style="clear: none; position: relative; top: 0.8rem;"></div>

        </div>
        <br> <br>
       
       <div class="mx-auto" style=" max-width: 81%; ">
           <div class="row" style=" max-width: 1000px;  ">
            <div class="column">
              <img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;">
            </div>
            <div class="column">
              <img src="@/assets/Zelda.jpg" alt="Forest" class="mb-3" style="width:140px; height:180px;">
            </div>
            <div class="column">
              <img src="@/assets/Gta5.jpg" alt="Mountains" class="mb-3" style="width:140px; height:180px;">
            </div>
          </div>
        </div>
        <br>




         <div style="text-align: left;" class="ml-5 mt-5">           
                <div style="float:left">New games</div>
                <div><hr  style="clear: none; position: relative; top: 0.8rem;"></div>

        </div>
        <br> <br>

        
           <div class="mx-auto" style="max-width: 81%; ">
           <div class="row" style=" max-width: 1000px;  ">
            <div class="column">
              <img src="@/assets/Gta5.jpg" alt="Snow" class="mb-3" style="width:140px; height:180px;">
            </div>
            <div class="column">
              <img src="@/assets/Zelda.jpg" alt="Forest" class="mb-3" style="width:140px; height:180px;">
            </div>
            <div class="column">
              <img src="@/assets/Gta5.jpg" alt="Mountains" class="mb-3" style="width:140px; height:180px;">
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



.column {
  float: left;
  width: 190px;
}



</style>