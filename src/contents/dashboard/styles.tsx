import styled from "styled-components";
import { Card } from "../../components/card";

export const StyledDashboardContent = styled.div`
  flex-grow: 1;
  ${Card} {
    width: 100%;
    transform: scale(0.75);
    opacity: 0;
    transition: transform 1s ease, opacity 1s ease;
  }
`;
