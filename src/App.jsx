import { DefaultColors } from "./assets/themes/themes";
import StartGame from "./componenets/StartGame";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={DefaultColors}>
      <GlobalStyles />
      <StartGame />
    </ThemeProvider>
  );
}

export default App;
