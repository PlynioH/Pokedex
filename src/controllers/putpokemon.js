import axios, * as others from 'axios';
import Constants from "../shared/constants"

class Pokemon{
    static async putPokemon(pokemon){
        const pokemons = await axios.put(Constants.api,pokemon).then(response => {
            return response.status
        })
        return pokemons
    }
}

export default Pokemon