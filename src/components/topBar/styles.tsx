import styled from "styled-components";
import Input from "../input";

export const StyledTopBar = styled.section`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  & > div:first-child {
    flex-grow: 1;
    margin-right: 25px;
  }
  & > *:not(:last-child) {
    margin-right: 20px;
  }

  & .user-icon {
    font-size: 16px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-weight: 600;

    & > div {
      background: ${({ theme }) => theme.card.background};
      box-shadow: ${({ theme }) => theme.button.boxShadow};
      color: ${({ theme }) => theme.fontColor};
      justify-content: center;
      align-items: center;
      display: flex;
      width: 35px;
      height: 35px;
      border-radius: 20px;
    }
  }
`;
