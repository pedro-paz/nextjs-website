import { AppProps } from "next/app";
import LoggedTemplate from "../src/templates/logged";
import "../public/style/main.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../src/themes/DarkTheme";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <LoggedTemplate>
        <Component {...pageProps} />
      </LoggedTemplate>
    </ThemeProvider>
  );
}

export default App;
