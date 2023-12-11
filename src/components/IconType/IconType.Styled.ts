import styled, { ExecutionContext } from "styled-components";

type IconTypeProps = {
  $pokeType: string | ((props: ExecutionContext) => string);
};

export const Badge = styled.div<IconTypeProps>`
  background-color: ${(props) => props.$pokeType};
  padding: 0.3125rem;
  gap: 0.3125rem;
  border-radius: 0.1875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => props.theme.fonts.sizes.pokemonType.size};
  font-weight: ${(props) => props.theme.fonts.sizes.pokemonType.weight};
  color: ${(props) => props.theme.colors.text.white};

  svg {
    width: 0.9375rem;
    height: 0.9375rem;

    path {
      fill: ${(props) => props.theme.colors.text.white};
    }
  }

  &:nth-child(2) {
    margin-left: 0.25rem;
  }
`;

export const Type = styled.span``;
