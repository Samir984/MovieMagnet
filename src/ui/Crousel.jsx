/* eslint-disable react/prop-types */
import useFetch from "../hooks/usefetch";
import MoviePoster from "./MoviePoster";

function Crousel({ endPoint,active }) {
  const { isLoading, data, isError } = useFetch(endPoint);

  return (
    <div className="bg-black mt-3 w-full h-64 phone:h-80 laptop:h-[360px]   flex gap-1 phone:gap-2 laptop:gap-4 p-2 overflow-y-scroll">
      {data &&
        data?.results.map((movie) => {
          return <MoviePoster key={movie.id} movieData={movie} active={active}/>;
        })}
    </div>
  );
}

export default Crousel;

// trending/all/day?language=en-US
