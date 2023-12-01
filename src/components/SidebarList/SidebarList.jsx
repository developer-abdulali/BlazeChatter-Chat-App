import { CircularProgress } from "@mui/material";
import React from "react";

const SidebarList = ({ title, data }) => {
  if (!data) {
    return <CircularProgress />;
  }
  return (
    <div className="sidebar__chat--container">
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarList;
