import styled from "styled-components";
import { Card } from "../../components/card";

export const StyledDashboardContent = styled.div`
  .animate {
    width: 100%;
    transform: scale(0.75);
    opacity: 0;
  }
  & > section {
    display: flex;
    margin: 0 -15px;
    margin-bottom: 30px;
    & > * {
      margin: 0 15px;
    }
  }
  ${Card} {
    transition: 0.1s ease all;
  }
`;
