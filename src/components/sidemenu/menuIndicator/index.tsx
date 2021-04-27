import React, { useCallback, useEffect, useState } from "react";
import { useMenu } from "../../../contexts/menu";
import { StyledMenuIndicator } from "./styles";

const MenuIndicator: React.FC = () => {
  const { selectedCell } = useMenu();
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(selectedCell?.getBoundingClientRect().y + 8);
  }, [selectedCell]);

  return <StyledMenuIndicator top={top} />;
};

export default MenuIndicator;
