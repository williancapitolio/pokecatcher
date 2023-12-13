import { Pokemon } from "../../interfaces/Pokemon";

type StatsProps = {
  pokemon: Pokemon;
};

export function Stats({ pokemon }: StatsProps) {
  return (
    <h3>
      <h2>Stats {pokemon.name}</h2>
    </h3>
  );
}

//The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature (10% increase (10% decrease), 0 EVs, 0 IVs.
