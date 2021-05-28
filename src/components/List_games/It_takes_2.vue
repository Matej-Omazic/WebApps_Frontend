<template>
    <div>
    <Navbar />
      <!-- igrica -->
    <div >
        <b-card class="mt-3 mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none; ">
            <b-card img-src="https://i.ibb.co/YBsw0VY/ittakes2.png"  img-alt="Card image" img-left class="mb-3" style="height:246px;background-color:#7D7D7D; ">
            <b-card-text class="mt-2" style="max-width 200px; color:white; text-align:left; ">
                <p style="font-size:25px;">It Takes Two </p><p style="font-size:18px;">Video game released 26 March 2021</p>
               <p style="font-size:18px;">Action-adventure, Platformer</p><p style="font-size:22px;">&#11088;89/100 </p>
            </b-card-text>
            </b-card>
        </b-card>
    </div>
    <div>
       <b-form @submit.prevent="add_playlist">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Director:</b>Josef Fares</p>
            <p style="margin:0;"><b>Writer:</b> Soni Jorgensen, Josef Fares</p>
            <p style="margin:0;"><b>Stars:</b> Joseph Balderrama, Annabelle Dowler, Clare Corbett </p>
            </b-card-text>
            <div  style="float:left; "><b-button color="primary" style="max-width:400px;" type="submit" >Add to playlist</b-button ></div>
           <img v-bind:src="games" />
        </b-card>
        </b-form>
    </div>
      <!-- Photos -->
    <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
    <div>
      <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                <p style="font-size:22px;">Photos</p>
             </b-card-text>
    <div class="mx-auto" style=" max-width: 900px; ">
           <div class="row" style=" max-width:900px; justify-content:center; ">
            <div class="column">
              <img src="@/assets/Igrice/It_takes_2/it_takes_2 1.jpg" alt="Snow" class="mb-3 mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/It_takes_2/it_takes_2 3.jpg" alt="Forest" class="mb-3  mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/It_takes_2/it_takes_2 2.jpg" alt="Mountains" class="mb-3 mr-3" style="width:280px; height:169px;">
            </div>
          </div>
        </div>
    </b-card>
   <!-- Details -->
    </div>
       <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
            <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Details</p>
                            <p style="margin:0;"> <b>Developer:</b> Hazelight Studios</p>
                            <p style="margin:0;"> <b>Publisher:</b> Electronic Arts</p>
                            <p style="margin:0;"> <b>Platforms:</b> Playstation 4/5, Xbox One, PC</p>
                            <p style="margin:0;"> <b>Budget: </b> $3,700,000 (estimated)</p>
                        </b-card-text>
                
                    </b-card>
                
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
        
    <!-- Time to beat -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Time to beat</p>
                            <p style="margin:0;"> <b>Main story:</b> 11.5 hours</p>
                            <p style="margin:0;"> <b>Main story + Extras:</b> 13 hours</p>
                            <p style="margin:0;"> <b>Completionist:</b> 15 hours</p>
                            <p style="margin:0;"> <b>Speedrun(Any%): </b> 1h 56m 36s</p>
                        </b-card-text>
                
                    </b-card>
                <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Storyline -->    
        <div>
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Storyline</p>
                         <p style="margin:0;">From Hazelight comes It Takes Two an innovative co-op adventure where uniquely varied gameplay and emotional storytelling intertwine in 
                             a fantastical journey. Founded to push the creative boundaries of what's possible in games, Hazelight is the award-winning studio behind the critically 
                             acclaimed A Way Out and Brothers: A Tale of Two Sons..</p>
                         
                     </b-card-text>
                </b-card>
             <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
<!-- Cast -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Cast</p>
                            <p style="margin:0;">Joseph Balderrama as Cody (voice)</p>
                            <p style="margin:0;"> Annabelle Dowler as May (voice) </p>
                            <p style="margin:0;"> Clare Corbett as Rose (voice)</p>
                            <p style="margin:0;"> Stephen Greif as Vaccum (voice)</p>
                            <p style="margin:0;"> Martin Sherman as Hammerhead </p>
                            <p style="margin:0;"> Oskar Wolontis as Toolbox (voice)</p>
                            <p style="margin:0;"> Susan Brown as Stargazer (voice)</p>
                            <p style="margin:0;"> Grahame Fox as Squirrel Chef (voice)</p>
                            <p style="margin:0;"> Rachel Atkins as Miss Q (voice)</p>
                            <p style="margin:0;"> Gordon Cooper Squirrel Bookkeeper (voice)</p>
                        </b-card-text>
                
                    </b-card>
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Comments -->    
        <div>
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Comments</p>
                         <mdb-input type="textarea" outline inputClass="z-depth-1 p-3" placeholder="Write a comment..."/>                     
                     </b-card-text>
                     <button type="button" style="float:right;" class="btn btn-outline-primary comm" data-mdb-ripple-color="dark">Comment</button>
                </b-card>
        </div>

    <Footer />

    </div>
</template>

<script>


  import Navbar from '@/components/Layout/Navbar'
  import Footer from '@/components/Layout/Footer'
  import { mdbInput } from 'mdbvue';
  import Games from '@/components/Games'
  import Playlist from '@/components/Playlist'
  
  
  export default {
    
    name: 'Zelda',
   
    data (){
      return{
      
       games: null,
       
      }
    },
    components: {
      Navbar,
      Footer,
      mdbInput,
      Games,
      Playlist,
    },
    methods:{
      add_playlist(){
        this.games = 'https://i.ibb.co/CKFBPBv/Gta5.jpg'
        console.log(this.games);

      },
    },

    mounted () {
      window.scrollTo(0, 0)
    },
  }
       


</script>

<style scoped>
hr {
    border: none;
    height: 2px;
    /* Set the hr color */
    color:#707070; /* old IE */
    background-color: #707070; /* Modern Browsers */
    width:100%;
}

</style>