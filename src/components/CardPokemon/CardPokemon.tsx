import { Link } from "react-router-dom";

import {
  toggleCapture,
  toggleFavorite,
} from "../../features/pokemon/pokemon-slice";

import { useAppDispatch } from "../../hooks/use-app-redux";

import { FindOnLocalStorage } from "../../utils/find-on-local-storage";
import { upperCaseFirsLetter } from "../../utils/upper-case-first-letter";

import { Pokemon } from "../../interfaces/Pokemon";

import * as S from "./CardPokemon.Styled";

type CardPokemonProps = {
  pokemon: Pokemon;
};

export function CardPokemon({ pokemon }: CardPokemonProps) {
  const dispatch = useAppDispatch();

  const getFirstType = (): string => {
    const result = pokemon.types.map((type) => type.type.name);
    return result[0];
  };

  return (
    <S.Card $pokeType={getFirstType()}>
      <S.Id>#{pokemon.id}</S.Id>

      <S.Img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={"Imagem de " + pokemon.name}
      />

      <Link to={"/pokemon/" + pokemon.id}>
        {/* <S.Name>{pokemon.name}</S.Name> */}
        <S.Name>{upperCaseFirsLetter(pokemon.name)}</S.Name>
      </Link>

      <S.Types>
        {pokemon.types.map((type) => (
          <S.Type>{upperCaseFirsLetter(type.type.name)}</S.Type>
        ))}
      </S.Types>

      <S.Actions>
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
      </S.Actions>
    </S.Card>
  );
}
