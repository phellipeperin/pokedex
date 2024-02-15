import { PokeAPI } from 'pokeapi-types';

interface ComponentProps {
    pokemon: PokeAPI.NamedAPIResource;
}

function PokemonListItem({ pokemon }: ComponentProps) {


    return (
        <div key={pokemon.name}>{pokemon.name}</div>
    );
}

export default PokemonListItem;