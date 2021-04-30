import styled from "styled-components";

interface IStyledMenuIndicator {
  top: number;
}

export const StyledMenuIndicator = styled.div<IStyledMenuIndicator>`
  position: absolute;
  background: #efefef;
  right: 0;
  top: 0;
  height: 35px;
  width: 5px;
  border-radius: 50px 0 0 50px;
  top: ${({ top }) => top}px;
  z-index: 0;
  box-shadow: 0 0 4px 2px #3a3a3a;
  transition: top 0.5s ease;
`;
