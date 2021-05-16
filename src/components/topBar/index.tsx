import React, { useContext, useEffect, useState } from "react";
import {
  FiBell,
  FiChevronDown,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { ThemeContextProvider, useTheme } from "../../contexts/theme";
import ITheme from "../../interfaces/ITheme";
import { GhostButton } from "../button";
import Input from "../input";
import NightDayToggle from "../nightDayToggle";
import { StyledTopBar } from "./styles";

export const TopBar = () => {
  const { theme } = useTheme();

  return (
    <StyledTopBar>
      <div>
        <Input width="100%" placeholder="Buscar" icon={FiSearch} />
      </div>

      <NightDayToggle />
      <GhostButton>
        <FiBell style={{ fontSize: 22 }} />
      </GhostButton>
      <GhostButton>
        <FiSettings
          style={{
            fontSize: 22,
            position: "relative",
          }}
        />
      </GhostButton>
      <span className="user-icon">
        <div>
          <FiUser size={20} />
        </div>
      </span>
    </StyledTopBar>
  );
};
