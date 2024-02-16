import { PokeAPI } from 'pokeapi-types';

export interface PokemonEntriesStorage {
    entries: Array<PokeAPI.Pokemon>;
}