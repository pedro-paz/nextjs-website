import { CSSProperties } from "react";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  min-height: 203px;
  box-shadow: 0 0 40px 3px #00000073;
  background: #0000006b;

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
