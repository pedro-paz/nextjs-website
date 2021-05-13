import styled from "styled-components";

interface StyledGaugeChartProps {
  percent: number;
  width: number;
  stroke: number;
}

export const StyledGaugeChart = styled.div<StyledGaugeChartProps>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  position: relative;
  & > *:not(.chart) {
    position: absolute;
    left: 50%;
    width: 40%;
    top: 50%;
    opacity: 0.8;
    z-index: 2;
    transition: all 0.5s ease;
    transform: translateX(-50%) translateY(-50%);
  }
  & svg {
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;
    & > *:not(.progress) {
      fill: ${({ theme }) => theme.gradient[2]};
    }
    & .progress {
      transition: stroke-dashoffset 2s ease, stroke 0.5s ease;
      fill: none;
      stroke: ${({ theme }) => theme.gradient[2]};
      stroke-width: ${({ stroke }) => stroke}px;
      stroke-linecap: round;
      stroke-dasharray: 126;
      stroke-dashoffset: ${({ percent }) => (percent * 126) / 100 - 126};
    }
  }
`;
