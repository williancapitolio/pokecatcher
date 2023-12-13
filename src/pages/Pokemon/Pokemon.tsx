import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import { IconType } from "../../components/IconType";
import { TextIdPokemon } from "../../components/TextIdPokemon";
import { About } from "../../components/About";
import { Stats } from "../../components/Stats";
import { Evolution } from "../../components/Evolution";

import { BsArrowLeft } from "react-icons/bs";

import * as Util from "../../utils";

import * as S from "./Pokemon.Styled";

export function Pokemon() {
  const { Link, singlePokemon, currentPage, handleChangePage } =
    useGetSinglePokemon();

  return (
    <>
      {singlePokemon && (
        <S.PokemonPage
          $pokeType={Util.GetColorByType(
            singlePokemon.types.map(({ type }) => type.name)[0]
          )}
        >
          <Link to={"/"}>
            <BsArrowLeft className={"arrowBack"} />
          </Link>

          <S.MainContent>
            <S.PokemonImg
              src={
                singlePokemon.sprites.other["official-artwork"].front_default
              }
              alt={"Imagem de " + singlePokemon.name}
            />

            <S.PokemonData>
              <TextIdPokemon idPokemon={singlePokemon.id} />

              <S.PokemonName>
                {Util.UpperCaseFirsLetter(singlePokemon.name)}
              </S.PokemonName>

              <S.PokemonTypes>
                {singlePokemon.types.map(({ type }, index) => (
                  <IconType
                    key={index}
                    color={Util.GetBgColorByType(type.name)}
                    icon={Util.GetSvgType(type.name)}
                    type={Util.UpperCaseFirsLetter(type.name)}
                  />
                ))}
              </S.PokemonTypes>
            </S.PokemonData>
          </S.MainContent>
          <S.Indicators>
            {["About", "Stats", "Evolution"].map((item, index) => (
              <S.IndicatorItem
                key={index + 1}
                onClick={() => handleChangePage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "activeIndicator"
                    : "incactiveIndicator"
                }
              >
                {item}
              </S.IndicatorItem>
            ))}
          </S.Indicators>
          <S.DescriptionContent>
            {currentPage === 1 && <About pokemon={singlePokemon} />}
            {currentPage === 2 && <Stats pokemon={singlePokemon} />}
            {currentPage === 3 && <Evolution pokemon={singlePokemon} />}
          </S.DescriptionContent>
        </S.PokemonPage>
      )}
    </>
  );
}
