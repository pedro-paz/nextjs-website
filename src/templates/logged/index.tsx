import React from "react";
import SideMenu from "../../components/sidemenu";
import { ServiceProvider } from "../../contexts/service";
import DashboardService from "../../services/dashboard.service";
import MenuService from "../../services/menu.service";

const LoggedTemplate: React.FC = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <ServiceProvider
        menuService={new MenuService()}
        dashboardService={new DashboardService()}
      >
        <SideMenu />
        {children}
      </ServiceProvider>
    </div>
  );
};

export default LoggedTemplate;
