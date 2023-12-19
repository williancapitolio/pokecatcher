import { useEffect, useState } from "react";

import { BASE_URL, getData } from "../services/Api";

import { Pokemon } from "../interfaces/Pokemon";

export function usePokemonEvolutionChart(from: string, to: string) {
  const [pokemonFromData, setPokemonFromData] = useState<Pokemon | null>(null);
  const [pokemonToData, setPokemonToData] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function getPokemonEvolutionChartData(
      pokemonNameEndpoint: string,
      setData: React.Dispatch<React.SetStateAction<Pokemon | null>>
    ) {
      const res = await getData<Pokemon>(BASE_URL + pokemonNameEndpoint);

      setData(res);
    }

    getPokemonEvolutionChartData(from, setPokemonFromData);

    getPokemonEvolutionChartData(to, setPokemonToData);
  }, [from, to]);

  return { pokemonFromData, pokemonToData };

  //Cases:

  //1. Does not evolve. ex: Kangaskhan , Heracross

  //2. Have more than one second form. ex: Eevee, Wurmple

  //3. Have more than one second and third form. ex: Silcoon and Cascoon (most peculiar)

  //4. Have just one second form. ex: Bulbasaur, Growlithe

  //5. Have more than one third form. ex: Gloom, Poliwhirl

  //6. Have just one third form. ex: Ivysaur, Machoke
}
