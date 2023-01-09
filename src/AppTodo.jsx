import Home from "./components/home/Home";
import { LightModeProvider } from "./context/LightModeContext";

export default function Todo() {
  return (
    <LightModeProvider>
      <Home />
    </LightModeProvider>
  );
}
