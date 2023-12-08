/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useImgConfig } from "../context/ImageConfig";

import { formatDate } from "../utils/helper";
import LazyImg from "./LazyImg";

function MoviePoster({ movieData, active }) {
  const { imgConfig } = useImgConfig();
  const posterUrl = imgConfig.posterLQ + movieData.poster_path;
  const type = active?.toLowerCase();

  return (
    <Link to={`${movieData.media_type || type}/${movieData.id}`}>
      <div className="relative w-32 phone:w-40  laptop:w-44 h-full ">
        <div className="flex flex-col gap-2 h-full justify-center">
          <LazyImg
            src={posterUrl}
            alt={movieData.original_title}
            className="h-11/12 border"
            loading="lazy"
          />

          <div className="flex flex-col ">
            <h3 className="text-white font-semibold line-clamp-1">
              {movieData?.title || movieData?.name}
            </h3>
            <div className="text-gray-400">
              {formatDate(movieData?.release_date || movieData.first_air_date)}
            </div>
          </div>
          <div className="absolute bg-white w-8 h-8 rounded-full flex justify-center items-center bottom-20">
            <span>{Number(movieData.vote_average).toFixed(1)}</span>
          </div>

          <div className="absolute">
            <span>{}</span>
            <span>{}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MoviePoster;
