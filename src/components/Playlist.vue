<template>
    
    <div>
        <Navbar />


        <div class="mx-auto mt-5" style=" max-width:900px; height:246px; background-color:#eceff1 ;">
                <br>
                <p class="text-left mt-1 ml-3" style="font-size:27px;">Your playlist</p>
                <br><br>
                <p class="text-left ml-3" style="font-size:16px;">What is a Playlist? It's a simply list of games, also helps you save <br> games that you would like to play or explore even more</p>
                <hr style="background-color: white;">
                <p class="ml-3" style="font-size:18px; float: left;">Title </p> <p class="mr-3" style="font-size:18px; float: right;">Private playlist 🔒</p>

        </div>


          
            <form>   
            <div class="max-width: 900px; mt-4 mb-3">

            <b-card class="mx-auto text-left" style="width: 900px; -webkit-box-shadow:none; -moz-box-shadow:none; box-shadow:none; padding:0;">
              <div v-for="lista in lista" :key="lista._id" ><router-link :to="lista.route"><img v-bind:src="lista.url" style="width:140px; height:180px;" /></router-link>
               <label> 
                        <p class="text-left ml-3">{{lista.name}}</p>
                        <p class="text-left ml-3">&#11088; {{lista.grade}}</p> 
                </label>
              <hr style="background-color:#c2c2c2">
              </div>
            </b-card>
            </div>
            </form> 
          
    
        <b-form >
         
          
        </b-form>
      
      

       
      
       <br><br><br>

                

    <Footer />


  

    </div>

      


</template>

<script>


  import Navbar from '@/components/Layout/Navbar'
  import Footer from '@/components/Layout/Footer'
  import GameCard from '@/components/GameCard'
  import Zelda from '@/components/List_games/Zelda'
  import {Playlist} from '@/services/index.js';
  import {Service} from '@/services/index.js';
  
  
  export default {

    name: 'Playlist',
  data(){
    return{
      lista:{},
    }
  },
    
    components: {
      Navbar,
      Footer,
      GameCard,
      Zelda,
      Playlist,
      Service
      
    },
     
    methods: {
     
      async pozoviList(term){
        this.lista = await Playlist.getAll(term)
      },


    },

    mounted () {
      window.scrollTo(0, 0)
      
    },
    created (){
      this.pozoviList();
      
    }
    
  }
    
  


</script>

<style scoped>

.card-body {
    padding: 0 !important;
}

</style>