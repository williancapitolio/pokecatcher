import { Outlet } from "react-router-dom";

import * as S from "./RootLayout.Styled";

export function RootLayout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
}
