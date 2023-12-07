/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyImg({ alt, src, className }) {
  return <LazyLoadImage alt={alt} src={src} className={className} />;
}

export default LazyImg;
