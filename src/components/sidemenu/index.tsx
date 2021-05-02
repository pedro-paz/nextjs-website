import React, { useEffect } from "react";
import { MenuContextProvider } from "../../contexts/menu";
import { useServices } from "../../contexts/service";
import Button from "../button";
import { Card } from "../card";
import MenuCell from "./menuCell";
import MenuIndicator from "./menuIndicator";
import { ContainerSideMenu } from "./styles";

const SideMenu = () => {
  const { menuService } = useServices();

  return (
    <ContainerSideMenu style={{ display: "flex", flexDirection: "column" }}>
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
