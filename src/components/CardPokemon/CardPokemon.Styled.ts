import styled, { ExecutionContext } from "styled-components";

type CardProps = {
  $pokeType: string | ((props: ExecutionContext) => string);
};

export const Card = styled.div<CardProps>`
  position: relative;
  height: 7.1875rem;
  //height: 12.5rem;
  //width: 100%;
  width: 20.875rem;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 2rem;
`;

export const Id = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes.pokemonNumber.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonNumber.weight};
`;

export const Img = styled.img`
  width: 8.125rem;
  position: absolute;
  right: 0.5rem;
  top: -2rem;
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes.pokemonName.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonName.weight};
`;

export const Types = styled.div``;

export const Type = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes.pokemonType.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonType.weight};

  &:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

export const Actions = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
