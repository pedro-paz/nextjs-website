import React from "react";
import { FiBell, FiChevronDown, FiSearch, FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Input from "../input";

export const TopBar = () => {
  return (
    <section style={{ display: "flex", marginBottom: 30 }}>
      <Input
        width="100%"
        placeholder="Buscar"
        Icon={FiSearch}
        style={{ marginRight: 30, flexGrow: 5 }}
      />
      <div style={{ display: "flex", marginTop: 10 }}>
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
            fontSize: 18,
            display: "flex",
            whiteSpace: "nowrap",
            marginLeft: 10,
            fontWeight: 600,
          }}
        >
          Pedro Paz
          <FiChevronDown
            style={{ marginLeft: 10, marginTop: 2, fontSize: 21 }}
          />
        </span>
      </div>
    </section>
  );
};
