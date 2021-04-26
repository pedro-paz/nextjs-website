import { AppProps } from "next/app";
import LoggedTemplate from "../src/templates/logged";

function App({ Component, pageProps }: AppProps) {
  return (
    <LoggedTemplate>
      <Component {...pageProps} />
    </LoggedTemplate>
  );
}

export default App;
