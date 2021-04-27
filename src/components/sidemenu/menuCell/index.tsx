import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MenuItem from "../../../entities/Menu";
import { useMenu } from "../../../contexts/menu";
import { ContainerMenuCell, ContainerSubMenu } from "./styles";

interface MenuItemProps extends MenuItem {
  marginLeft?: number;
}

const MenuCell: React.FC<MenuItemProps> = ({
  Icon,
  Name,
  Url,
  SubMenu,
  marginLeft = 0,
}) => {
  const router = useRouter();
  const { menu, setMenu, setSelectedCell } = useMenu();
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const selectedCellRef = useRef<HTMLElement>(null);

  const onCellClicked = () => {
    if (Url) {
      setMenu(Url);
      router.push(Url);
    }

    if (SubMenu && SubMenu.length) {
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    location.pathname === Url && setMenu(Url);
  }, []);

  useEffect(() => {
    setIsActive(menu === Url);
  }, [menu]);

  useEffect(() => {
    isActive && setSelectedCell(selectedCellRef.current);
  }, [isActive]);

  useEffect(() => {
    // router.asPath === Url && setMenu(Url);
  }, [router.asPath]);

  return (
    <>
      <ContainerMenuCell
        ref={selectedCellRef}
        isActive={isActive}
        onClick={onCellClicked}
      >
        <main style={{ paddingLeft: `${marginLeft}px` }}>
          <section>
            <Icon />
            <Icon />
          </section>

          <span>{Name}</span>
        </main>
      </ContainerMenuCell>

      {SubMenu && (
        <ContainerSubMenu isExpanded={isExpanded}>
          {SubMenu.map((menu, i) => (
            <MenuCell
              key={menu.Url || i}
              {...menu}
              SubMenu={menu.SubMenu}
              marginLeft={marginLeft + 10}
            />
          ))}
        </ContainerSubMenu>
      )}
    </>
  );
};

export default MenuCell;
