import React, { CSSProperties } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  style: CSSProperties;
}
const Button: React.FC<ButtonProps> = ({ children, style }) => {
  return <StyledButton style={style}>{children}</StyledButton>;
};

export default Button;
