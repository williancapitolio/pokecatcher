import { useGetSinglePokemon } from "../../hooks/use-get-single-pokemon";

import * as Util from "../../utils";

import { SubtitleColorful } from "../SubtitleColorful";

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

      {!evolutionDetails?.evolves_to.length && (
        <p>
          {Util.UpperCaseFirsLetter(evolutionDetails?.species.name as string)}{" "}
          does not evolve!
        </p>
      )}

      {(evolutionDetails?.evolves_to.length as number) > 1 &&
        evolutionDetails?.evolves_to.map((item, index) => (
          <p key={index}>
            Alternativa {index + 1} -{" "}
            {Util.UpperCaseFirsLetter(evolutionDetails?.species.name as string)}{" "}
            evolui para {Util.UpperCaseFirsLetter(item.species.name)}
          </p>
        ))}

      {(evolutionDetails?.evolves_to.length as number) === 1 &&
        evolutionDetails?.evolves_to.map((item, index) => (
          <>
            <p key={index}>
              {Util.UpperCaseFirsLetter(
                evolutionDetails?.species.name as string
              )}{" "}
              evolui para {Util.UpperCaseFirsLetter(item.species.name)}
            </p>

            {item.evolves_to.length === 1 && (
              <p>
                {Util.UpperCaseFirsLetter(item.species.name)} evolui para{" "}
                {item.evolves_to.map((itemEvo) => (
                  <>{Util.UpperCaseFirsLetter(itemEvo.species.name)}</>
                ))}
              </p>
            )}

            {item.evolves_to.length > 1 && (
              <>
                {item.evolves_to.map((evolution, index) => (
                  <p key={index}>
                    Alternativa {index + 1} -{" "}
                    {Util.UpperCaseFirsLetter(item.species.name)} evolui para{" "}
                    {Util.UpperCaseFirsLetter(evolution.species.name)}
                  </p>
                ))}
              </>
            )}
          </>
        ))}
    </S.EvolutionComponent>
  );
}
