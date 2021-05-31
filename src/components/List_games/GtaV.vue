<template>
    <div>
    <Navbar />
      <!-- igrica -->
    <div >
        <b-card class="mt-3 mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none; ">
            <b-card img-src="https://i.ibb.co/CKFBPBv/Gta5.jpg"  img-alt="Card image" img-left class="mb-3" style="height:246px;background-color:#7D7D7D; ">
            <b-card-text class="mt-2" style="max-width 200px; color:white; text-align:left; ">
                <p style="font-size:25px;">Grand Theft Auto </p><p style="font-size:18px;">Video game released 17 September 2013</p>
               <p style="font-size:18px;">Action, Adventure, Comedy</p><p style="font-size:22px;">&#11088;96/100 </p>
            </b-card-text>
            </b-card>
        </b-card>
    </div>
    <div>
       <b-form @submit.prevent="add_playlist">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Writer:</b> Dan Houser, Rupert Humphries</p>
            <p style="margin:0;"><b>Stars:</b> Shawn Fonteno, Ned Luke, Steven Ogg </p>
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
              <img src="@/assets/Igrice/GtaV/Gta_5_photo_1.jpg" alt="Snow" class="mb-3 mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/GtaV/Gta_5_photo_2.jpg" alt="Forest" class="mb-3  mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/GtaV/Gta_5_photo_3.jpg" alt="Mountains" class="mb-3 mr-3" style="width:280px; height:169px;">
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
                            <p style="margin:0;"> <b>Developer:</b> Rockstar games</p>
                            <p style="margin:0;"> <b>Publisher:</b> Rockstar games</p>
                            <p style="margin:0;"> <b>Platforms:</b> Playstation 3/4/5, Xbox 360/One, PC</p>
                            <p style="margin:0;"> <b>Budget: </b> $265,000,000 (estimated)</p>
                        </b-card-text>
                
                    </b-card>
                
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
        
    <!-- Time to beat -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Time to beat</p>
                            <p style="margin:0;"> <b>Main story:</b> 31.5 hours</p>
                            <p style="margin:0;"> <b>Main story + Extras:</b> 47.5 hours</p>
                            <p style="margin:0;"> <b>Completionist:</b> 78.5 hours</p>
                            <p style="margin:0;"> <b>Speedrun(Any%): </b> 6h 39m 11s</p>
                        </b-card-text>
                
                    </b-card>
                <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Storyline -->    
        <div>
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Storyline</p>
                         <p style="margin:0;">The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, 
                           starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time
                            of economic malaise and lowest-common-denominator reality TV. Amidst this madness, three unique criminals
                             plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities
                              for serious money; Michael, an ex-con whose "retirement" is a less rosy than he hoped it would be; and Trevor,
                               a violent dude driven by the chance for a quick high and the next big score. Nearly out of options, the crew risks
                                it all in a series of daring and dangerous heists that could set them up for life - one way or the other.</p>
                         
                     </b-card-text>
                </b-card>
             <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
<!-- Cast -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Cast</p>
                            <p style="margin:0;">Shawn Fonteno as Franklin Clinton</p>
                            <p style="margin:0;"> Ned Luke as Michael Townley / De Santa </p>
                            <p style="margin:0;"> Steven Ogg as Trevor Philips</p>
                            <p style="margin:0;"> Gerald 'Slink' Johnson as Lamar Davis</p>
                            <p style="margin:0;"> Vicki van Tassel as Amanda Townley / De Santa</p>
                            <p style="margin:0;"> Abdel Gonzalez Andreas Sanchez (voice)</p>
                            <p style="margin:0;"> Oberon K.A. Adjepong as Anton Beaudelaire (voice)</p>
                            <p style="margin:0;"> Traci Godfrey as Ashley Butler (voice)</p>
                            <p style="margin:0;"> Janet Hubert as Aunt Denise (voice)</p>
                            <p style="margin:0;"> Ryan Woodle as Bradley Snider (voice)</p>
                        </b-card-text>
                
                    </b-card>
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
     <!-- Comments -->    
       <div>  
         <form @submit="add_commentv2">
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
  import Playlist from '@/components/Playlist'
  import {Games} from '@/services/index.js';
  import {Komentari} from '@/services/index.js';
  import {Service} from '@/services/index.js';
 

  
  export default {
    
    name: 'GtaV',
   
    data (){
      return{
      
       games: null,
       comment:"",
       komentari:{},
       games_id: "",
       pomocna:"",
      } 
    },
    components: {
      Navbar,
      Footer,
      mdbInput,
      Playlist,
      Games
    },
    methods:{
      add_playlist(){
        this.games = 'https://i.ibb.co/CKFBPBv/Gta5.jpg'
        console.log(this.games);

      },

    /*
      add_comment(){
        let newCom = {
          comment: this.comment
        }
        console.log(newCom)
        Service.patch('/GtaV/60b4bc965b55f53bcb850b82',newCom)
        .then((result)=>{
          console.log(result)
        })
      },
 */

      async add_commentv2(){
            let comm = {
                comment: this.comment,
                game_id: "1001",
                author: "Salenjak",
            };
            let newpost = await Komentari.add(comm);
            console.log('Spremljeni post', newpost.data);
            this.$router.push({ name: 'GtaV' });
      },


      async pozoviCom(term){
        this.komentari = await Komentari.getAll(term)
      },

      async pozoviIgru(term){
        this.games_id = await Games.getAll(term)
      },


    },

    mounted () {
      window.scrollTo(0, 0)
      
    },
    created (){
      this.pozoviCom();
      this.pozoviIgru();
    }
    
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
.comm{
  color:black;
  
}
.comm b{
  color: #0c99e0;
  font-size:13px;

}
</style>