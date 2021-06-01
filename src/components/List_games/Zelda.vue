<template>
    <div>
    <Navbar />
      <!-- igrica -->
    <div >
        <b-card class="mt-3 mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;	box-shadow: none; ">
            <b-card img-src="https://i.ibb.co/rdMnFhR/zelda.jpg"  img-alt="Card image" img-left class="mb-3" style="height:246px;background-color:#7D7D7D; ">
            <b-card-text class="mt-3" style="max-width 200px; color:white; text-align:left; ">
                <p style="font-size:25px;">The Legend of Zelda: Breath of the Wild </p><p style="font-size:18px;">Video game released 3 March 2017</p>
               <p style="font-size:18px;">Action, Adventure, Fantasy</p><p style="font-size:22px;">&#11088;97/100 </p>
            </b-card-text>
            </b-card>
        </b-card>
    </div>
    <div>
       <b-form v-if="!klik" @submit.prevent="add_plist2">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Writer:</b> Dan Houser, Rupert Humphries</p>
            <p style="margin:0;"><b>Stars:</b> Shawn Fonteno, Ned Luke, Steven Ogg </p>
            </b-card-text>
            <div style="float:left; "><button class="add" type="submit" >Add to playlist</button ></div>
        </b-card>
        </b-form>


         <b-form v-if="klik" @submit.prevent="add_plist2">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Writer:</b> Dan Houser, Rupert Humphries</p>
            <p style="margin:0;"><b>Stars:</b> Shawn Fonteno, Ned Luke, Steven Ogg </p>
            </b-card-text>
            <div style="float:left; "><button class="del" type="submit" >Clear the playlist</button ></div>
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
              <img src="@/assets/Igrice/Zelda/Zelda_photo1.jpg" alt="Snow" class="mb-3 mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/Zelda/Zelda_photo_2.jpg" alt="Forest" class="mb-3  mr-3" style="width:280px; height:169px;">
            </div>
            <div class="column">
              <img src="@/assets/Igrice/Zelda/Zelda_photo_3.jpg" alt="Mountains" class="mb-3 mr-3" style="width:280px; height:169px;">
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
                            <p style="margin:0;"> <b>Developer:</b> Nintendo EPD</p>
                            <p style="margin:0;"> <b>Publisher:</b> Nintendo</p>
                            <p style="margin:0;"> <b>Platforms:</b> Nintendo Switch, Wii U</p>
                            <p style="margin:0;"> <b>Budget: </b> $20,000,000 (estimated)</p>
                        </b-card-text>
                
                    </b-card>
                
               <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
        
    <!-- Time to beat -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Time to beat</p>
                            <p style="margin:0;"> <b>Main story:</b> 50 hours</p>
                            <p style="margin:0;"> <b>Main story + Extras:</b> 96.5 hours</p>
                            <p style="margin:0;"> <b>Completionist:</b> 188 hours</p>
                            <p style="margin:0;"> <b>Speedrun(Any%): </b> 59m 57s</p>
                        </b-card-text>
                
                    </b-card>
                <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
    <!-- Storyline -->    
        <div>
                <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                    <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                         <p style="font-size:22px;">Storyline</p>
                         <p style="margin:0;">In this 3D open-world entry in the Zelda series, Link is awakened from a deep slumber
                                                 without his past memories in the post-apocalyptic Kingdom of Hyrule, and sets off on a journey
                                                 to defeat the ancient evil Calamity Ganon. Link treks, climbs and glides through fields, forests
                                                 and mountain ranges while meeting and helping friendly folk and defeating enemies in order to
                                                 gather up the strength to face Ganon.</p>
                         
                     </b-card-text>
                </b-card>
             <div class=" mx-auto" style="max-width: 900px;"> <hr style="clear: none; position: relative; "></div>
        </div>
<!-- Cast -->    
        <div>
                    <b-card class=" mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
                        <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
                            <p style="font-size:22px;">Cast</p>
                            <p style="margin:0;">Kengo Takanashi as Link (voice)</p>
                            <p style="margin:0;"> Yû Shimamura as Princess Zelda </p>
                            <p style="margin:0;"> Kôji Takeda as Daruk (voice)</p>
                            <p style="margin:0;"> Noboru Yamaguchi as Revali (voice)</p>
                            <p style="margin:0;"> Mayu Isshiki as Mipha (voice)</p>
                            <p style="margin:0;"> Rei Shimoda as Urbosa (voice)</p>
                            <p style="margin:0;"> Hiroshi Naka as King Rhoam Bosphoramus Hyrule (voice)</p>
                            <p style="margin:0;"> Shôko Tsuda as Impa</p>
                            <p style="margin:0;"> Hideaki Nonaka as Great Deku Tree (voice)</p>
                            <p style="margin:0;"> Kumiko Watanabe as Yunobo (voice)</p>
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
  import {Playlist} from '@/services/index.js';
  import {Games} from '@/services/index.js';
  import {Komentari} from '@/services/index.js';
  import {Service} from '@/services/index.js';



  
  export default {
    
    name: 'Zelda',
   
    data (){
      return{
       klik:0,
       games: null,
       comment:"",
       komentari:{}
      } 
    },
    components: {
      Navbar,
      Footer,
      mdbInput,
      Playlist
    },
    methods:{
      async add_plist2(){
            let plist = {
                img_url: "https://i.ibb.co/rdMnFhR/zelda.jpg",
                game_name: "The Legend of Zelda: Breath of the Wild ",
                rate: "97/100",
                author:"Salenjak",
                route: "/Zelda"
            };
            let newlist = await Playlist.add(plist);
            this.klik = 1;
            console.log('Spremljeni post', newlist.data);
      },
        async add_comment(){
            let comm = {
                comment: this.comment,
                game_id: "1002",
                author: "Zelda Salenjak",
            };
            let newpost = await Komentari.add(comm);
            console.log('Spremljeni post', newpost.data);
            this.$router.push({ name: 'Zelda' });
      },
      

      async pozoviCom(term){
        this.komentari = await Komentari.getAll_zelda(term)
      }
    },

    mounted () {
      window.scrollTo(0, 0)
      
    },
    created (){
      this.pozoviCom();
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
.add{
  max-width: 450px;
  width:350px;
  background-color:#0c99e0;
  border:none;
  color:white;
  text-align: center;
  height:35px;
  border-radius: 4px;
}
.del{
  max-width: 450px;
  width:350px;
  background-color:#7D7D7D;
  border:none;
  color:white;
  text-align: center;
  height:35px;
  border-radius: 4px;
}

</style>