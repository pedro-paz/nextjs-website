import styled from "styled-components";

interface ContainerMenuCellProps {
  isActive: boolean;
}

export const ContainerMenuCell = styled.div<ContainerMenuCellProps>`
  padding: 13px 37px;
  position: relative;
  align-items: center;
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.sideMenu.selectedCell.color
      : theme.sideMenu.notSelectedCell.color};
  transition: color 0.2s ease;
  z-index: 1;
  position: relative;
  font-weight: 600;

  & main {
    display: flex;
    align-items: center;

    & section {
      margin-right: 20px;
      display: inline-block;
      position: relative;
      height: 24px;

      & svg {
        font-size: 22px;
        display: inline-block;
        z-index: 1;
        position: relative;
        filter: ${({ isActive, theme }) =>
          isActive
            ? `drop-shadow(0px 0px 5px ${theme.sideMenu.iconGlow})`
            : ""};
      }
    }

    & span {
      font-size: 17px;
      display: inline-block;
      height: 17px;
      line-height: 18px;
      font-weight: 700;
    }
  }
`;

interface ContainerSubMenuProps {
  isExpanded: boolean;
}

export const ContainerSubMenu = styled.div<ContainerSubMenuProps>`
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
`;
