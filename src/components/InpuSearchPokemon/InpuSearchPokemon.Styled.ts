import styled from "styled-components";

export const Label = styled.label`
  max-width: 20.875rem;
  width: 100%;
  font-weight: ${(props) => props.theme.fonts.sizes.description.weight};
  color: ${(props) => props.theme.colors.text.grey};
`;

export const InpuSearch = styled.div`
  position: relative;
  max-width: 20.875rem;
  width: 100%;
  height: 3.75rem;
  margin-bottom: 2rem;

  svg {
    position: absolute;
    top: 1.4rem;
    left: 1.4rem;
  }
`;

export const Input = styled.input`
  position: absolute;
  max-width: 20.875rem;
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;

  border-radius: 0.625rem;
  padding: 1.25rem 1.5625rem 1.25rem 3rem;
  outline: none;
  border: none;
  background-color: #f2f2f2;

  &:focus {
    background-color: #e2e2e2;
  }
`;
