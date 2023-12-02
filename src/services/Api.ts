import Axios from "axios";
import { Pokemon, PokemonResults } from "../interfaces/Pokemon";
import { Page } from "../types/page";

export const BASE_URL = "https://pokeapi.co/api/v2";

export async function getData<T>(uri: string): Promise<T> {
  const response = await Axios.get<T>(uri);

  return response.data;
}

export async function getPokemonsData(
  uri: string
): Promise<Page<PokemonResults>> {
  const response = await getData<Page<PokemonResults>>(uri);

  for (let index = 0; index < response.results.length; index++) {
    const current = response.results[index];

    const responsePokemon = (await getData(current.url)) as Pokemon;

    responsePokemon.favorite
      ? (responsePokemon.favorite = true)
      : (responsePokemon.favorite = false);

    responsePokemon.caught
      ? (responsePokemon.caught = true)
      : (responsePokemon.caught = false);

    current.pokemon = responsePokemon;
  }

  return response;
}
