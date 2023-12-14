import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import { SubtitleColorful } from "../SubtitleColorful";

import * as Util from "../../utils";

import * as S from "./Stats.Styled";

import { Pokemon } from "../../interfaces/Pokemon";

export function Stats() {
  const { singlePokemon } = useGetSinglePokemon();

  const pokemon = singlePokemon as Pokemon;

  return (
    <S.StatsComponent>
      <SubtitleColorful subtitle="Base Stats" />

      <S.StatsTable>
        <S.StatsTHead>
          <S.StatsTr>
            {[
              "HP",
              "Attack",
              "Defense",
              "Sp. Atk",
              "Sp. Def",
              "Speed",
              "Total",
            ].map((item, index) => (
              <S.StatsTh key={index}>{item}</S.StatsTh>
            ))}
          </S.StatsTr>
        </S.StatsTHead>

        <S.StatsTBody>
          <S.StatsTr>
            {pokemon.stats.map((stat, index) => (
              <S.StatsTd key={index} className="tdStat">
                {stat.base_stat}
              </S.StatsTd>
            ))}
            <S.StatsTd className="tdTotal tdStat">
              {pokemon.stats
                .map((stat) => stat.base_stat)
                .reduce((acc, curr) => acc + curr, 0)}
            </S.StatsTd>
          </S.StatsTr>
          <S.StatsTr>
            {pokemon.stats.map((stat, index) => (
              <S.StatsTd key={index} className="tdProgress">
                <S.StatsProgress
                  value={stat.base_stat}
                  max="255"
                  $progressColor={Util.GetBgColorByType(
                    pokemon.types.map(({ type }) => type.name)[0]
                  )}
                >
                  {stat.base_stat}%
                </S.StatsProgress>
              </S.StatsTd>
            ))}
            <S.StatsTd></S.StatsTd>
          </S.StatsTr>

          <S.StatsTr>
            <S.StatsTd className="tdStat">
              {Util.GetHpStat(
                pokemon.stats.map((stat) => stat.base_stat)[0],
                0,
                0,
                100
              )}
            </S.StatsTd>

            {pokemon.stats
              .map((stat) => stat.base_stat)
              .slice(1)
              .map((item, index) => (
                <S.StatsTd key={index} className="tdStat">
                  {Util.GetOtherStats(item, 0, 0, 100, 0.9)}
                </S.StatsTd>
              ))}

            <S.StatsTd className="tdMinMax">Min</S.StatsTd>
          </S.StatsTr>

          <S.StatsTr>
            <S.StatsTd className="tdStat">
              {Util.GetHpStat(
                pokemon.stats.map((stat) => stat.base_stat)[0],
                31,
                252,
                100
              )}
            </S.StatsTd>

            {pokemon.stats
              .map((stat) => stat.base_stat)
              .slice(1)
              .map((item, index) => (
                <S.StatsTd key={index} className="tdStat">
                  {Util.GetOtherStats(item, 31, 252, 100, 1.1)}
                </S.StatsTd>
              ))}

            <S.StatsTd className="tdMinMax">Max</S.StatsTd>
          </S.StatsTr>
        </S.StatsTBody>
      </S.StatsTable>

      <S.StatsDescription>
        Maximum Base Stat is 255. The ranges shown on the right are for a level
        100 Pokémon. Maximum values are based on a beneficial nature (10%
        increase), 252 EVs, 31 IVs. Minimum values are based on a hindering
        nature (10% decrease), 0 EVs, 0 IVs.
      </S.StatsDescription>
    </S.StatsComponent>
  );
}
