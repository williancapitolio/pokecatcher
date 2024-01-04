import { useNavigate } from "react-router-dom";

import { useFavoritesPagePokemons } from "../../hooks/use-favorites-page-pokemons";

import { ButtonActionImg } from "../../components/ButtonActionImg";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { CardPokemon } from "../../components/CardPokemon";

import Logo from "../../assets/img/logo.png";
import BackArrow from "../../assets/img/back-arrow.png";

import * as S from "./PokemonsFavorites.Styled";

export function PokemonsFavorites() {
  const navigate = useNavigate();

  const { pokemonsFavoritesList, loading } = useFavoritesPagePokemons();

  return (
    <S.Content>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />
      <S.FavoritesButton>
        <ButtonActionImg
          handleClick={() => navigate("/")}
          color={(props) => props.theme.colors.logo.outside}
          sizeBtn={"2.5rem"}
          sizeLogo={"2rem"}
          imgSrc={BackArrow}
          imgAlt="Favorites Icon"
        />
      </S.FavoritesButton>
      <S.Title>Pokemons Favorites</S.Title>
      {loading && <LoadingAnimation />}
      {pokemonsFavoritesList.length > 0 ? (
        <>
          <S.CardsLayout>
            {pokemonsFavoritesList.map((pokemon, index) => (
              <CardPokemon key={index} pokemon={pokemon} />
            ))}
          </S.CardsLayout>
        </>
      ) : (
        <>Nenhum pokemon favorito</>
      )}
    </S.Content>
  );
}
