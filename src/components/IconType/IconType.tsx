import * as S from "./IconType.Styled";

type IconTypeProps = {
  color: string;
  icon: JSX.Element;
  type: string;
};

export function IconType({ color, icon, type }: IconTypeProps) {
  return (
    <S.Badge $pokeType={color}>
      {icon}
      <S.Type>{type}</S.Type>
    </S.Badge>
  );
}
