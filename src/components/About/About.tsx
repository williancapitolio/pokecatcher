import { Pokemon } from "../../interfaces/Pokemon";

type AboutProps = {
  pokemon: Pokemon;
};

export function About({ pokemon }: AboutProps) {
  return (
    <div>
      <h3>About {pokemon.name}</h3>
    </div>
  );
}
