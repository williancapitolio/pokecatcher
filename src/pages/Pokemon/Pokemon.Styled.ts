import styled, { ExecutionContext } from "styled-components";

type PokemonPageProps = {
  $pokeType: string | ((props: ExecutionContext) => string);
};

export const PokemonPage = styled.div<PokemonPageProps>`
  background-color: ${(props) => props.$pokeType};
  height: 100%;
  position: relative;

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
`;

export const PokemonData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
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

  &:hover {
    background-color: ${(props) => props.theme.colors.text.primary}42;
    border-radius: 1.875rem;
  }
`;

export const DescriptionContent = styled.div`
  background-color: ${(props) => props.theme.colors.background.backgroundColor};
  border-radius: 1.875rem 1.875rem 0 0;
  padding: 2rem;
`;
