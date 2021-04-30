import styled from "styled-components";

export const StyledStyleCards = styled.div`
  position: relative;
  height: 100%;
  & .card {
    width: 300px;
    border-radius: 30px;
    height: 100%;
    position: relative;
    transition: all 2s ease;
  }

  & .card-decorator {
    position: absolute;
    transform: rotate(0);
    left: 0;
    width: 300px;
    transform-origin: right bottom;
    border-radius: 30px;
    bottom: 0;
  }
`;
