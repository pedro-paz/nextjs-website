import styled from "styled-components";

export const GhostButton = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  &:after {
    opacity: 0;
    background: ${({ theme }) => theme.ghostButton.background};
    position: absolute;
    border-radius: 8px;
    top: -8px;
    bottom: -8px;
    right: -8px;
    left: -8px;
    content: "";
    transition: 0.3s ease all;
  }
  &:hover:after {
    opacity: 0.3;
  }
`;
