import { useHomePokemons } from "../../hooks/use-home-pokemons";

import { CardPokemon } from "../../components/CardPokemon";
import { ImportImg } from "../../utils/import-img";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  const { Logo } = ImportImg();

  return (
    <section>
      <img src={Logo} alt="Logo PokeCatcher" />
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
