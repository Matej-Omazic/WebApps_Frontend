<template>

    <div>
        <Navbar />


        <div>

            <mdb-navbar class="blue-grey lighten-5 mx-auto mt-5" style=" max-width:900px;">
                <mdb-navbar-brand href="#">List of all games</mdb-navbar-brand>
                <mdb-navbar-toggler>
                        <mdb-navbar-nav right>
                    <mdb-form-inline class="ml-auto">
                        <mdb-input v-model="store.search_text" class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </mdb-form-inline>
                        </mdb-navbar-nav>
                </mdb-navbar-toggler>
            </mdb-navbar>

        </div>





        <div class=" mx-auto" style="max-width: 900px;">

            <b-card-group deck style="margin: 0;">

            <game-card v-for="g_card in filter_search" :key="g_card.url" :info="g_card" />

            </b-card-group>
            
            

        </div>



    


        <Footer />



    </div>


</template>


<style scoped>



</style>


<script>
import { mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody } from 'mdbvue';
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import GameCard from '@/components/GameCard'
import store from '@/store'



let g_cards = [];

g_cards = [
    {url: 'https://i.ibb.co/CKFBPBv/Gta5.jpg', game_name: "Grand Theft Auto V", genre: "Action, Adventure, Comedy", rel_date: "17 September 2013", rank: "96/100", route:"/GtaV"},
    {url: 'https://i.ibb.co/rdMnFhR/zelda.jpg', game_name: "The Legend of Zelda: Breath of the Wild", genre: "Action, Adventure, Fantasy", rel_date: "3 March 2017", rank:"97/100",  route:"/Zelda"},

];


  
  export default {
    components: {
      Navbar,
      Footer,
      mdbCard,
      mdbView,
      mdbMask,
      mdbCardImage,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardBody,
      GameCard,
    },

        data() {
            return {
                store,
                g_cards: g_cards,
            };
        },
    
    computed: {
        filter_search() {
            
            let term = this.store.search_text;
            let New_g_card = [];
            
            for(let g_card of this.g_cards){
                if (g_card.game_name.indexOf(term) >= 0) {
                    New_g_card.push(g_card);
                }
            }
            return New_g_card;
        },
    },
    mounted () {
        window.scrollTo(0, 0);

        g_cards = []
        fetch("http://localhost:3000/games")
            .then(r => {
            return r.json()
            })
            .then(data =>{
            console.log("Podaci s backenda", data)

            let data2 = data.map(element =>{
                return{
                    url: element.img_url,
                    game_name: element.name,
                    genre: element.genre,
                    rel_date: element.release_date,
                    rank: element.rate,
                    route: element.route

                }

                
            })

            this.g_cards= data2;

            })


    },


  }




</script>
