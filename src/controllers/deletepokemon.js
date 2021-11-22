import axios, * as others from 'axios';
import Constants from "../shared/constants"

class Pokemon{
    static async deltePokemon(id){
        const pokemons = await axios.delete(Constants.api + '/' + id).then(response => {
            return response.status
        })
        return pokemons
    }
}

export default Pokemon