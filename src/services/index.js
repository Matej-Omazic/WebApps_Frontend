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


export {Service, Games}