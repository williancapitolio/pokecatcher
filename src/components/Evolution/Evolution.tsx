import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import * as Util from "../../utils";

import { SubtitleColorful } from "../SubtitleColorful";
import { EvolutionChart } from "../EvolutionChart";

import { Pokemon } from "../../interfaces/Pokemon";

import * as S from "./Evolution.Styled";

export function Evolution() {
  const { singlePokemon } = useGetSinglePokemon();

  const pokemon = singlePokemon as Pokemon;

  const evolutionDetails =
    pokemon.species.specie?.evolution_chain.evolution?.chain;

  return (
    <S.EvolutionComponent>
      <SubtitleColorful subtitle="Evolution Chart" />

      {/* Does not evolve. ex: Kangaskhan , Heracross */}
      {!evolutionDetails?.evolves_to.length && (
        <p style={{ textAlign: "center", fontWeight: 700 }}>
          {Util.UpperCaseFirsLetter(evolutionDetails?.species.name as string)}{" "}
          does not evolve!
        </p>
      )}

      {/* Have more than one second form. ex: Eevee, Tyrogue */}
      {(evolutionDetails?.evolves_to.length as number) > 1 &&
        evolutionDetails?.evolves_to.map((plusSecondForm, index) => (
          <p key={index}>
            {evolutionDetails?.species.name as string} evolui para{" "}
            {plusSecondForm.species.name}
          </p>
        ))}

      {/* Have just one second form. ex: Bulbasaur, Growlithe */}
      {(evolutionDetails?.evolves_to.length as number) === 1 &&
        evolutionDetails?.evolves_to.map((secondForm, index) => (
          <>
            <p key={index}>
              {evolutionDetails?.species.name as string} evolui para{" "}
              {secondForm.species.name}
            </p>

            {/* Have just one final form. ex: Ivysaur, Machoke*/}
            {secondForm.evolves_to.length === 1 && (
              <>
                {secondForm.evolves_to.map((thirdForm) => (
                  <p>
                    {secondForm.species.name} evolui para{" "}
                    {thirdForm.species.name}
                  </p>
                ))}
              </>
            )}

            {/* Have more than one final form. ex: Gloom, Poliwhirl */}
            {secondForm.evolves_to.length > 1 && (
              <>
                {secondForm.evolves_to.map((plusThirdForm, index) => (
                  <p key={index}>
                    {secondForm.species.name} evolui para{" "}
                    {plusThirdForm.species.name}
                  </p>
                ))}
              </>
            )}
          </>
        ))}

      <EvolutionChart
        evolvesFromId={1}
        evolvesFromImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        evolvesFromName="Bulbasaur"
        evolvesToId={2}
        evolvesToImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        evolvesToName="Ivysaur"
      />
    </S.EvolutionComponent>
  );
}
