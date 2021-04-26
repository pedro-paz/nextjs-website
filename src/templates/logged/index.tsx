import React from "react";
import SideMenu from "../../components/sidemenu";

const LoggedTemplate: React.FC = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      {children}
    </div>
  );
};

export default LoggedTemplate;
