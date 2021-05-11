<template>

<div >
    <b-card-group deck style="margin: 0;">
        <b-card class="mt-2 mx-auto " style="width: 450px; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;">
            <b-card >
                <router-link :to="info.route"><img :src="info.url" /></router-link>
                <b-card-text class="mt-2" style="max-width 200px;" >

                    <p>{{info.game_name}}<br> {{info.genre}}<br> {{info.rel_date}}<br> &#11088;{{info.rank}}</p>
                    <b-card-text > </b-card-text>
                    
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