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
       <b-form v-if="!klik" @submit.prevent="add_plist">
        <b-card  class="mx-auto" style="max-width: 900px; -webkit-box-shadow: none; -moz-box-shadow: none;box-shadow: none; ">
             <b-card-text class="" style="max-width 200px; color:black; text-align:left;">
            <p style="margin:0;"><b>Writer:</b> Dan Houser, Rupert Humphries</p>
            <p style="margin:0;"><b>Stars:</b> Shawn Fonteno, Ned Luke, Steven Ogg </p>
            </b-card-text>
            <div style="float:left; "><button class="add" type="submit" >Add to playlist</button ></div>
        </b-card>
        </b-form>


         <b-form v-if="klik" @submit.prevent="add_plist">
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
         <form @submit="add_commentv3">
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
  import {Komentari} from '@/services/index.js';
  import {Playlist} from '@/services/index.js';
  
  
  export default {
    
    name: 'It_takes_2',
   
    data (){
      return{
       klik:0,
       games: null,
       komentari:{},
       comment:""
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

      async add_plist(){
            let plist = {
                img_url: "https://i.ibb.co/YBsw0VY/ittakes2.png",
                game_name: "It takes two",
                rate: "89/100",
                author:"Salenjak",
                route: "/It_takes_2"
            };
            let newlist = await Playlist.add(plist);
            this.klik = 1;
            console.log('Spremljeni post', newlist.data);
      },

      async add_commentv3(){
            let comm = {
                comment: this.comment,
                game_id: "1003",
                author: "It Takes Salenjak",
            };
            let newpost = await Komentari.add(comm);
            console.log('Spremljeni post', newpost.data);
            this.$router.push({ name: 'It_takes_2' });
      },

      async pozoviCom(term){
        this.komentari = await Komentari.getAll_ittakes(term)
      },
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