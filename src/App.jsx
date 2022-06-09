import RoutesWrapper from "./routes/index.jsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lightBlack } from "./helpers";
import GlobalContextProvider from "./Context/index.jsx";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${lightBlack};
  }

  * {
    font-family: 'Montserrat', sans-serif !important
  }
`;

function App() {
  return (
    <GlobalContextProvider>
      <GlobalStyle />

      <RoutesWrapper />
    </GlobalContextProvider>
  );
}

export default App;
