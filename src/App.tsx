import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/use-app-redux";

import { getPokemons } from "./features/pokemon/pokemon-slice";

export function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  const { pokemons } = useAppSelector((state) => state.pokemon);
  console.log(pokemons);

  return (
    <>
      <h2>Teste</h2>
    </>
  );
}
