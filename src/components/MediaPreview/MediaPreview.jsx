import { Close, CloseRounded } from "@mui/icons-material";
import React from "react";

const MediaPreview = ({ src, closePreview }) => {
  if (!src) return null;
  return (
    <div className="mediaPreview">
      <CloseRounded onClick={closePreview} />
      <img src={src} alt="Preview" />
    </div>
  );
};

export default MediaPreview;
