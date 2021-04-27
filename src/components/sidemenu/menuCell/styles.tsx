import styled from "styled-components";

interface ContainerMenuCellProps {
  isActive: boolean;
}

export const ContainerMenuCell = styled.div<ContainerMenuCellProps>`
  padding: 19px 37px;
  position: relative;
  align-items: center;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#fafafa" : "#9aa9c3")};
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

      & svg {
        font-size: 24px;
        display: inline-block;
        z-index: 1;
        position: relative;
      }

      & svg:last-child {
        position: absolute;
        left: 0;
        filter: blur(1px) contrast(0.4);
        z-index: 0;
        transition: opacity 0.5s ease;
        opacity: ${({ isActive }) => (isActive ? 1 : 0)};
      }
    }

    & span {
      font-size: 19px;
      display: inline-block;
      height: 21px;
      line-height: 21px;
      font-weight: 600;
    }
  }
`;

interface ContainerSubMenuProps {
  isExpanded: boolean;
}

export const ContainerSubMenu = styled.div<ContainerSubMenuProps>`
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
`;
