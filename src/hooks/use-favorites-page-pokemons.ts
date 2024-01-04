import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getPokemonsFavoritesList } from "../features/pokemon/pokemon-slice";

export function useFavoritesPagePokemons() {
  const { pokemonsFavorites, pokemonsFavoritesList, loading } = useAppSelector(
    (state) => state.pokemon
  );

  const dispatch = useAppDispatch();

  const fetchPokemonsFavorites = useCallback(async () => {
    await dispatch(getPokemonsFavoritesList(pokemonsFavorites));
  }, [dispatch, pokemonsFavorites]);

  useEffect(() => {
    fetchPokemonsFavorites();
  }, [fetchPokemonsFavorites]);

  return { pokemonsFavoritesList, loading };
}
