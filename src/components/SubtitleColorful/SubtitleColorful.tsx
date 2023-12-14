import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import * as Util from "../../utils";

import * as S from "./SubtitleColorful.Styled";

import { Pokemon } from "../../interfaces/Pokemon";

type SubtitleColorfulProps = {
  subtitle: string;
};

export function SubtitleColorful({ subtitle }: SubtitleColorfulProps) {
  const { singlePokemon } = useGetSinglePokemon();

  const pokemon = singlePokemon as Pokemon;

  return (
    <S.BaseStats
      $fontColor={Util.GetBgColorByType(
        pokemon.types.map(({ type }) => type.name)[0]
      )}
    >
      {subtitle}
    </S.BaseStats>
  );
}
