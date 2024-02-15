import { useState, useEffect } from 'react';
import { PokeAPI } from 'pokeapi-types';

import { getPokemonList } from '../services/api-service';

import PokemonListItem from '../components/PokemonListItem';

function PokemonListRoute() {
  const [pokemonList, setPokemonList] = useState<Array<PokeAPI.NamedAPIResource>>([]);

  const loadPokemonList = async (): Promise<void> => {
    setPokemonList((await getPokemonList()).results);
  };

  useEffect(() => {
    loadPokemonList();
  }, []);
  
  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonListItem
            key={pokemon.name}
            pokemon={pokemon}
          />
        );
      })}
    </div>
  );
}

export default PokemonListRoute;
