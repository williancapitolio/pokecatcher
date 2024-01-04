import { useNavigate } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

import * as S from "./PokemonsFavorites.Styled";

export function PokemonsFavorites() {
  const navigate = useNavigate();

  return (
    <S.Content>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />
      <button onClick={() => navigate("/")}>Início</button>
      <h3>Pokemons Favorites</h3>
    </S.Content>
  );
}
