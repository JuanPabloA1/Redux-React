export default class PokemonService {

    #domain: string = "";
    #urlApi: string = '';

    constructor() {
        this.#domain = import.meta.env.VITE_API_URL;
        this.#urlApi = import.meta.env.VITE_API_URL_COLOR;
    }

    getPokemons() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.#domain);
                const json = await response.json();
                resolve(json.results);
            } catch (error) {
                reject(error);
            }
        })
    }

    getPokemonsDetails(pokemon: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(pokemon.url);
                const json = await response.json();
                                
                resolve(json);
            } catch (error) {
                reject(error);
            }
        })
    }

    getPokemonsColor() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.#urlApi);
                const json = await response.json();
                
                resolve(json);
            } catch (error) {
                reject(error);
            }
        })
    }

    getPokemonsColorDetails(details: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(details.url);
                const json = await response.json();

                resolve(json.color);
            } catch (error) {
                reject(error);
            }
        })
    }
}