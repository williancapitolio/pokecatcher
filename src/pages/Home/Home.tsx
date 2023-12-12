import { ImportImg } from "../../utils/import-img";

import { useHomePokemons } from "../../hooks/use-home-pokemons";

import { CardPokemon } from "../../components/CardPokemon";

import * as S from "./Home.Styled";
import { ButtonPaginate } from "../../components/ButtonPaginate";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  const { Logo } = ImportImg();

  return (
    <>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />

      {loading && <p>Carregando...</p>}

      <S.Content>
        {pokemons && (
          <>
            <S.CardsLayout>
              {pokemons.results.map((pokemon, index) => (
                <CardPokemon key={index} pokemon={pokemon.pokemon} />
              ))}
            </S.CardsLayout>

            <S.Pagination>
              <ButtonPaginate
                isDisabled={pokemons.previous ? false : true}
                handleClick={(ev) =>
                  handlePaginatePokemons(pokemons.previous as string, ev)
                }
                text={"<"}
              />

              <ButtonPaginate
                isDisabled={pokemons.next ? false : true}
                handleClick={(ev) =>
                  handlePaginatePokemons(pokemons.next as string, ev)
                }
                text={">"}
              />
            </S.Pagination>
          </>
        )}
      </S.Content>
    </>
  );
}
