import { createContext, useState } from "react";

export const LightModeContext = createContext();

export function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);
  const toggleLightMode = () => setLightMode((mode) => !mode);

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
}
