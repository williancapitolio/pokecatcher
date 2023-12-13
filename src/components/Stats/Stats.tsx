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
