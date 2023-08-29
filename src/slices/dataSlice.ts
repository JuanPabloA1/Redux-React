import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import PokemonService from '../services/Pokemon';

const service = new PokemonService();

const initialState = {
    pokemons: [],
    colors: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonsRes: any = await service.getPokemons();
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((pokemon) => service.getPokemonsDetails(pokemon))
        );

        // const pokemonsColor: any = await service.getPokemonsColor();
        // const pokemonsColorDetails = await Promise.all(pokemonsColor.results.map((colorPokemon: any) => {
        //     // console.log(service.getPokemonsColorDetails(colorPokemon.url));
        //     return service.getPokemonsColorDetails(colorPokemon);
        // }));

        dispatch(setPokemons(pokemonsDetailed));
        // dispatch(setColorPokemons(pokemonsColorDetails));
        dispatch(setLoading(false));
      }
)

export const fetchPokemonsColorDetails = createAsyncThunk(
    'data/fetchPokemonsColorDetails',
    async (_, { dispatch }) => {
        const pokemonsColor: any = await service.getPokemonsColor();
        const pokemonsColorDetails = await Promise.all(pokemonsColor.results.map((colorPokemon: any) => {
            return service.getPokemonsColorDetails(colorPokemon);
        }));
        dispatch(setColorPokemons(pokemonsColorDetails));
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setColorPokemons: (state, action) => {
            state.colors = action.payload;            
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex: any = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            })

            if(currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].
                favorite;

                state.pokemons[currentPokemonIndex].favorite = 
                !isFavorite;
            }
            
            // newPokemonList[currentPokemonIndex].favorite = 
            // !newPokemonList[currentPokemonIndex].favorite;
            
            // return { ...state, pokemons: newPokemonList };
            // const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
            // return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite );
        }
    },
})

export const { setFavorite, setPokemons, setColorPokemons } = dataSlice.actions;

export default dataSlice.reducer;