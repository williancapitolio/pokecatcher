import { useHomePokemons } from "../../hooks/use-home-pokemons";
import { useImportImg } from "../../hooks/use-import-img";

import { LoadingAnimation } from "../../components/LoadingAnimation";
import { CardPokemon } from "../../components/CardPokemon";
import { ButtonPaginate } from "../../components/ButtonPaginate";

import * as S from "./Home.Styled";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  const { Logo } = useImportImg();

  return (
    <>
      <S.Logo src={Logo} alt="Logo PokeCatcher" />

      {loading && <LoadingAnimation />}

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
