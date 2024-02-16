import ky from 'ky';
import { PokeAPI } from 'pokeapi-types';
import { POKE_API_URL } from '../constants/api-constants';

export const getPokemonByNumber = async (number: number): Promise<PokeAPI.Pokemon> => {
    return await ky.get(`${POKE_API_URL}/pokemon/${number}`).json();
};

export const getPokemonByName = async (name: string): Promise<PokeAPI.Pokemon> => {
    return await ky.get(`${POKE_API_URL}/pokemon/${name}`).json();
};

export const getPokemonList = async (limit: number = 10, offset: number = 0): Promise<PokeAPI.NamedAPIResourceList> => {
    return await ky.get(`${POKE_API_URL}/pokemon?limit=${limit}&offset=${offset}`).json();
};