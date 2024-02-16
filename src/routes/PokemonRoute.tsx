import { useLoaderData } from 'react-router-dom';
import { PokeAPI } from 'pokeapi-types';

import { getPokemonByName } from '../services/pokemon-service';

export async function routeLoader({ params }: any): Promise<PokeAPI.Pokemon> {
  return await getPokemonByName(params?.name);
}

function PokemonRoute() {
  const pokemon: PokeAPI.Pokemon = useLoaderData() as PokeAPI.Pokemon;
  
  return (
    <div>
      Pokemon name: {pokemon?.name}
    </div>
  );
}

export default PokemonRoute;
