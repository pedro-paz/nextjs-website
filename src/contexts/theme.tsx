import { createContext, useContext, useState } from "react";
import ITheme from "../interfaces/ITheme";

interface ThemeHook {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<ThemeHook>(null);

const useThemes = () => {
  const context = useContext<ThemeHook>(ThemeContext);
  if (!context) throw new Error("useThemes must be use within a ThemeProvider");
  return context;
};

const ThemeProvider: React.FC<ThemeHook> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(props.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemes };
