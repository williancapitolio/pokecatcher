import { useHomePokemons } from "../../hooks/use-home-pokemons";

import { CardPokemon } from "../../components/CardPokemon";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  return (
    <section>
      <h1>PokeCatcher</h1>

      {loading && <p>Carregando...</p>}

      <div>
        {pokemons && (
          <>
            {pokemons.results.map((pokemon, index) => (
              <CardPokemon key={index} pokemon={pokemon.pokemon} />
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
