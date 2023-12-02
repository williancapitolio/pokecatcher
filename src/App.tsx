import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/use-app-redux";

import {
  getPokemons,
  toggleCapture,
  toggleFavorite,
} from "./features/pokemon/pokemon-slice";

export function App() {
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

    button.innerText = "Carregando...";

    await dispatch(getPokemons(url)).finally(() => {
      scrollTo({ top: 0, behavior: "smooth" });
      button.innerText = initialButtonValue;
    });
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
                <span>{pokemon.pokemon.id}</span>

                <img
                  src={
                    pokemon.pokemon.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt={"Imagem de " + pokemon.pokemon.name}
                />
                <p>{pokemon.pokemon.name}</p>
                <button
                  onClick={() => dispatch(toggleFavorite(pokemon.pokemon.id))}
                >
                  {pokemon.pokemon.favorite ? "Desfavoritar" : "Favoritar"}
                </button>
                <button
                  onClick={() => dispatch(toggleCapture(pokemon.pokemon.id))}
                >
                  {pokemon.pokemon.caught ? "Libertar" : "Capturar"}
                </button>
              </div>
            ))}
            <button
              disabled={pokemons.previous ? false : true}
              onClick={(ev) =>
                handlePaginatePokemons(pokemons.previous as string, ev)
              }
            >
              Anterior
            </button>
            <button
              disabled={pokemons.next ? false : true}
              onClick={(ev) =>
                handlePaginatePokemons(pokemons.next as string, ev)
              }
            >
              Próximo
            </button>
          </>
        )}
      </div>
    </section>
  );
}
