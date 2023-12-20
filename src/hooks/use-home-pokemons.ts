import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getPokemons } from "../features/pokemon/pokemon-slice";

export function useHomePokemons() {
  const { pokemons, loading } = useAppSelector((state) => state.pokemon);
  console.log(pokemons.results)

  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getPokemons(""));
  }, [dispatch]);

  useEffect(() => {
    !pokemons.results.length && initApp();
  }, [initApp, pokemons.results.length]);

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

  return { pokemons, loading, handlePaginatePokemons };
}
