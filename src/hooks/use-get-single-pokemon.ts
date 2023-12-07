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

  /*   const handlePaginatePokemon = (
    ev: React.MouseEvent<HTMLButtonElement>
  ) => {
    const button = ev.target as HTMLButtonElement;

    const initialButtonValue = button.innerText;

    button.innerText = "Carregando...";

    dispatch(
      getSinglePokemon(
        ParseNumberToString(
          idPokemon + (initialButtonValue === "Próximo" ? 1 : -1)
        )
      )
    ).finally(() => {
      scrollTo({ top: 0, behavior: "smooth" });
      button.innerText = initialButtonValue;
    });
    console.log(ev);

    
    scrollTo({ top: 0, behavior: "smooth" });
    button.innerText = initialButtonValue;
  }; */

  return { Link, singlePokemon, POKEMONS_COUNT };
}
