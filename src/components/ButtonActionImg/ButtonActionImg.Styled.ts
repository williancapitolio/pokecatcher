import styled, { ExecutionContext } from "styled-components";

type ActionBtnProps = {
  $bgColor: string | ((props: ExecutionContext) => string);
  $btnSize: string | ((props: ExecutionContext) => string);
};

export const ActionBtn = styled.button<ActionBtnProps>`
  width: ${(props) => props.$btnSize || "1.75rem"};
  height: ${(props) => props.$btnSize || "1.75rem"};
  border: none;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }
`;

type ActionImgProps = {
  $logoSize: string | ((props: ExecutionContext) => string);
};

export const ActionImg = styled.img<ActionImgProps>`
  width: ${(props) => props.$logoSize || "1.5rem"};
`;
