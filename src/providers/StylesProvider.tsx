import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../styles/GlobalStyles";

import { Light } from "../styles/themes/Light";

type StylesProviderProps = {
  children: React.ReactNode;
};

export const StylesProvider = ({ children }: StylesProviderProps) => {
  return (
    <ThemeProvider theme={Light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
