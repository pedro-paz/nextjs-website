import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/theme";
import { StyledGaugeChart } from "./style";

interface GaugeChartProps {
  percent: number;
  width: number;
  stroke: number;
  style?: CSSProperties;
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  percent,
  width,
  stroke,
  children,
  style,
}) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percent);
  }, [progress]);

  return (
    <StyledGaugeChart
      percent={progress}
      width={width}
      stroke={stroke}
      style={style}
    >
      <svg viewBox="0 0 50 50" className="chart">
        <circle cx="25" cy="25" r={22 - stroke} style={{ opacity: 0.07 }} />
        <circle cx="25" cy="25" r="20" className="progress" />
      </svg>
      {children}
    </StyledGaugeChart>
  );
};

export default GaugeChart;
