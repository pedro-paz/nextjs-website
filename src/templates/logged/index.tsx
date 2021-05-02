import React from "react";
import SideMenu from "../../components/sidemenu";
import { ServiceProvider } from "../../contexts/service";

import DashboardService from "../../services/dashboard.service";
import MenuService from "../../services/menu.service";
import { StyledLoggedTemplate } from "./styles";

const LoggedTemplate: React.FC = ({ children }) => {
  return (
    <StyledLoggedTemplate>
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
