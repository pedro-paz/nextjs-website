import styled from "styled-components";

interface IStyledMenuIndicator {
  top: number;
}

export const StyledMenuIndicator = styled.div<IStyledMenuIndicator>`
  position: absolute;
  background: ${({ theme }) => theme.sideMenu.cellIndicator.background};
  right: 0;
  top: 0;
  height: 35px;
  width: 5px;
  border-radius: 50px 0 0 50px;
  top: ${({ top }) => top}px;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.sideMenu.cellIndicator.boxShadow};
  transition: top 0.5s ease;
`;
