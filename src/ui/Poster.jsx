/* eslint-disable react/prop-types */
import { formatDate } from "../utils/helper";
import LazyImg from "./LazyImg";

function Poster({ posterUrl, movieData, type }) {
  return (
    <div
      className={`relative  ${
        type === "search"
          ? "w-60 h-[412px] tablet:w-[88%] tablet:h-full"
          : "h-full w-32 phone:w-[170px] laptop:w-[180px]  "
      }  `}
    >
      <div
        className={`flex flex-col gap-2 ${
          !type && "h-[190px] phone:h-64 laptop:h-[330px]"
        } ${type && "h-[86%] tablet:h-auto "}`}
      >
        <LazyImg
          src={posterUrl.includes("null") ? null : posterUrl}
          alt={movieData.original_title}
          className={`border ${!type && "w-full h-full"} ${
            type && "w-full h-full "
          }`}
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
        <div className="absolute bg-white w-8 h-8 rounded-full flex justify-center items-center bottom-28">
          <span>{Number(movieData.vote_average).toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default Poster;
