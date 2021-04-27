import React from "react";
import { MenuContextProvider } from "../../contexts/menu";
import { useServices } from "../../contexts/service";
import MenuCell from "./menuCell";
import MenuIndicator from "./menuIndicator";
import { ContainerSideMenu } from "./styles";

const SideMenu = () => {
  const { menuService } = useServices();

  return (
    <ContainerSideMenu>
      <MenuContextProvider>
        <MenuIndicator />
        {menuService.GetMenus().map((menu, i) => (
          <MenuCell key={menu.Url || i} {...menu} />
        ))}
      </MenuContextProvider>
    </ContainerSideMenu>
  );
};

export default SideMenu;
