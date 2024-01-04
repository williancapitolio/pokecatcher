import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getPokemonsFavoritesList } from "../features/pokemon/pokemon-slice";

export function useFavoritesPagePokemons() {
  const { pokemonsFavorites, pokemonsFavoritesList, loading } = useAppSelector(
    (state) => state.pokemon
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchPokemonsFavorites() {
      await dispatch(getPokemonsFavoritesList(pokemonsFavorites));
    }
    fetchPokemonsFavorites();
  }, [dispatch, pokemonsFavorites]);

  return { pokemonsFavoritesList, loading };
}
