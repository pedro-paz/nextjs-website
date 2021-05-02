import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  font-family: Nunito;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.input.color};
  box-shadow: ${({ theme }) => theme.input.boxShadow};
  background: ${({ theme }) => theme.input.background};
  transition: 0.5s ease all;
`;
