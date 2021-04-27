import styled from "styled-components";

interface IStyledMenuIndicator {
  top: number;
}

export const StyledMenuIndicator = styled.div<IStyledMenuIndicator>`
  position: absolute;
  background: white;
  right: 21px;
  height: 31px;
  width: 5px;
  border-radius: 100px;
  top: ${({ top }) => top}px;
  z-index: 0;
  box-shadow: 0 0 4px 2px #3a3a3a;
  transition: top 0.5s ease;
`;
