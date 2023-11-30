import Axios from "axios";

import { Page } from "../types/page";

import {
  EvolutionChain,
  Pokemon,
  PokemonResults,
  PokemonsResponse,
  SpeciesPokemon,
} from "../interfaces/Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

async function getData<T>(uri: string): Promise<T> {
  const response = await Axios.get<T>(uri);

  return response.data;
}

export async function getPokemonResults(): Promise<Page<PokemonResults>> {
  return getData<Promise<Page<PokemonResults>>>(BASE_URL + "/pokemon");
}

export async function getPokemonsList(): Promise<PokemonsResponse> {
  const pokemonList: PokemonsResponse = { data: [], page: null };

  const pokemonsResults = await getPokemonResults();

  pokemonList.page = pokemonsResults;

  pokemonsResults.results.map(async ({ url }) => {
    const data = await getData<Promise<Pokemon>>(url);

    pokemonList.data.push(data);

    pokemonList.data.map(async ({ species }) => {
      const speciesData = await getData<SpeciesPokemon>(species.url);

      species.specie = speciesData;

      const evolutionData = await getData<EvolutionChain>(
        speciesData.evolution_chain.url
      );

      species.specie.evolution_chain.evolution = evolutionData;
    });
  });

  return pokemonList;
}
