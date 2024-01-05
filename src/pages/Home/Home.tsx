import { useNavigate } from "react-router-dom";

import { useHomePokemons } from "../../hooks/use-home-pokemons";
import { useSearchPokemon } from "../../hooks/use-search-pokemon";

import { LoadingAnimation } from "../../components/LoadingAnimation";
import { InpuSearchPokemon } from "../../components/InpuSearchPokemon";
import { CardPokemon } from "../../components/CardPokemon";
import { ButtonPaginate } from "../../components/ButtonPaginate";
import { ButtonActionImg } from "../../components/ButtonActionImg";

import Logo from "../../assets/img/logo.png";
import HeartFill from "../../assets/img/heart-fill.png";

import * as S from "./Home.Styled";

export function Home() {
  const { pokemons, loading, handlePaginatePokemons } = useHomePokemons();

  const {
    searchText,
    handleChangeInputPokemon,
    handleSearchPokemon,
    searchResult,
    deleteSearchResult,
  } = useSearchPokemon();

  const navigate = useNavigate();

  return (
    <>
      <S.Content>
        <S.Logo src={Logo} alt="Logo PokeCatcher" />
        {loading && <LoadingAnimation />}
        {pokemons && (
          <>
            <InpuSearchPokemon
              inputValue={searchText}
              handleChange={handleChangeInputPokemon}
              handleEnter={handleSearchPokemon}
            />
            <S.FavoritesButton>
              <ButtonActionImg
                handleClick={() => navigate("/favorites")}
                color={(props) => props.theme.colors.background.defaultBtn}
                sizeBtn={"2.5rem"}
                sizeLogo={"2rem"}
                imgSrc={HeartFill}
                imgAlt="Favorites Icon"
              />
            </S.FavoritesButton>

            <S.CardsLayout>
              {!searchResult &&
                pokemons.results.map((pokemon, index) => (
                  <CardPokemon key={index} pokemon={pokemon.pokemon} />
                ))}

              {searchResult && (
                <>
                  <CardPokemon pokemon={searchResult} />

                  <S.ButtonClearSearchResult onClick={deleteSearchResult}>
                    Clear Search
                  </S.ButtonClearSearchResult>
                </>
              )}
            </S.CardsLayout>

            {!searchResult && (
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
            )}
          </>
        )}
      </S.Content>
    </>
  );
}
