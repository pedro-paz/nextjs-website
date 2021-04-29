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

        <Card
          style={{
            background: "linear-gradient(45deg, #ffffff0a, #2D2E3D)",
            margin: "auto 17px -10px 17px",
            padding: "20px 25px",
            maxWidth: "100%",
            width: "auto",
            fontSize: 14,
            textAlign: "100%",
            fontWeight: 600,
          }}
        >
          Seja PRO e garanta todos os beneficios.
          <Card
            style={{
              margin: "20px 0",
              width: "100%",
              maxHeight: 100,
              minHeight: 100,
            }}
          />
          <Button style={{ width: "100%" }}>Upgrade</Button>
        </Card>
      </MenuContextProvider>
    </ContainerSideMenu>
  );
};

export default SideMenu;
