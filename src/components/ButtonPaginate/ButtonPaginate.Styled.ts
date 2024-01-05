import styled from "styled-components";

export const BtnPaginate = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 0.125rem solid ${(props) => props.theme.colors.text.black};
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.background.defaultBtn};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.black};

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    border: 2px solid #1010104d;
    background-color: transparent;
    color: #1010104d;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`;
