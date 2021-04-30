import styled from "styled-components";

export const StyledNightDayToggle = styled.div`
  margin: auto;
  position: absolute;
  width: 280px;
  height: 140px;
  top: -58px;
  left: -117px;
  background: transparent;
  border-radius: 70px;
  border: 10.0002px solid #1c1c1c;
  overflow: hidden;
  cursor: pointer;
  transform: scale(0.16);
  transition: border-color 0.5s ease 0s, background 0.5s ease 0s;

  &.toggle-container-day {
    background: #9fe4fc !important;
    border-color: #86c4d8;
  }

  & .toggle-handle {
    position: absolute;
    height: 109.998px;
    width: 109.998px;
    left: 5.99998px;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    background: #ffffff;
    border: 10.0002px solid #e4e9c8;
    box-shadow: 0px 0px 20px rgba(228, 233, 200, 0.5);
    z-index: 999;
    transition: left 0.5s ease 0s, background 0.5s ease 0s,
      border-color 0.5s ease 0s, transform 0.5s ease 0s;
  }
  & .toggle-handle .crater {
    position: absolute;
    border: 10.0002px solid #e4e9c8;
    border-radius: 50%;
  }
  & .toggle-handle .crater-one {
    top: 10%;
    left: 3%;
    height: 40%;
    width: 40%;
  }
  & .toggle-handle .crater-two {
    right: 6%;
    top: 6%;
  }
  & .toggle-handle .crater-three {
    right: 24%;
    bottom: 10%;
    height: 30%;
    width: 30%;
  }
  & .mini-cloud {
    height: 40%;
    width: auto;
    position: absolute;
    left: 20%;
    top: 38%;
    opacity: 0;
    z-index: 999;
    transition: opacity 0.25s ease 0s, left 0.5s ease 0s;
  }
  & .star {
    position: absolute;
    background: #ffffff;
    opacity: 1;
    border-radius: 50%;
    transform: scale(1);
    transition: transform 0.5s ease;
  }
  & .star-small {
    height: 4%;
    width: 2%;
  }
  & .star-medium {
    height: 6%;
    width: 3%;
  }
  & .star-large {
    height: 8%;
    width: 4%;
  }
  & .star-one {
    top: 12%;
    left: 45%;
    transition-delay: 0.4s;
  }
  & .star-two {
    top: 72%;
    left: 50%;
    transition-delay: 0.35s;
  }
  & .star-three {
    top: 30%;
    left: 62%;
    transition-delay: 0.3s;
  }
  & .star-four {
    top: 56%;
    left: 68%;
    transition-delay: 0.25s;
  }
  & .star-five {
    top: 8%;
    left: 76%;
    transition-delay: 0.2s;
  }
  & .star-six {
    top: 40%;
    left: 86%;
    transition-delay: 0.15s;
  }
  & .star-seven {
    top: 70%;
    left: 82%;
    transition-delay: 0.1s;
  }

  .toggle-handle-day {
    left: 144.48px !important;
    background: #ffe06e !important;
    border-color: #e2c448 !important;
    transform: rotate(90deg);
  }

  -day {
    background: #9fe4fc;
    border-color: #86c4d8;
  }

  .off {
    background: #fafafa !important;
    transition: background 0.5s ease 0s;
  }

  .star-day {
    opacity: 0 !important;
    transform: scale(0) !important;
  }

  .crater-day {
    width: 0% !important;
    height: 0% !important;
    border: 0px solid transparent !important;
    transition: height 0.5s ease 0s, width 0.5s ease 0s, border 0.5s ease 0s;
  }

  .cloud-day {
    opacity: 1 !important;
    left: 40% !important;
  }
`;
