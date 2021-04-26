import React, { createContext, useContext, useState } from "react";
import Route from "../enums/Route";

interface MenuHook {
  menu: Route;
  setMenu: (value: Route) => void;
}

const MenuContext = createContext<MenuHook>(null);

const useMenu = () => {
  const context = useContext<MenuHook>(MenuContext);
  if (!context)
    throw new Error("useContext must be use within a SelectRangeProvider");
  return context;
};

export const MenuContextProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Route>(null);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, useMenu };
