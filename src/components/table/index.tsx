import React, { CSSProperties, useEffect, useRef } from "react";
import { StyledTable } from "./styles";

interface TableProps {
  style: CSSProperties;
}

export const Table: React.FC<TableProps> = ({ children, style }) => {
  const tableContainer = useRef<HTMLElement>();
  const showRow = (element: HTMLElement) => {
    if (!element) return;
    element.style.opacity = "1";
    element.style.marginTop = "0";
    setTimeout(() => showRow(element.nextElementSibling as HTMLElement), 200);
  };

  useEffect(() => {
    tableContainer.current.childNodes.forEach((x) => {
      const element = x as HTMLElement;
      element.style.marginTop = `-100px`;
    });
    showRow(tableContainer.current.childNodes[0] as HTMLElement);
  }, []);
  return (
    <StyledTable style={style} ref={tableContainer}>
      {children}
    </StyledTable>
  );
};
