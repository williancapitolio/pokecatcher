import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import { SubtitleColorful } from "../SubtitleColorful";

import * as Util from "../../utils";

import * as S from "./About.Styled";

import { Pokemon } from "../../interfaces/Pokemon";

export function About() {
  const { singlePokemon } = useGetSinglePokemon();

  const pokemon = singlePokemon as Pokemon;

  const correctDescIndex =
    pokemon.species.specie?.flavor_text_entries.findIndex(
      (item) =>
        item.version.name === "alpha-sapphire" && item.language.name === "en"
    );

  const correctGeneraIndex = pokemon.species.specie?.genera.findIndex(
    (item) => item.language.name === "en"
  );

  return (
    <S.AboutComponent>
      <S.AboutDescription>
        {
          pokemon.species.specie?.flavor_text_entries.map(
            ({ flavor_text }) => flavor_text
          )[correctDescIndex as number]
        }
      </S.AboutDescription>

      <SubtitleColorful subtitle="Pokédex Data" />
      <S.AboutTable>
        <S.AboutTHead>
          <S.AboutTr>
            {["Species", "Height", "Weight", "Abilities"].map((item, index) => (
              <S.AboutTh key={index}>{item}</S.AboutTh>
            ))}
          </S.AboutTr>
        </S.AboutTHead>
        <S.AboutTBody>
          <S.AboutTr>
            <S.AboutTd>
              {
                pokemon.species.specie?.genera.map(({ genus }) => genus)[
                  correctGeneraIndex as number
                ]
              }
            </S.AboutTd>
            <S.AboutTd>{pokemon.height}</S.AboutTd>
            <S.AboutTd>{pokemon.weight}</S.AboutTd>
            <S.AboutTd className="abilitiesTd">
              {pokemon.abilities.map(({ ability }, index) => (
                <span>
                  {index + 1}. {Util.UpperCaseFirsLetter(ability.name)}
                </span>
              ))}
            </S.AboutTd>
          </S.AboutTr>
        </S.AboutTBody>
      </S.AboutTable>

      <SubtitleColorful subtitle="Breeding" />
      <table></table>
    </S.AboutComponent>
  );
}
