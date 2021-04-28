import React, { CSSProperties } from "react";
import { IconType } from "react-icons";
import { FiBell } from "react-icons/fi";
import { StyledInput } from "./style";

interface InputProps {
  style?: CSSProperties;
  placeholder?: string;
  icon?: IconType;
  width?: number | string;
}

const Input: React.FC<InputProps> = ({
  style,
  placeholder,
  width,
  icon: Icon,
}) => {
  return (
    <div style={{ position: "relative", width }}>
      <Icon
        size={20}
        style={{
          position: "absolute",
          top: "50%",
          left: 15,
          transform: "translateY(-50%)",
        }}
      />
      <StyledInput
        style={{ ...style, width, paddingLeft: Icon && 45 }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
