import { Link } from "react-router-dom";

import {
  toggleCapture,
  toggleFavorite,
} from "../../features/pokemon/pokemon-slice";

import { useAppDispatch } from "../../hooks/use-app-redux";

import { FindOnLocalStorage } from "../../utils/find-on-local-storage";
import { upperCaseFirsLetter } from "../../utils/upper-case-first-letter";
import { getColorByType } from "../../utils/get-color-by-type";
import { getSvgType } from "../../utils/get-svg-by-type";
import { getBgColorByType } from "../../utils/get-bg-color-by-type";

import { IconType } from "../IconType";

import { Pokemon } from "../../interfaces/Pokemon";

import * as S from "./CardPokemon.Styled";

type CardPokemonProps = {
  pokemon: Pokemon;
};

export function CardPokemon({ pokemon }: CardPokemonProps) {
  const dispatch = useAppDispatch();

  return (
    <S.Card
      $pokeType={getColorByType(pokemon.types.map((type) => type.type.name)[0])}
    >
      <S.Id>#{pokemon.id.toString().padStart(3, "0")}</S.Id>

      <S.Img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={"Imagem de " + pokemon.name}
      />

      <Link to={"/pokemon/" + pokemon.id}>
        <S.Name>{upperCaseFirsLetter(pokemon.name)}</S.Name>
      </Link>

      <S.Types>
        {pokemon.types.map((type, index) => (
          <IconType
            color={getBgColorByType(type.type.name)}
            key={index}
            icon={getSvgType(type.type.name)}
            type={upperCaseFirsLetter(type.type.name)}
          />
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
