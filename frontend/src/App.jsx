import RoutesWrapper from "./routes/index.jsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lightBlack } from "./helpers";

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
    <div className="App">
      <GlobalStyle />

      <RoutesWrapper />
    </div>
  );
}

export default App;
