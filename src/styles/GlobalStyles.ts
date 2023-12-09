import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

body {
  background-color: ${(props) => props.theme.colors.background.backgroundColor};
}

div#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

button, select {
  cursor: pointer;
}
`;
