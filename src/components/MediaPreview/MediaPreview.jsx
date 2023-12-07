import { CloseRounded } from "@mui/icons-material";
import React from "react";

const MediaPreview = ({ src, closePreview }) => {
  if (!src) return null;
  return (
    <div className="mediaPreview">
      <CloseRounded onClick={closePreview} />
      <img src={src} alt="Preview" />
      {/* <Image src={src} alt="Preview" width={1100} height={600} /> */}
    </div>
  );
};

export default MediaPreview;
