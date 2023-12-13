import { Pokemon } from "../../interfaces/Pokemon";

type EvolutionProps = {
  pokemon: Pokemon;
};

export function Evolution({ pokemon }: EvolutionProps) {
  return (
    <h3>
      <h2>Evolution {pokemon.name}</h2>
    </h3>
  );
}
