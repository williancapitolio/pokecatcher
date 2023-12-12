import * as S from "./ButtonPaginate.Styled";

type ButtonPaginateProps = {
  isDisabled: boolean;
  handleClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
};

export function ButtonPaginate({
  isDisabled,
  handleClick,
  text,
}: ButtonPaginateProps) {
  return (
    <S.BtnPaginate disabled={isDisabled} onClick={handleClick}>
      {text}
    </S.BtnPaginate>
  );
}
