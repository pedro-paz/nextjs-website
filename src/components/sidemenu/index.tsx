import React from "react";
import { FaBeer } from "react-icons/fa";
import { MenuContextProvider } from "../../contexts/menu";
import MenuService from "../../services/menu.service";
import MenuCell from "./menuCell";

const SideMenu = () => {
  const menuService = new MenuService();
  return (
    <div style={{ background: "red" }}>
      <MenuContextProvider>
        {menuService.GetMenus().map((menu, i) => (
          <MenuCell key={menu.Url || i} {...menu} />
        ))}
      </MenuContextProvider>
    </div>
  );
};

export default SideMenu;
