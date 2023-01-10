import logo from "./logo.svg";
import "./App.css";
import { LightModeProvider } from "./context/LightModeContext";

function App() {
  return (
    <LightModeProvider>
      <div className="App">app.js</div>
    </LightModeProvider>
  );
}

export default App;
