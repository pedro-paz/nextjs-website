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
  const themeContainerRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState(initialTheme);
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    const themeAnimation = document.createElement("div");
    themeAnimation.classList.add("theme-animation");
    themeAnimation.style.background = theme.background;
    themeContainerRef.current.append(themeAnimation);
    setTimeout(() => {
      themeAnimation.style.clipPath = "circle(100%)";
      setTimeout(() => setCurrentTheme(theme), 150);
    }, 100);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
        <div ref={themeContainerRef} style={{ position: "absolute" }}>
          <div
            className="theme-animation"
            style={{
              clipPath: "circle(100%)",
              background: currentTheme.background,
            }}
          />
        </div>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export { ThemeContextProvider, useTheme };
