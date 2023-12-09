import { Link, useSearchParams } from "react-router-dom";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import { useState } from "react";
import MoviePoster from "../../ui/MediaPoster";

function Search() {
  const [searchParam] = useSearchParams();
  const queryString = searchParam.get("q");
  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isError, totalPage } = useInfiniteFetch(
    `search/multi?query=${queryString}&include_adult=true&language=en-US&page=${pageNum}`
  );
  console.log(data, pageNum, totalPage);

  return (
    <div className="mt-12 m-1">
      <div className="text-2xl font-medium">
        Search:&nbsp; <q>{queryString}</q>
      </div>
      {data && (
        <div className="m-2 p-2 grid grid-cols-1 phone:grid-cols-2 laptop:grid-cols-4 bg-gray-900 justify-items-center  gap-3 ">
          {data.map((data) => {
            return <MoviePoster key={data.id} movieData={data} type="search" />;
          })}
        </div>
      )}
      {isLoading && <div>loading...</div>}
      {isError && <div>{isError}</div>}
    </div>
  );
}

export default Search;

