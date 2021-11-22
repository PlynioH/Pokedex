import axios, * as others from 'axios';
import Constants from "../shared/constants"

class Pokemon{
    static async postPokemon(pokemon){
        const pokemons = await axios.post(Constants.api,pokemon).then(response => {
            return response.status
        })
        return pokemons
    }
}

export default Pokemon