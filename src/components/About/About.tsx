import { Pokemon } from "../../interfaces/Pokemon";

type AboutProps = {
  pokemon: Pokemon;
};

export function About({ pokemon }: AboutProps) {
  return (
    <h3>
      <h2>About {pokemon.name}</h2>
    </h3>
  );
}
