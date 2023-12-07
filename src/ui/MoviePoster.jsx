/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useImgConfig } from "../context/ImageConfig";

import { formatDate } from "../utils/helper";

function MoviePoster({ movieData }) {
  const { imgConfig } = useImgConfig();
  const posterUrl = imgConfig.poster + movieData.poster_path;
  console.log(movieData, movieData.title, movieData?.release_date);
  return (
    <Link to={`${movieData.media_type}/${movieData.id}`}>
      <div className="flex w-32 phone:w-40 laptop:w-44 h-full ">
        <div className="flex flex-col gap-2 h-full justify-center">
          <img
            src={posterUrl}
            alt={movieData.original_title}
            className="h-11/12"
          />
          <div className="flex flex-col ">
            <h3 className="text-white font-semibold line-clamp-1">
              {movieData?.title || " Data Not Found"}
            </h3>
            <div className="text-gray-400">
              {formatDate(movieData?.release_date || "Data Not Found")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MoviePoster;
