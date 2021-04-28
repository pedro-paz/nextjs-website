import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  & > header {
    font-weight: 800;
    font-size: 38px;
    margin-bottom: 30px;
    line-height: 35px;
  }
  padding: 33px 55px;
  color: #e2e2e2;

  & > section {
    display: flex;
    margin: 0 -15px;
    margin-bottom: 30px;
    & > * {
      margin: 0 15px;
    }
  }
`;
