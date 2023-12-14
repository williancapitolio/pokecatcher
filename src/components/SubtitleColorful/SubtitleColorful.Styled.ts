import styled, { ExecutionContext } from "styled-components";

type SubtitleColorfulProps = {
  $fontColor: string | ((props: ExecutionContext) => string);
};

export const BaseStats = styled.h3<SubtitleColorfulProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.$fontColor};
`;
