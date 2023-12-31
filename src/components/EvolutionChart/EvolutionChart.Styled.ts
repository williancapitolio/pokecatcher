import styled from "styled-components";

export const Chart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InfoEvolution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
`;

export const ImgContent = styled.div`
  background-color: #f3f3f3;
  border-radius: 50%;
  padding: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const Img = styled.img`
  width: 4.6875rem;
  height: 4.6875rem;

  @media (max-width: 20.625rem) {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

export const PokemonName = styled.h4`
  font-size: ${(props) => props.theme.fonts.sizes.description.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonName.weight};

  &:hover {
    opacity: 0.85;
  }
`;
