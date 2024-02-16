import { PokeAPI } from 'pokeapi-types';
import { POKEMON_ENTRIES_STORAGE_KEY } from '../constants/storage-constants';
import { PokemonEntriesStorage } from '../model/storage-model';
import { getPokemonByName as getPokemonByNameAPI } from './api-service';
import { loadFromSessionStorage, saveToSessionStorage } from './storage-service';

export const getPokemonByName = async (name: string): Promise<PokeAPI.Pokemon> => {
    const cachedPokemonList: PokemonEntriesStorage = loadFromSessionStorage(POKEMON_ENTRIES_STORAGE_KEY, { entries: [] }) as PokemonEntriesStorage;
    const cachedItem = cachedPokemonList.entries.find(pokemon => pokemon.name === name);
    if (cachedItem) {
        return cachedItem;
    }

    const pokemonFromApi = await getPokemonByNameAPI(name);
    cachedPokemonList.entries.push(pokemonFromApi);
    saveToSessionStorage(POKEMON_ENTRIES_STORAGE_KEY, cachedPokemonList);

    return pokemonFromApi;
};
