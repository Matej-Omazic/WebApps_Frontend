import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000
})

let Games = {
    add(game){
        return Service.game('/games',game)
    },

    async getOne(id){
        let response = await Service.get(`/games/${id}`)
        let element = response.data
        return{
            id: element._id,
            url: element.img_url,
            game_name: element.name,
            genre: element.genre,
            rel_date: element.release_date,
            rank: element.rate,
            route: element.route
          };
    },

    async getAll(search_text){
        let options = {};

        if (search_text) {
            options.params = {
                name2: search_text
            };
        }
        let response = await Service.get('/games',options)
        return response.data.map(element => {
            return{
                    id: element._id,
                    url: element.img_url,
                    game_name: element.name,
                    genre: element.genre,
                    rel_date: element.release_date,
                    rank: element.rate,
                    route: element.route
                  };

        });

    }
};
let Komentari = {
    async getAll(komentar){
        let response = await Service.get(`/GtaV?${komentar}`)
        let data = response.data
        data = data.map(doc=>{
            return { 
            comment: doc.comment,
            game_id: doc.game_id,
            author: doc.author
            }
        })
        return data;
    }
}

export {Service, Games, Komentari}