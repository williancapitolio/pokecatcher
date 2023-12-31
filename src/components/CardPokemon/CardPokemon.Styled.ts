import styled, { ExecutionContext } from "styled-components";

type CardProps = {
  $pokeType: string | ((props: ExecutionContext) => string);
};

export const Card = styled.div<CardProps>`
  position: relative;
  height: 7.1875rem;
  max-width: 20.875rem;
  width: 100%;
  background-color: ${(props) => props.$pokeType};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  padding: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0px 10px 20px 0px ${(props) => props.$pokeType}66;
`;

export const Img = styled.img`
  max-width: 8.125rem;
  position: absolute;
  right: 0.5rem;
  top: -2rem;

  @media (max-width: 19.9rem) {
    max-width: 5.5rem;
    top: -2.5rem;
  }
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes.pokemonName.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonName.weight};
  color: ${(props) => props.theme.colors.text.white};

  &:hover {
    opacity: 0.85;
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Actions = styled.div`
  position: absolute;
  top: -1rem;
  left: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.3125rem;
`;
