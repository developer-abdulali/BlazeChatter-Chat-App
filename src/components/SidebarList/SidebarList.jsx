import { CircularProgress } from "@mui/material";
import React from "react";
import SidebarListItem from "../SidebarListItem/SidebarListItem";

const SidebarList = ({ title, data }) => {
  if (!data) {
    return <CircularProgress />;
  }
  return (
    <div className="sidebar__chat--container">
      <h2>{title}</h2>
      {data.map((item) => (
        <SidebarListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SidebarList;
