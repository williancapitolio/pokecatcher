import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import { Pokemon } from "../../interfaces/Pokemon";

export function Evolution() {
  const { singlePokemon } = useGetSinglePokemon();

  const pokemon = singlePokemon as Pokemon;

  return (
    <div>
      <h3>Evolution {pokemon.name}</h3>
    </div>
  );
}
