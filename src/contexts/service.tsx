import React, { createContext, useContext } from "react";
import IMenuService from "../interfaces/IMenuService";

interface ServicesHook {
  menuService: IMenuService;
}

const ServicesContext = createContext<ServicesHook>(null);

const useServices = () => {
  const context = useContext<ServicesHook>(ServicesContext);
  if (!context)
    throw new Error("useServices must be use within a SelectRangeProvider");
  return context;
};

export const ServiceProvider: React.FC<ServicesHook> = ({
  menuService,
  children,
}) => {
  return (
    <ServicesContext.Provider value={{ menuService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export { ServicesContext, useServices };
