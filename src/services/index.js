import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

let Games = {
    async getAll(search_text){
        let response = await Service.get(`/games?name=${search_text}`)
        let data = response.data
        data = data.map(element =>{
            return{
                    url: element.img_url,
                    game_name: element.name,
                    genre: element.genre,
                    rel_date: element.release_date,
                    rank: element.rate,
                    route: element.route
                    }

        })

        return data;
    }
} 


export {Service, Games}