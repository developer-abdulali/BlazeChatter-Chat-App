import { CircularProgress } from "@mui/material";
import React from "react";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import { CancelOutlined, SearchOutlined } from "@mui/icons-material";

const SidebarList = ({ title, data }) => {
  if (!data) {
    return <CircularProgress />;
  }
  if (!data.length && title === "Search Results") {
    return (
      <div className="no-result">
        <div>
          <SearchOutlined />
          <div className="cancel-root">
            <CancelOutlined />
          </div>
        </div>
        <h2>No {title}</h2>
      </div>
    );
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
