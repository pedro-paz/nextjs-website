import React, { CSSProperties, useEffect, useRef } from "react";
import { StyledTable } from "./styles";

interface ColumnConfiguration<T> {
  header?: string;
  propName?: keyof T;
  width?: string | number;
  resolveWith?: (data: T) => JSX.Element | string;
}

interface TableProps<T> {
  style: CSSProperties;
  columns: ColumnConfiguration<T>[];
  data: T[];
}

export const Table = <T extends {}>({
  style,
  data,
  columns,
}: TableProps<T>) => {
  const tableContainer = useRef<HTMLElement>();

  const showRow = (element: HTMLElement) => {
    if (!element) return;
    element.style.opacity = "1";
    element.style.marginTop = "0";
    setTimeout(() => showRow(element.nextElementSibling as HTMLElement), 100);
  };

  useEffect(() => {
    showRow(tableContainer.current.childNodes[0] as HTMLElement);
  }, []);
  return (
    <StyledTable style={style} ref={tableContainer}>
      <li className="table-header">
        <div>
          {columns.map((x) => (
            <div>{x.header || x.propName}</div>
          ))}
        </div>
      </li>
      {data?.map((row) => (
        <li className="table-row">
          <div>
            {columns.map((column) => (
              <div style={{ width: column.width }}>
                {(column.resolveWith && column.resolveWith(row)) ||
                  row[column.propName]}
              </div>
            ))}
          </div>
        </li>
      ))}
    </StyledTable>
  );
};
