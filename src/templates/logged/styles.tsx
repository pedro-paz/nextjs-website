import styled from "styled-components";
import { useThemes } from "../../contexts/theme";
import Theme from "../../entities/Theme";

export interface StyledLoggedTemplateProps {
  theme: Theme;
}

export const StyledLoggedTemplate = styled.div`
  background: ${({ theme }) => theme.Background};
  display: flex;
`;
