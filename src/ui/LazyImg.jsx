/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import noPoster from "../assets/no-poster.png";
import noAvatar from "../assets/avatar.png";

function LazyImg({ alt, src, className, type }) {
  const notFoundImg = type === "poster" ? noPoster : noAvatar;
  return (
    <LazyLoadImage alt={alt} src={src || notFoundImg} className={className} />
  );
}

export default LazyImg;
