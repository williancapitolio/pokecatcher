import { BsSearch } from "react-icons/bs";

import * as S from "./InpuSearchPokemon.Styled";

export function InpuSearchPokemon() {
  return (
    <>
      <S.Label htmlFor="inpuSearchPokemon">Search for Pokémon by name or using the National Pokédex number.</S.Label>
      <S.InpuSearch>
        <S.Input
          type="text"
          name="inpuSearchPokemon"
          id="inpuSearchPokemon"
          placeholder="Enter Pokémon's Name or ID"
          autoComplete="off"
        />
        <BsSearch />
      </S.InpuSearch>
    </>
  );
}

