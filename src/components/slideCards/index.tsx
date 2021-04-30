import React, { CSSProperties, useEffect, useRef } from "react";
import { StyledStyleCards } from "./style";

interface SlideCardsProps {
  style?: CSSProperties;
}

const SlideCards: React.FC<SlideCardsProps> = ({ children, style }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    Array.from(containerRef.current?.querySelectorAll(".card-decorator"))
      .reverse()
      .forEach((card: HTMLElement, i) => {
        card.style.transform = `rotate(${15 * (i + 1)}deg)`;
        card.style.left = `-${2 * (i + 1)}%`;
        card.style.height = `${100 - 10 * (i + 1)}%`;
      });
  });

  return (
    <StyledStyleCards ref={containerRef}>
      <div className="card card-decorator" style={{ background: "blue" }} />
      <div className="card card-decorator" style={{ background: "red" }} />
      <div className="card" style={{ background: "green", ...style }}>
        {children}
      </div>
    </StyledStyleCards>
  );
};

export default SlideCards;
