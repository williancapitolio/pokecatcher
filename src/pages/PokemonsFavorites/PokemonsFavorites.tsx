import { useNavigate } from "react-router-dom";

import { useFavoritesPagePokemons } from "../../hooks/use-favorites-page-pokemons";

import Logo from "../../assets/img/logo.png";

import * as S from "./PokemonsFavorites.Styled";

export function PokemonsFavorites() {
  const navigate = useNavigate();

  const { pokemonsFavoritesList, loading } = useFavoritesPagePokemons();

  console.log(pokemonsFavoritesList, loading);

  return (
    <S.Content>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />
      <button onClick={() => navigate("/")}>Início</button>
      <h3>Pokemons Favorites</h3>
    </S.Content>
  );
}
