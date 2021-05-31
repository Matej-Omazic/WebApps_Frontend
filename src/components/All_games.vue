<template>

  

        <div v-if="game">

         

                <game-card :info="game" />
 
          
                <p>BILO STA</p>
                
                
        </div>


   



</template>

<script>
import GameCard from '@/components/GameCard'
import store from '@/store'
import {Games} from '@/services/index.js';
 


export default {
    props: ['id'],
    data(){
        return{
            game: null
        };
    },
    async mounted(){
        console.log(this.id);

        this.game = await Games.getOne(this.id);
    },
    name: "All_games",
    components: {
        GameCard
    }
};
</script>