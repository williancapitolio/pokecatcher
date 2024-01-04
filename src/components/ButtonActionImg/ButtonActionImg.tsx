import { ExecutionContext } from "styled-components";

import * as S from "./ButtonActionImg.Styled";

type ButtonActionImgProps = {
  handleClick: () => void;
  color: string | ((props: ExecutionContext) => string);
  sizeBtn: string | ((props: ExecutionContext) => string);
  sizeLogo: string | ((props: ExecutionContext) => string);
  imgSrc: string;
  imgAlt: string;
};

export function ButtonActionImg({
  handleClick,
  color,
  sizeBtn,
  sizeLogo,
  imgSrc,
  imgAlt,
}: ButtonActionImgProps) {
  return (
    <S.ActionBtn onClick={handleClick} $bgColor={color} $btnSize={sizeBtn}>
      <S.ActionImg src={imgSrc} alt={imgAlt} $logoSize={sizeLogo}/>
    </S.ActionBtn>
  );
}
