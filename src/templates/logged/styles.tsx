import styled from "styled-components";

export const StyledLoggedTemplate = styled.div`
  display: flex;

  & > section {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    clip-path: circle(0%);
    transition: all 0.5s ease;
  }
`;
