import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/use-app-redux";

import {
  paginatePokemons,
  getPokemons,
} from "./features/pokemon/pokemon-slice";

export function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  const { pokemons, loading } = useAppSelector((state) => state.pokemon);

  async function handlePaginatePokemons(
    ev: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    ev.preventDefault();
    if (ev.currentTarget.innerText === "Anterior") {
      await dispatch(paginatePokemons(pokemons.previous as string));
    } else if (ev.currentTarget.innerText === "Próximo") {
      await dispatch(paginatePokemons(pokemons.next as string));
    }
  }

  return (
    <section>
      <h1>PokeCatcher</h1>

      {loading && <p>Carregando...</p>}

      <div>
        {pokemons && (
          <>
            {pokemons.results.map((pokemon, index) => (
              <div key={index}>
                <p>{pokemon.name}</p>
                <span>{pokemon.url}</span>
              </div>
            ))}
            <button
              disabled={pokemons.previous ? false : true}
              onClick={handlePaginatePokemons}
            >
              Anterior
            </button>
            <button
              disabled={pokemons.next ? false : true}
              onClick={handlePaginatePokemons}
            >
              Próximo
            </button>
          </>
        )}
      </div>
    </section>
  );
}
