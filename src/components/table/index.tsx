import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  li {
    border-radius: 3px;
    padding: 17px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    border-radius: 12px;
  }
  .table-header {
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    font-size: 15px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.card.background};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
    font-weight: 500;
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row {
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;
