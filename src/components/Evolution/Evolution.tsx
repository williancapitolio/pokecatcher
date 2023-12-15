import { usePokemonEvolutionChart } from "../../hooks/use-pokemon-evolution-chart";

import { SubtitleColorful } from "../SubtitleColorful";
import { EvolutionChart } from "../EvolutionChart";

import * as Util from "../../utils";

import * as S from "./Evolution.Styled";

export function Evolution() {
  const {
    evolutionDetails,
    pokemonDoNotEnvolve,
    pokemonHaveMoreThanOneSecondForm,
  } = usePokemonEvolutionChart();

  return (
    <S.EvolutionComponent>
      <SubtitleColorful subtitle="Evolution Chart" />

      {/* Does not evolve. ex: Kangaskhan , Heracross */}
      {pokemonDoNotEnvolve && (
        <p style={{ textAlign: "center", fontWeight: 700 }}>
          {Util.UpperCaseFirsLetter(evolutionDetails?.species.name as string)}{" "}
          does not evolve!
        </p>
      )}

      {/* Have more than one second form. ex: Eevee, Tyrogue */}
      {pokemonHaveMoreThanOneSecondForm &&
        evolutionDetails?.evolves_to.map((plusSecondForm, index) => (
          <>
            <p key={index}>
              {evolutionDetails?.species.name as string} to{" "}
              {plusSecondForm.species.name}
            </p>

            {/* Have more than one second and third form. ex: Silcoon and Cascoon */}
            {plusSecondForm.evolves_to &&
              plusSecondForm.evolves_to.map((plusThirdForm, index) => (
                <p key={index}>
                  {plusSecondForm.species.name} to {plusThirdForm.species.name}
                </p>
              ))}
          </>
        ))}

      {/* Have just one second form. ex: Bulbasaur, Growlithe */}
      {(evolutionDetails?.evolves_to.length as number) === 1 &&
        evolutionDetails?.evolves_to.map((secondForm, index) => (
          <>
            <p key={index}>
              {evolutionDetails?.species.name as string} to{" "}
              {secondForm.species.name}
            </p>

            {/* Have more than one third form. ex: Gloom, Poliwhirl */}
            {secondForm.evolves_to.length > 1 && (
              <>
                {secondForm.evolves_to.map((plusThirdForm, index) => (
                  <p key={index}>
                    {secondForm.species.name} to {plusThirdForm.species.name}
                  </p>
                ))}
              </>
            )}

            {/* Have just one third form. ex: Ivysaur, Machoke*/}
            {secondForm.evolves_to.length === 1 && (
              <>
                {secondForm.evolves_to.map((thirdForm) => (
                  <p>
                    {secondForm.species.name} to {thirdForm.species.name}
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
