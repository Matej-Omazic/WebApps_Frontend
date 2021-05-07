<template>

<div >
    <b-card-group dock>
    <b-card class="mt-3 " style="max-width: 450px; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
        
        <b-card >
            <img :src="info.url"  />
            <b-card-text class="mt-5" style="max-width 200px;" >

                <p>{{info.game_name}}<br> {{info.genre}}<br> {{info.rel_date}}<br> &#11088;{{info.rank}}</p>
                
            </b-card-text>
        </b-card>
        
        </b-card>

    

    </b-card-group >

        
          
        </div>
        

</template>

<script>
export default {
    props: ["info"],
    name: "GameCard",  
};
</script>