import ky from 'ky';
import { PokeAPI } from 'pokeapi-types';

const POKE_API_URL = 'https://pokeapi.co/api/v2';

export const getPokemonByNumber = async (number: number): Promise<PokeAPI.Pokemon> => {
    return await ky.get(`${POKE_API_URL}/pokemon/${number}`).json();
};

export const getPokemonList = async (): Promise<PokeAPI.NamedAPIResourceList> => {
    return await ky.get(`${POKE_API_URL}/pokemon?limit=20&offset=0`).json();
};