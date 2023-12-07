import { Link } from "react-router-dom";

import {
  toggleCapture,
  toggleFavorite,
} from "../../features/pokemon/pokemon-slice";

import { useAppDispatch } from "../../hooks/use-app-redux";

import { FindOnLocalStorage } from "../../utils/find-on-local-storage";

import { Pokemon } from "../../interfaces/Pokemon";

type CardPokemonProps = {
  pokemon: Pokemon;
};

export function CardPokemon({ pokemon }: CardPokemonProps) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{pokemon.id}</span>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={"Imagem de " + pokemon.name}
      />

      <Link to={"/pokemon/" + pokemon.id}>
        <p>{pokemon.name}</p>
      </Link>

      <button onClick={() => dispatch(toggleFavorite(pokemon.id))}>
        {FindOnLocalStorage("pokemons-favorites", pokemon.id)
          ? "Desfavoritar"
          : "Favoritar"}
      </button>
      
      <button onClick={() => dispatch(toggleCapture(pokemon.id))}>
        {FindOnLocalStorage("pokemons-captured", pokemon.id)
          ? "Libertar"
          : "Capturar"}
      </button>
    </div>
  );
}
