import React, { useCallback, useEffect, useState } from "react";
import { useMenu } from "../../../contexts/menu";
import { StyledMenuIndicator } from "./styles";

const MenuIndicator: React.FC = () => {
  const { menu } = useMenu();

  useEffect(() => {
    console.log("mudou");
  }, [menu]);

  return <StyledMenuIndicator />;
};

export default MenuIndicator;
