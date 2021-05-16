import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  & > li {
    border-radius: 3px;
    border-radius: 12px;
    display: flex;
    opacity: 0;
    overflow-y: hidden;
    box-sizing: border-box;
    margin-top: -20px;
  }
  & > li:not(:last-child) {
    margin-bottom: 17px;
  }
  & > li > div {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    width: 100%;
  }
  & > li > div > div {
    height: 20px;
  }
  .table-header {
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: ${({ theme }) => theme.card.boxShadow};

    letter-spacing: 0.03em;
    font-weight: 700;
    font-weight: 600;
    transition: margin-top 0.7s ease, opacity 1s ease,
      background-color 0.1s ease;
  }
  .table-header > div {
    opacity: 0.8;
  }
  .table-row {
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    font-weight: 600;

    transition: margin-top 0.7s ease, opacity 1s ease,
      background-color 0.1s ease;
  }
  & > li > div > div {
    flex: 1;
  }
  /* & > li > div > div:nth-child(1) {
    flex-basis: 20%;
  }
  & > li > div > div:nth-child(2) {
    flex-basis: 40%;
  }
  & > li > div > div:nth-child(3) {
    flex-basis: 25%;
  }
  & > li > div > div:nth-child(4) {
    flex-basis: 25%;
  } */
`;
