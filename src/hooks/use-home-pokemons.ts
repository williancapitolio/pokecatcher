import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getPokemons } from "../features/pokemon/pokemon-slice";

export function useHomePokemons() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getPokemons(""));
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  const { pokemons, loading } = useAppSelector((state) => state.pokemon);

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
