import { fromJS } from "immutable";
import { SET_COLOR_POKEMONS, SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
    colors: [],
    loading: false
});

export const pokemonsReducer = (state = initialState, action) => {
    console.log("🚀 ~ file: pokemons.ts:11 ~ pokemonsReducer ~ state:", state)
    
    switch(action.type) {
        case SET_POKEMONS:
            // return { ...state, pokemons: action.payload };
            return state.setIn(['pokemons'], fromJS(action.payload));
        case SET_COLOR_POKEMONS:
            // return { ...state, colorPokemons: action.payload };
            return state.setIn(['colors'], fromJS(action.payload));
        case SET_LOADING:
            // return { ...state, loading: action.payload };
            return state.setIn(['loading'], fromJS(action.payload));
        case SET_FAVORITE:
            // const newPokemonList = [ ...state.pokemons];
            const currentPokemonIndex: any = state.get('pokemons').findKey((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId;
            })

            if(currentPokemonIndex < 0) {
                return state;
            }

            // newPokemonList[currentPokemonIndex].favorite = 
            // !newPokemonList[currentPokemonIndex].favorite;
            
            const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
            // return { ...state, pokemons: newPokemonList };
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite );
    default:
        return state
    }
}