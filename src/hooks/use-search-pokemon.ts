import { useState } from "react";

import { BASE_URL, getData } from "../services/Api";

import { Pokemon } from "../interfaces/Pokemon";

export function useSearchPokemon() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<Pokemon | null>(null);

  function handleChangeInputPokemon(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(ev.target.value);
  }

  async function handleSearchPokemon() {
    try {
      if (searchText) {
        const res = await getData<Pokemon>(BASE_URL + searchText.toLowerCase());
        setSearchResult(res);
      } else {
        setSearchResult(null);
      }
    } catch (error) {
      setSearchResult(null);
    } finally {
      setSearchText("");
    }
  }

  return {
    searchText,
    handleChangeInputPokemon,
    handleSearchPokemon,
    searchResult,
  };
}
