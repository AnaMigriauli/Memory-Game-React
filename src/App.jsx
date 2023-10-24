import { DefaultColors } from "./assets/themes/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import StartGame from "./componenets/StartGame";

function App() {
  return (
    <ThemeProvider theme={DefaultColors}>
      <GlobalStyles />
      <StartGame />
    </ThemeProvider>
  );
}

export default App;
