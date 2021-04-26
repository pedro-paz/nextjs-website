import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";
import MenuItem from "../../entities/Menu";
import { useMenu } from "../../contexts/menu";

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
  const { menu, setMenu } = useMenu();
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const checkIsActive = useCallback(() => {
    setIsActive(menu === Url);
  }, [menu]);

  useEffect(() => {
    location.pathname === Url && setMenu(Url);
  }, []);

  useEffect(() => {
    checkIsActive();
  }, [menu]);

  return (
    <>
      <div
        onClick={() => {
          if (Url) {
            setMenu(Url);
            router.push(Url);
          }

          if (SubMenu && SubMenu.length) {
            setIsExpanded(!isExpanded);
          }
        }}
        style={{
          paddingLeft: `${marginLeft}px`,
          background: isActive ? "blue" : "transparent",
        }}
      >
        <Icon />
        {Name}
      </div>

      {SubMenu && (
        <div style={{ display: isExpanded ? "block" : "none" }}>
          {SubMenu.map((menu, i) => (
            <MenuCell
              key={menu.Url || i}
              {...menu}
              SubMenu={menu.SubMenu}
              marginLeft={marginLeft + 10}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuCell;
