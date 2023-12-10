/* eslint-disable react/prop-types */
import { formatDate } from "../utils/helper";
import LazyImg from "./LazyImg";

function Poster({ posterUrl, movieData, type }) {
  return (
    <div
      className={`relative  ${
        type === "search" ? "w-60 tablet:w-full" : "h-full w-32 phone:w-40 laptop:w-48 "
      }  `}
    >
      <div className="flex flex-col gap-2 ">
        <LazyImg
          src={posterUrl.includes("null") ? null : posterUrl}
          alt={movieData.original_title}
          className={`border ${!type && "w-full "}`}
          type="poster"
        />

        <div className="flex flex-col ">
          <h3 className={`${!type && "text-white"} font-semibold line-clamp-1`}>
            {movieData?.title || movieData?.name}
          </h3>
          <div className="text-gray-400 line-clamp-1">
            {formatDate(movieData?.release_date || movieData.first_air_date)}
          </div>
        </div>
        <div className="absolute bg-white w-8 h-8 rounded-full flex justify-center items-center bottom-20">
          <span>{Number(movieData.vote_average).toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default Poster;
