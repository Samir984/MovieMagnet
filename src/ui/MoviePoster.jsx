/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useImgConfig } from "../context/ImageConfig";
import Poster from "./Poster";

function MoviePoster({ movieData, active }) {
  const { imgConfig } = useImgConfig();
  const posterUrl = imgConfig.posterLQ + movieData.poster_path;
  const type = active?.toLowerCase();

  return (
    <Link to={`/${movieData.media_type || type}/${movieData.id}`}>
      <Poster posterUrl={posterUrl} movieData={movieData} />
    </Link>
  );
}

export default MoviePoster;
