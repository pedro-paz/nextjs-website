import React from "react";
import { MenuContextProvider } from "../../contexts/menu";
import { useServices } from "../../contexts/service";
import MenuCell from "./menuCell";

const SideMenu = () => {
  const { menuService } = useServices();

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
