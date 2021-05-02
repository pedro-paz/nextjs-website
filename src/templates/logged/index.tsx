import React from "react";
import SideMenu from "../../components/sidemenu";
import { ServiceProvider } from "../../contexts/service";
import { useThemes } from "../../contexts/theme";
import DashboardService from "../../services/dashboard.service";
import MenuService from "../../services/menu.service";
import { StyledLoggedTemplate } from "./styles";

const LoggedTemplate: React.FC = ({ children }) => {
  const { theme } = useThemes();
  return (
    <StyledLoggedTemplate theme={theme}>
      <ServiceProvider
        menuService={new MenuService()}
        dashboardService={new DashboardService()}
      >
        <SideMenu />
        {children}
      </ServiceProvider>
    </StyledLoggedTemplate>
  );
};

export default LoggedTemplate;
