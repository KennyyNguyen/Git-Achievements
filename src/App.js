import Popup from "./components/Popup";
import { BaseStyles, ThemeProvider } from "@primer/react";

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div className="App">
          <Popup />
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
