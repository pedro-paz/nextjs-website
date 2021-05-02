import React from "react";
import { PageContainer } from "../../components/pageContainer";
import SideMenu from "../../components/sidemenu";
import { TopBar } from "../../components/topBar";
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
        <PageContainer>
          <TopBar />
          {children}
        </PageContainer>
      </ServiceProvider>
    </StyledLoggedTemplate>
  );
};

export default LoggedTemplate;
