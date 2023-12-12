import { ExecutionContext } from "styled-components";

import * as S from "./ButtonActionImg.Styled";

type ButtonActionImgProps = {
  handleClick: () => void;
  color: string | ((props: ExecutionContext) => string);
  imgSrc: string;
  imgAlt: string;
};

export function ButtonActionImg({
  handleClick,
  color,
  imgSrc,
  imgAlt,
}: ButtonActionImgProps) {
  return (
    <S.ActionBtn onClick={handleClick} $bgColor={color}>
      <S.ActionImg src={imgSrc} alt={imgAlt} />
    </S.ActionBtn>
  );
}
