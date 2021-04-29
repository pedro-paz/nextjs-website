import React, { createContext, useContext } from "react";
import IDashboardService from "../interfaces/IDashboardService";
import IMenuService from "../interfaces/IMenuService";

interface ServicesHook {
  menuService: IMenuService;
  dashboardService: IDashboardService;
}

const ServicesContext = createContext<ServicesHook>(null);

const useServices = () => {
  const context = useContext<ServicesHook>(ServicesContext);
  if (!context)
    throw new Error("useServices must be use within a SelectRangeProvider");
  return context;
};

export const ServiceProvider: React.FC<ServicesHook> = (props) => {
  const { children } = props;
  return (
    <ServicesContext.Provider value={props}>
      {children}
    </ServicesContext.Provider>
  );
};

export { ServicesContext, useServices };
