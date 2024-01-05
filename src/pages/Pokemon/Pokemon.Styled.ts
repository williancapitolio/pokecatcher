import styled, { ExecutionContext } from "styled-components";

type PokemonPageProps = {
  $pokeType: string | ((props: ExecutionContext) => string);
};

export const PokemonPage = styled.div<PokemonPageProps>`
  background-color: ${(props) => props.$pokeType};
  height: 100%;
  position: relative;
`;

export const HeaderContent = styled.div<PokemonPageProps>`
  background-color: ${(props) => props.$pokeType};
  position: fixed;
  height: 4.5rem;
  width: 100%;
  max-width: 64rem;
  border-radius: 0 0 1.875rem 1.875rem;
  z-index: 1;

  .arrowBack {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    position: absolute;
    top: 2rem;
    left: 2rem;
    cursor: pointer;

    path {
      fill: ${(props) => props.theme.colors.text.white};
    }

    &:hover {
      background-color: #ffffff42;
      border-radius: 50%;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 5.9375rem;
  margin-bottom: 3rem;
`;

export const PokemonImg = styled.img`
  width: 7.8125rem;
  height: 7.8125rem;
  z-index: 10;
`;

export const PokemonData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  z-index: 10;
`;

export const PokemonName = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes.pokemonName.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonName.weight};
  color: ${(props) => props.theme.colors.text.white};
`;

export const PokemonTypes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Indicators = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0.5rem;

  .activeIndicator {
    background-color: #ffffff42;
    border-radius: 1.875rem;
  }

  .incactiveIndicator {
    color: ${(props) => props.theme.colors.text.primary}65;
  }
`;

export const IndicatorItem = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  cursor: pointer;
  padding: 1rem;
  z-index: 10;

  &:hover {
    background-color: ${(props) => props.theme.colors.text.primary}42;
    border-radius: 1.875rem;
  }
`;

export const DescriptionContent = styled.div`
  background-color: ${(props) => props.theme.colors.background.backgroundColor};
  border-radius: 1.875rem 1.875rem 0 0;
  padding: 1rem 2rem 2rem 2rem;
  position: relative;
`;

export const PokemonNameHeader = styled.span`
  position: sticky;
  z-index: 1;
  top: 2.5rem;
  margin-left: 3rem;
  text-align: center;
  font-size: ${(props) => props.theme.fonts.sizes.description.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonName.weight};
  color: ${(props) => props.theme.colors.text.white};
`;
