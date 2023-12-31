import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getPokemons } from "../features/pokemon/pokemon-slice";

import * as Util from "../utils";

export function useHomePokemons() {
  const { pokemons, loading } = useAppSelector((state) => state.pokemon);

  const dispatch = useAppDispatch();

  const fetchPokemons = useCallback(async () => {
    await dispatch(getPokemons(""));
  }, [dispatch]);

  useEffect(() => {
    !pokemons.results.length && fetchPokemons();
  }, [fetchPokemons, pokemons.results.length]);

  async function handlePaginatePokemons(
    url: string,
    ev: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    const button = ev.target as HTMLButtonElement;

    const initialButtonValue = button.innerText;

    button.innerText = "-";

    await dispatch(getPokemons(url)).finally(() => {
      scrollTo({ top: 0, behavior: "smooth" });
      button.innerText = initialButtonValue;
    });
  }

  Util.ScrollYPosition();

  return { pokemons, loading, handlePaginatePokemons };
}
