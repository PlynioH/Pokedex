import axios, * as others from 'axios';
import Constants from "../shared/constants"

class Pokemon{
    static async getAll(){
        const pokemons = await axios.get(Constants.api).then(response => {
            if(response.status == 200){
                return response.data
            }
            else {
                return []
            }
        })
        return pokemons
    }

    static async getType(type){
        const pokemons = await axios.get(Constants.api + '/tipo/' + type).then(response => {
            if(response.status == 200){
                return response.data
            }
            else {
                return []
            }
        })
        return pokemons
    }

    static async searchPokemon(text){
        try {
            const pokemon = await axios.get(Constants.api + '/' + text).then(response => {
                if(response.status == 200){
                    if(text != ''){
                        return [response.data]
                    }else{
                        return response.data
                    }
                }else{
                    return []
                }
            })
            return pokemon
        } catch (error) {
            try {
                const pokemon = await axios.get(Constants.api + '/nome/' + text.toLowerCase()).then(response => {
                    if(response.status == 200 && response.data != []){
                        return response.data
                    }else{
                        return []
                    }
                })
                return pokemon
            } catch (error) {
                return []
            }
        }
    }
}

export default Pokemon