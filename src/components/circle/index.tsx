import styled from "styled-components";

interface CircleProps {
  width: number;
  color: string;
}

export const Circle = styled.div<CircleProps>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background: ${({ color }) => color};
  border-radius: ${({ width }) => width / 2}px;
  display: inline-block;
`;
