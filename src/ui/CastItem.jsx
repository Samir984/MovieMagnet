/* eslint-disable no-unused-vars */

import { useState } from "react";
import LazyImg from "./LazyImg";
import { useImgConfig } from "../context/ImageConfig";

/* eslint-disable react/prop-types */
function CastItem({ cast }) {
  const { imgConfig } = useImgConfig();
  const profileUrl = imgConfig.profile + cast?.profile_path;

  return (
    <div className="flex flex-col h-full flex-shrink-0 w-44 items-center">
      <LazyImg
        src={profileUrl.includes("null") ? null : profileUrl}
        alt={cast.name}
        className="rounded-full w-40  border-2 h-40 "
      />
      <div className="text-center">
        <div className="text-cyan-50 font-medium line-clamp-1">{cast.name}</div>
        <div className="text-gray-400 font-light line-clamp-2">
          {cast.character}
        </div>
      </div>
    </div>
  );
}

export default CastItem;
