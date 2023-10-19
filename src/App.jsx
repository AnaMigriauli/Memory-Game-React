import { DefaultColors } from "./assets/themes/themes";
import MemoryGame from "./componenets/MemoryGame";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={DefaultColors}>
      <GlobalStyles />
      <MemoryGame />
    </ThemeProvider>
  );
}

export default App;
