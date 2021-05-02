import styled from "styled-components";
import { Card } from "../../components/card";

export const StyledDashboardContent = styled.div`
  ${Card} {
    width: 100%;
    transform: scale(0.75);
    opacity: 0;
  }
  section {
    display: flex;
  }
`;
