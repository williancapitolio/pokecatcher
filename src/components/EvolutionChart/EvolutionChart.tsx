import { Link } from "react-router-dom";

import { usePokemonEvolutionChart } from "../../hooks/use-pokemon-evolution-chart";

import { BsArrowRight } from "react-icons/bs";

import { TextIdPokemon } from "../TextIdPokemon";

import * as Util from "../../utils";

import * as S from "./EvolutionChart.Styled";

type EvolutionChartProps = {
  evolvesFromName: string;
  evolvesToName: string;
};

export function EvolutionChart({
  evolvesFromName,
  evolvesToName,
}: EvolutionChartProps) {
  const { pokemonFromData, pokemonToData } = usePokemonEvolutionChart(
    evolvesFromName,
    evolvesToName
  );

  return (
    <S.Chart>
      <S.InfoEvolution>
        {pokemonFromData && (
          <>
            <S.ImgContent>
              <S.Img
                src={
                  pokemonFromData?.sprites.other["official-artwork"]
                    .front_default as string
                }
                alt={`Imagem de ${Util.UpperCaseFirsLetter(evolvesFromName)}`}
              />
            </S.ImgContent>

            <TextIdPokemon idPokemon={pokemonFromData?.id} />
            <Link to={"/pokemon/" + pokemonFromData?.id}>
              <S.PokemonName>
                {Util.UpperCaseFirsLetter(evolvesFromName)}
              </S.PokemonName>
            </Link>
          </>
        )}
      </S.InfoEvolution>

      <BsArrowRight />

      <S.InfoEvolution>
        {pokemonToData && (
          <>
            <S.ImgContent>
              <S.Img
                src={
                  pokemonToData?.sprites.other["official-artwork"].front_default
                }
                alt={`Imagem de ${Util.UpperCaseFirsLetter(evolvesToName)}`}
              />
            </S.ImgContent>

            <TextIdPokemon idPokemon={pokemonToData?.id} />
            <Link to={"/pokemon/" + pokemonToData?.id}>
              <S.PokemonName>
                {Util.UpperCaseFirsLetter(evolvesToName)}
              </S.PokemonName>
            </Link>
          </>
        )}
      </S.InfoEvolution>
    </S.Chart>
  );
}
