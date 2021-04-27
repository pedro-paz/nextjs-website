import { AppProps } from "next/app";
import LoggedTemplate from "../src/templates/logged";
import "../public/style/main.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <LoggedTemplate>
      <Component {...pageProps} />
    </LoggedTemplate>
  );
}

export default App;
