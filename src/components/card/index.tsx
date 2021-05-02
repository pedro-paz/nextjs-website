import { CSSProperties } from "react";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  min-height: 203px;
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  background: ${({ theme }) => theme.card.background};
  transition: all 0.5s ease;

  & header {
    margin: 15px 0px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    & section {
      color: #bcbcbc;
      margin-top: 3px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
      & > span:not(:last-child) {
        margin-right: 20;
      }
    }
  }
`;
