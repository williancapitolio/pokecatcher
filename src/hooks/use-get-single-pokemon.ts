import { useCallback, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./use-app-redux";

import { getSinglePokemon } from "../features/pokemon/pokemon-slice";

export function useGetSinglePokemon() {
  const { id } = useParams();

  const { singlePokemon } = useAppSelector((state) => state.pokemon);

  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);

  function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  const singlePokemonData = useCallback(async () => {
    await dispatch(getSinglePokemon(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    singlePokemonData();
  }, [singlePokemonData]);

  return { Link, singlePokemon, currentPage, handleChangePage };
}
