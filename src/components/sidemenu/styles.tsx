import styled from "styled-components";

export const ContainerSideMenu = styled.div`
  min-width: 250px;
  width: 250px;

  margin: 30px 0 30px 10px;
  border-radius: 17px;
  padding: 25px 0;
  position: relative;
  box-shadow: ${({ theme }) => theme.sideMenu.boxShadow};
  background: ${({ theme }) => theme.sideMenu.background};
  color: ${({ theme }) => theme.sideMenu.color};
`;
