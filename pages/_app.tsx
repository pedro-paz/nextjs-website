import { AppProps } from "next/app";
import LoggedTemplate from "../src/templates/logged";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../src/styles/themes/dark";
import GlobalStyle from "../src/styles/global";
import "../public/style/main.css";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <LoggedTemplate>
        <Component {...pageProps} />
      </LoggedTemplate>
    </ThemeProvider>
  );
}

export default App;
