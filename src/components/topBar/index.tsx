import React from "react";
import {
  FiBell,
  FiChevronDown,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { useThemes } from "../../contexts/theme";
import Input from "../input";
import NightDayToggle from "../nightDayToggle";

export const TopBar = () => {
  const { theme, setTheme } = useThemes();
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
        <FiBell style={{ fontSize: 22, marginRight: 10, marginLeft: 15 }} />
        <FiSettings
          style={{
            fontSize: 20,
            position: "relative",
            marginRight: 10,
            marginLeft: 10,
          }}
        />
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
              background: "black",
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
