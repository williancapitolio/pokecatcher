import { BsSearch } from "react-icons/bs";

import * as S from "./InpuSearchPokemon.Styled";

type InpuSearchPokemonProps = {
  inputValue: string;
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
};

export function InpuSearchPokemon({
  inputValue,
  handleChange,
  handleBlur,
}: InpuSearchPokemonProps) {
  return (
    <>
      <S.Label htmlFor="inpuSearchPokemon">
        Search for Pokémon by name or using the National Pokédex number.
      </S.Label>
      <S.InpuSearch>
        <S.Input
          type="text"
          name="inpuSearchPokemon"
          id="inpuSearchPokemon"
          placeholder="What are you looking for?"
          autoComplete="off"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BsSearch />
      </S.InpuSearch>
    </>
  );
}
