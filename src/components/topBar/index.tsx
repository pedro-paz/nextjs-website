import React from "react";
import {
  FiBell,
  FiChevronDown,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import styled from "styled-components";
import Input from "../input";

export const TopBar = () => {
  return (
    <section style={{ display: "flex", marginBottom: 30 }}>
      <Input
        width="100%"
        placeholder="Buscar"
        icon={FiSearch}
        style={{ marginRight: 30, flexGrow: 5 }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <FiBell style={{ fontSize: 22, marginRight: 10, marginLeft: 30 }} />
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
          Pedro Paz
          <FiChevronDown style={{ marginLeft: 10, fontSize: 21 }} />
        </span>
      </div>
    </section>
  );
};
