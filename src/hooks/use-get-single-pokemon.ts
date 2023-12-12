import { useCallback, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getSinglePokemon } from "../features/pokemon/pokemon-slice";

export function useGetSinglePokemon() {
  const { id } = useParams();

  const { singlePokemon } = useAppSelector((state) => state.pokemon);

  const dispatch = useAppDispatch();

  if (!id) throw new Error("");

  const singlePokemonData = useCallback(async () => {
    await dispatch(getSinglePokemon(id));
  }, [dispatch, id]);

  useEffect(() => {
    singlePokemonData();
  }, [singlePokemonData]);

  const POKEMONS_COUNT = 1017;

  return { Link, singlePokemon, POKEMONS_COUNT };
}
