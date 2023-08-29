// import { IPokemon } from "../interface/IPokemon";
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons, color }: any) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon: any, key: number) => {
        return (
          <PokemonCard 
            name={pokemon.name} 
            key={key}
            image={pokemon?.sprites?.front_default}
            color={color[key]?.name}
            types={pokemon?.types}
            id={pokemon?.id}
          />
        )
      })}
      
    </div>
  )
}

export default PokemonList;