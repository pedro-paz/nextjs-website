import { createContext, useContext, useEffect, useRef, useState } from "react";
import ITheme from "../interfaces/ITheme";
import { ThemeProvider } from "styled-components";

interface ThemeHook {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<ThemeHook>(null);

const useTheme = () => {
  const context = useContext<ThemeHook>(ThemeContext);
  if (!context) throw new Error("useThemes must be use within a ThemeProvider");
  return context;
};

interface ThemeProviderProps {
  initialTheme: ITheme;
}

const ThemeContextProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState(initialTheme);
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    backgroundRef.current.style.visibility = "visible";
    backgroundRef.current.style.clipPath = "circle(100%)";
    backgroundRef.current.style.background = theme.background;
    setTimeout(() => {
      backgroundRef.current.style.clipPath = "circle(0%)";
      backgroundRef.current.style.visibility = "hidden";
      setCurrentTheme(theme);
    }, 1000);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
        <div ref={backgroundRef} className="theme-animation" />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export { ThemeContextProvider, useTheme };
