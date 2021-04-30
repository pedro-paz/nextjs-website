import React, { useEffect, useRef, useState } from "react";
import { StyledNightDayToggle } from "./style";
import ReactDOM from "react-dom";
import { Circle } from "../circle";

const NightDayToggle = () => {
  const containerRef = useRef<HTMLDivElement>();
  const [background, setBackground] = useState<HTMLElement>();
  const onToggleClicked = () => {
    containerRef.current.classList.toggle("toggle-container-day");

    containerRef.current
      ?.querySelectorAll(".star")
      .forEach((x) => x.classList.toggle("star-day"));
    containerRef.current
      ?.querySelectorAll(".crater")
      .forEach((x) => x.classList.toggle("crater-day"));
    containerRef.current
      ?.querySelectorAll(".toggle-handle")
      .forEach((x) => x.classList.toggle("toggle-handle-day"));
    containerRef.current
      ?.querySelectorAll(".mini-cloud")
      .forEach((x) => x.classList.toggle("cloud-day"));
  };

  useEffect(() => {
    setBackground(document.body);
  }, []);

  //   temp1.getBoundingClientRect().x + 26;
  //   temp1.getBoundingClientRect().y + 11;

  return (
    <div style={{ position: "relative", width: 49, height: 24 }}>
      <StyledNightDayToggle
        ref={containerRef}
        className="toggle-container"
        onClick={onToggleClicked}
      >
        <div className="toggle-handle">
          <div className="crater crater-one"></div>
          <div className="crater crater-two"></div>
          <div className="crater crater-three"></div>
        </div>
        <img
          className="mini-cloud"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/480623/toggle_cloud.png"
        />
        <div className="star star-medium star-one"></div>
        <div className="star star-large star-two"></div>
        <div className="star star-small star-three"></div>
        <div className="star star-small star-four"></div>
        <div className="star star-medium star-five"></div>
        <div className="star star-large star-six"></div>
        <div className="star star-medium star-seven"></div>
        {background &&
          ReactDOM.createPortal(<Circle color="red" width="100" />, background)}
      </StyledNightDayToggle>
    </div>
  );
};

export default NightDayToggle;
