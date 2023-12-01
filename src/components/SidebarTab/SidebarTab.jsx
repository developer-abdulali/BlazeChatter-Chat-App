import React from "react";

const SidebarTab = ({ onClick, isActive, children }) => {
  return (
    <div
      onClick={onClick}
      className={`${isActive ? "sidebar__menu--selected" : ""}`}
    >
      {children}
    </div>
  );
};

export default SidebarTab;
