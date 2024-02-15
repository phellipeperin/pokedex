import { useLoaderData } from 'react-router-dom';
import { PokeAPI } from 'pokeapi-types';

import { getPokemonByNumber } from '../services/api-service';

export async function routeLoader({ params }: any): Promise<PokeAPI.Pokemon> {
  return await getPokemonByNumber(params?.id);
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
