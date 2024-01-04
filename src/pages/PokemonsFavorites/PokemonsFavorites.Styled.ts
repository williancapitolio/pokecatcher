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
  left: 2rem;
  bottom: 2rem;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: ${(props) => props.theme.fonts.sizes.description.size};
  font-weight: ${(props) => props.theme.fonts.sizes.applicationTitle.weight};
  color: ${(props) => props.theme.colors.text.black};
  text-align: justify;
  margin-bottom: 1rem;
`;

export const CardsLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;
