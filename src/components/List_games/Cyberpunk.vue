<template>
    <div>
    <Navbar />
      <!-- igrica -->
    <div >
        <b-card class="mt-3 mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none; ">
            <b-card img-src="https://i.ibb.co/jfySqVB/resized-image-Promo.jpg"  img-alt="Card image" img-left class="mb-3" style="height:246px;background-color:#7D7D7D; ">
            <b-card-text class="mt-2" style="max-width 200px; color:white; text-align:left; ">
                <p style="font-size:25px;">Cyberpunk 2077 </p><p style="font-size:18px;">Video game released 10 December 2020</p>
               <p style="font-size:18px;">Action,Adventure,Crime</p><p style="font-size:22px;">&#11088;85/100 </p>
            </b-card-text>
            </b-card>
        </b-card>
    </div>
    <div>
       <b-form @submit.prevent="add_playlist">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Director:</b> Adam Badowski,  Mateusz Kanik</p>
            <p style="margin:0;"><b>Writer:</b>  Marcin Blacha (story director), Tomasz Marchewka (lead writer)</p>
            <p style="margin:0;"><b>Stars:</b> Cherami Leigh, Gavin Drea, Keanu Reeves  </p>
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
              <img src="@/assets/Igrice/Cyberpunk/cyberpunk1.png" alt="Snow" class="mb-3 mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/Cyberpunk/cyberpunk2.jpeg" alt="Forest" class="mb-3  mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/Cyberpunk/cyberpunk3.jpg" alt="Mountains" class="mb-3 mr-3" style="width:280px; height:169px;">
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
                            <p style="margin:0;"> <b>Developer:</b> CD Projekt Red</p>
                            <p style="margin:0;"> <b>Publisher:</b> CD Projekt Red</p>
                            <p style="margin:0;"> <b>Platforms:</b> Playstation 4/5, Xbox One, PC</p>
                            <p style="margin:0;"> <b>Budget: </b> $316,000,000 (estimated)</p>
                        </b-card-text>
                
                    </b-card>
                
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
        
    <!-- Time to beat -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Time to beat</p>
                            <p style="margin:0;"> <b>Main story:</b> 22 hours</p>
                            <p style="margin:0;"> <b>Main story + Extras:</b> 58 hours</p>
                            <p style="margin:0;"> <b>Completionist:</b> 1 hours</p>
                            <p style="margin:0;"> <b>Speedrun(Any%): </b> 7h 41m</p>
                        </b-card-text>
                
                    </b-card>
                <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Storyline -->    
        <div>
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Storyline</p>
                         <p style="margin:0;">Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, amour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality.</p>
                         
                     </b-card-text>
                </b-card>
             <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
<!-- Cast -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Cast</p>
                            <p style="margin:0;">Cherami Leigh as V (Female Player) (voice)</p>
                            <p style="margin:0;"> Gavin Drea as V (Male Player) (voice) </p>
                            <p style="margin:0;"> Keanu Reeves as Johnny Silverhand </p>
                            <p style="margin:0;"> Emily Woo Zeller as Panam Palmer (voice)</p>
                            <p style="margin:0;"> Carla Tassara as Judy Alvarez (voice)</p>
                            <p style="margin:0;"> Robbie Daymond as River Ward (voice)</p>
                            <p style="margin:0;"> Jason Hightower as Jackie Welles (voice)</p>
                            <p style="margin:0;"> Rome Kanda as Goro Takemura (voice)</p>
                            <p style="margin:0;"> Matthew Yang King as 	Kerry Eurodyne</p>
                            <p style="margin:0;"> Jane Perry as	Rogue Amendiares (voice)</p>
                        </b-card-text>
                
                    </b-card>
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Comments -->    
        <div>  
         <form @submit="add_comment">
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Comments</p>
                         <p class="comm" v-for="komentari in komentari" :key="komentari._id" :values="komentari.comment">{{komentari.comment}} <br> by <b>{{komentari.author}}</b></p> 
                      <mdb-input v-model="comment" type="textarea" outline inputClass="z-depth-1 p-3" placeholder="Write a comment..."/>  
                                       
                     </b-card-text>
                     <button type="submit" style="float:right;" class="btn btn-outline-primary comm" data-mdb-ripple-color="dark">Comment</button>
                
                </b-card>
                </form>
             
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