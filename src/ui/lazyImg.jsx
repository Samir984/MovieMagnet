/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import noPoster from "./../assets/no-poster.png";
function LazyImg({ alt, src, className }) {
  return (
    <LazyLoadImage alt={alt} src={src || noPoster} className={className} />
  );
}

export default LazyImg;
