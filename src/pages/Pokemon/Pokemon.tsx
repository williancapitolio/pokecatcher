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
  const { navigate, singlePokemon, currentPage, handleChangePage } =
    useGetSinglePokemon();

  return (
    <>
      {singlePokemon && (
        <S.PokemonPage
          $pokeType={Util.GetColorByType(
            singlePokemon.types.map(({ type }) => type.name)[0]
          )}
        >
          <S.HeaderContent
            $pokeType={Util.GetColorByType(
              singlePokemon.types.map(({ type }) => type.name)[0]
            )}
          >
            <a onClick={() => navigate(-1)}>
              <BsArrowLeft className={"arrowBack"} />
            </a>
          </S.HeaderContent>

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
            <S.PokemonNameHeader>
              {Util.UpperCaseFirsLetter(singlePokemon.name)}
            </S.PokemonNameHeader>

            {currentPage === 1 && <About />}
            {currentPage === 2 && <Stats />}
            {currentPage === 3 && <Evolution />}
          </S.DescriptionContent>
        </S.PokemonPage>
      )}
    </>
  );
}
