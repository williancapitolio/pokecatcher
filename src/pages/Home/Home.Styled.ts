import styled from "styled-components";

export const Logo = styled.img`
  max-width: 15rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  position: relative;
`;

export const FavoritesButton = styled.div`
  position: fixed;
  z-index: 10;
  right: 2rem;
  bottom: 2rem;
`;

export const CardsLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const ButtonClearSearchResult = styled.button`
  position: absolute;
  bottom: -4rem;
  outline: none;
  padding: 0.5rem 1rem;
  border: 0.125rem solid ${(props) => props.theme.colors.text.black};
  border-radius: 0.625rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.background.pressedInput};

  &:hover {
    opacity: 0.85;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
