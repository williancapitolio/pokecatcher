import { Link } from "react-router-dom";

import {
  toggleCapture,
  toggleFavorite,
} from "../../features/pokemon/pokemon-slice";

import { useAppDispatch } from "../../hooks/use-app-redux";
import { useImportImg } from "../../hooks/use-import-img";

import * as Util from "../../utils";

import { IconType } from "../IconType";
import { ButtonActionImg } from "../ButtonActionImg";

import * as S from "./CardPokemon.Styled";

import { Pokemon } from "../../interfaces/Pokemon";
import { TextIdPokemon } from "../TextIdPokemon";

type CardPokemonProps = {
  pokemon: Pokemon;
};

export function CardPokemon({ pokemon }: CardPokemonProps) {
  const dispatch = useAppDispatch();

  const { Pokeball, PokeballOpen, HeartEmpty, HeartFill } = useImportImg();

  return (
    <S.Card
      $pokeType={Util.GetColorByType(
        pokemon.types.map((type) => type.type.name)[0]
      )}
    >
      <TextIdPokemon idPokemon={pokemon.id} />

      <S.Img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={"Imagem de " + pokemon.name}
      />

      <Link to={"/pokemon/" + pokemon.id}>
        <S.Name>{Util.UpperCaseFirsLetter(pokemon.name)}</S.Name>
      </Link>

      <S.Types>
        {pokemon.types.map((type, index) => (
          <IconType
            color={Util.GetBgColorByType(type.type.name)}
            key={index}
            icon={Util.GetSvgType(type.type.name)}
            type={Util.UpperCaseFirsLetter(type.type.name)}
          />
        ))}
      </S.Types>

      <S.Actions>
        <ButtonActionImg
          handleClick={() => dispatch(toggleFavorite(pokemon.id))}
          color={(props) => props.theme.colors.logo.inside}
          imgSrc={
            Util.FindOnLocalStorage("pokemons-favorites", pokemon.id)
              ? HeartFill
              : HeartEmpty
          }
          imgAlt={
            Util.FindOnLocalStorage("pokemons-favorites", pokemon.id)
              ? "Desfavoritar"
              : "Favoritar"
          }
        />

        <ButtonActionImg
          handleClick={() => dispatch(toggleCapture(pokemon.id))}
          color={(props) => props.theme.colors.background.defaultBtn}
          imgSrc={
            Util.FindOnLocalStorage("pokemons-captured", pokemon.id)
              ? PokeballOpen
              : Pokeball
          }
          imgAlt={
            Util.FindOnLocalStorage("pokemons-captured", pokemon.id)
              ? "Libertar"
              : "Capturar"
          }
        />
      </S.Actions>
    </S.Card>
  );
}
