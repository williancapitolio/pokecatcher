import * as S from "./TextIdPokemon.Styled";

export function TextIdPokemon({ idPokemon }: { idPokemon: number }) {
  return <S.Id>#{idPokemon.toString().padStart(3, "0")}</S.Id>;
}
