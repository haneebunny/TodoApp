import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const LightModeContext = createContext();

export function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
    updateLightMode(!lightMode);
  };
  // 그냥 !lightMode 써도됨

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setLightMode(!isDark);
    updateLightMode(!isDark);
  }, []);

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
}

function updateLightMode(lightMode) {
  if (lightMode) {
    document.documentElement.classList.add("light");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.remove("light");
    localStorage.theme = "dark";
  }
}
export const useLightMode = () => useContext(LightModeContext);
