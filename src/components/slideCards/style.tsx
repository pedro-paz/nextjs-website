import styled from "styled-components";

export const StyledStyleCards = styled.div`
  position: relative;
  height: 100%;
  & .card {
    width: 300px !important;
    border-radius: 30px;
    height: 100%;
    position: relative;
    transition: background-color 0.1s ease, transform 2s ease, height 2s ease,
      left 2s ease !important;
    background: ${({ theme }) => theme.card.solidBackground};
    opacity: 1 !important;
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
