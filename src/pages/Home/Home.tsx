import { ImportImg } from "../../utils/import-img";

import { useHomePokemons } from "../../hooks/use-home-pokemons";

import { CardPokemon } from "../../components/CardPokemon";

import * as S from "./Home.Styled";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  const { Logo } = ImportImg();

  return (
    <section>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />

      {loading && <p>Carregando...</p>}

      <S.Content>
        {pokemons && (
          <>
            {pokemons.results.map((pokemon, index) => (
              <CardPokemon key={index} pokemon={pokemon.pokemon} />
            ))}

            <S.Pagination>
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
            </S.Pagination>
          </>
        )}
      </S.Content>
    </section>
  );
}
