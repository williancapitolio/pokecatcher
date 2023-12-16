import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import { SubtitleColorful } from "../SubtitleColorful";
import { EvolutionChart } from "../EvolutionChart";

import * as Util from "../../utils";

import * as S from "./Evolution.Styled";

export function Evolution() {
  const { singlePokemon } = useGetSinglePokemon();

  const evolutionDetails =
    singlePokemon?.species.specie?.evolution_chain.evolution?.chain;

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
          <>
            <EvolutionChart
              key={index}
              evolvesFromName={evolutionDetails?.species.name as string}
              evolvesToName={plusSecondForm.species.name}
            />

            {/* Have more than one second and third form. ex: Silcoon and Cascoon */}
            {plusSecondForm.evolves_to &&
              plusSecondForm.evolves_to.map((plusThirdForm, index) => (
                <EvolutionChart
                  key={index}
                  evolvesFromName={plusSecondForm.species.name}
                  evolvesToName={plusThirdForm.species.name}
                />
              ))}
          </>
        ))}

      {/* Have just one second form. ex: Bulbasaur, Growlithe */}
      {(evolutionDetails?.evolves_to.length as number) === 1 &&
        evolutionDetails?.evolves_to.map((secondForm, index) => (
          <>
            <EvolutionChart
              key={index}
              evolvesFromName={evolutionDetails?.species.name as string}
              evolvesToName={secondForm.species.name}
            />

            {/* Have more than one third form. ex: Gloom, Poliwhirl */}
            {secondForm.evolves_to.length > 1 && (
              <>
                {secondForm.evolves_to.map((plusThirdForm, index) => (
                  <EvolutionChart
                    key={index}
                    evolvesFromName={secondForm.species.name}
                    evolvesToName={plusThirdForm.species.name}
                  />
                ))}
              </>
            )}

            {/* Have just one third form. ex: Ivysaur, Machoke*/}
            {secondForm.evolves_to.length === 1 && (
              <>
                {secondForm.evolves_to.map((thirdForm, index) => (
                  <EvolutionChart
                    key={index}
                    evolvesFromName={secondForm.species.name}
                    evolvesToName={thirdForm.species.name}
                  />
                ))}
              </>
            )}
          </>
        ))}
    </S.EvolutionComponent>
  );
}
