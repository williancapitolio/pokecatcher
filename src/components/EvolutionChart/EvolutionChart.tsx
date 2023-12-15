import * as Util from "../../utils";

import { BsArrowRight } from "react-icons/bs";

import { TextIdPokemon } from "../TextIdPokemon";

import * as S from "./EvolutionChart.Styled";

type EvolutionChartProps = {
  evolvesFromImg: string;
  evolvesFromId: number;
  evolvesFromName: string;
  evolvesToImg: string;
  evolvesToId: number;
  evolvesToName: string;
};

export function EvolutionChart({
  evolvesFromImg,
  evolvesFromId,
  evolvesFromName,
  evolvesToImg,
  evolvesToId,
  evolvesToName,
}: EvolutionChartProps) {
  return (
    <S.Chart>
      <S.InfoEvolution>
        <S.ImgContent>
          <S.Img
            src={evolvesFromImg}
            alt={`Imagem de ${Util.UpperCaseFirsLetter(evolvesFromName)}`}
          />
        </S.ImgContent>

        <TextIdPokemon idPokemon={evolvesFromId} />
        <S.PokemonName>
          {Util.UpperCaseFirsLetter(evolvesFromName)}
        </S.PokemonName>
      </S.InfoEvolution>

      <BsArrowRight />

      <S.InfoEvolution>
        <S.ImgContent>
          <S.Img
            src={evolvesToImg}
            alt={`Imagem de ${Util.UpperCaseFirsLetter(evolvesToName)}`}
          />
        </S.ImgContent>

        <TextIdPokemon idPokemon={evolvesToId} />
        <S.PokemonName>{Util.UpperCaseFirsLetter(evolvesToName)}</S.PokemonName>
      </S.InfoEvolution>
    </S.Chart>
  );
}
