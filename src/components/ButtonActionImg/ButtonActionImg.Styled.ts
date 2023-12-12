import styled, { ExecutionContext } from "styled-components";

type ActionBtnProps = {
  $bgColor: string | ((props: ExecutionContext) => string);
};

export const ActionBtn = styled.button<ActionBtnProps>`
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
`;

export const ActionImg = styled.img`
  width: 1.5rem;
`;
