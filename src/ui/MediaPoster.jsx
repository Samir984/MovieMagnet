/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useImgConfig } from "../context/ImageConfig";
import Poster from "./Poster";

function MoviePoster({ movieData, active, type = false }) {
  const { imgConfig } = useImgConfig();
  const posterUrl = imgConfig.posterLQ + movieData.poster_path;
  const activeMedia = active?.toLowerCase();

  return (
    <Link to={`/${movieData.media_type || activeMedia}/${movieData.id}`}>
      <Poster posterUrl={posterUrl} movieData={movieData} type={type} />
    </Link>
  );
}

export default MoviePoster;
