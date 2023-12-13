import { Pokemon } from "../../interfaces/Pokemon";

type EvolutionProps = {
  pokemon: Pokemon;
};

export function Evolution({ pokemon }: EvolutionProps) {
  return (
    <div>
      <h3>Evolution {pokemon.name}</h3>
    </div>
  );
}
