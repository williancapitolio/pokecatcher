import { useGetSinglePokemon } from "./use-get-single-pokemon";

export function usePokemonEvolutionChart() {
  const { singlePokemon } = useGetSinglePokemon();

  const evolutionDetails =
    singlePokemon?.species.specie?.evolution_chain.evolution?.chain;

  //Cases:

  //1. Does not evolve. ex: Kangaskhan , Heracross
  const pokemonDoNotEnvolve = !evolutionDetails?.evolves_to.length;

  //2. Have more than one second form. ex: Eevee, Wurmple
  const pokemonHaveMoreThanOneSecondForm =
    (evolutionDetails?.evolves_to.length as number) > 1;

  //3. Have more than one second and third form. ex: Silcoon and Cascoon (most peculiar)

  //4. Have just one second form. ex: Bulbasaur, Growlithe

  //5. Have more than one third form. ex: Gloom, Poliwhirl

  //6. Have just one third form. ex: Ivysaur, Machoke

  return {
    evolutionDetails,
    pokemonDoNotEnvolve,
    pokemonHaveMoreThanOneSecondForm,
  };
}
