/* eslint-disable react/prop-types */
import useFetch from "../hooks/usefetch";
import MoviePoster from "./MediaPoster";

function Crousel({ endPoint, active, caller = false }) {
  const { isLoading, data, isError } = useFetch(endPoint);

  return (
    <div className="bg-gray-950 mt-3 w-full h-64 phone:h-80 laptop:h-[360px]  flex gap-1  phone:gap-2 laptop:gap-4 p-2 overflow-y-scroll">
      {data && data?.results.length === 0 ? (
        <div className="text-white text-bold  font-mono text-2xl uppercase w-full flex justify-center items-center">
          {caller && `${caller} not found for this movie`}
        </div>
      ) : (
        true &&
        data?.results?.map((movie) => {
          return (
            <MoviePoster key={movie.id} movieData={movie} active={active} />
          );
        })
      )}

      {isLoading && "Loading..."}
      {isError && "Error occure"}
    </div>
  );
}

export default Crousel;

// trending/all/day?language=en-US
