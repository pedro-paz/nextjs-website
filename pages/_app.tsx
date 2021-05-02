import { AppProps } from "next/app";
import LoggedTemplate from "../src/templates/logged";

import { darkTheme } from "../src/styles/themes/dark";
import GlobalStyle from "../src/styles/global";
import "../public/style/main.css";
import React from "react";
import { ThemeContextProvider } from "../src/contexts/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider initialTheme={darkTheme}>
      <GlobalStyle />
      <LoggedTemplate>
        <Component {...pageProps} />
      </LoggedTemplate>
    </ThemeContextProvider>
  );
}

export default App;
