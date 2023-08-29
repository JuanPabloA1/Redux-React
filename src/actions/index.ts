import PokemonService from "../services/Pokemon";
import { 
    SET_POKEMONS,
    SET_COLOR_POKEMONS,
    SET_LOADING,
    SET_FAVORITE
} from "./types"

const service = new PokemonService();

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});

export const setColorPokemons = (payload) => ({
    type: SET_COLOR_POKEMONS,
    payload
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});

export const getPokemonsWithDetails: any = 
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonsDetailed = await Promise.all(
            pokemons.map((pokemon) => service.getPokemonsDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
    }