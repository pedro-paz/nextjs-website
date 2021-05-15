import styled from "styled-components";

export const Title = styled.h1``;

export const Subtitle = styled.h2`
  font-weight: 800;
  font-size: 34px;
  margin: 0;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.fontColor};
`;
