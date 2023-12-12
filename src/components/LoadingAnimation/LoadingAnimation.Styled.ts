import styled from "styled-components";

export const Loader = styled.div`
  margin: 0.625rem;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background.defaultBtn};
  animation: rotateslide 5s linear infinite;

  @keyframes rotateslide {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(6.25rem, 0);
    }
    50% {
      transform: translate(6.25rem, 6.25rem);
    }
    75% {
      transform: translate(0, 6.25rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
