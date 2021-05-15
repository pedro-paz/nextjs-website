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

export const TopBar = () => {
  const { theme } = useTheme();

  return (
    <section style={{ display: "flex", marginBottom: 30 }}>
      <Input
        width="100%"
        placeholder="Buscar"
        icon={FiSearch}
        style={{ marginRight: 30, flexGrow: 1 }}
      />
      <div style={{ display: "flex", alignItems: "center", marginLeft: 15 }}>
        <NightDayToggle />
        <GhostButton style={{ marginRight: 10, marginLeft: 15 }}>
          <FiBell style={{ fontSize: 22 }} />
        </GhostButton>
        <GhostButton style={{ marginRight: 10, marginLeft: 10 }}>
          <FiSettings
            style={{
              fontSize: 22,
              position: "relative",
            }}
          />
        </GhostButton>
        <span
          style={{
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            marginLeft: 10,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              background: theme.card.background,
              boxShadow: theme.button.boxShadow,
              color: theme.fontColor,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              display: "flex",
              width: 35,
              height: 35,
              borderRadius: 20,
            }}
          >
            <FiUser size={20} />
          </div>
        </span>
      </div>
    </section>
  );
};
