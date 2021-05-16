import React, { CSSProperties, useEffect, useState } from "react";
import { useTheme } from "../../contexts/theme";

interface ProgressBarProps {
  percent: number;
  style?: CSSProperties;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, style }) => {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    setProgress(percent);
  }, [percent]);

  return (
    <div
      style={{
        width: "100%",
        height: 10,
        background: theme.lightColor,
        borderRadius: 16,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          transition: "2s ease width",
          width: `${progress}%`,
          height: "100%",
          background: `linear-gradient(to right, ${theme.gradient[0]},${theme.gradient[2]})`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
