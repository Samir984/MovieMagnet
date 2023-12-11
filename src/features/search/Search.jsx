import { useSearchParams } from "react-router-dom";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import { useEffect, useState } from "react";
import MoviePoster from "../../ui/MediaPoster";

function Search() {
  const [searchParam] = useSearchParams();
  const queryString = searchParam.get("q");
  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isError, totalPage } = useInfiniteFetch(
    `search/multi?query=${queryString}&include_adult=true&language=en-US&page=${pageNum}`,
    pageNum
  );
  useEffect(() => {
    setPageNum(1);
  }, [queryString]);

  console.log(pageNum, totalPage, data);

  return (
    <div className="mt-12 m-1">
      <div className="text-xl font-medium mb-8 m-4">
        Search:&nbsp; <q>{queryString}</q>
      </div>
      {data && (
        <div className="m-2 p-2 grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 justify-items-center  gap-3 ">
          {data.map((data) => {
            return <MoviePoster key={data.id} movieData={data} type="search" />;
          })}
        </div>
      )}

      {!isError && (
        <div
          className="text-center font-medium "
          onClick={() =>
            setPageNum((prev) => (prev < totalPage ? prev + 1 : prev))
          }
        >
          <span className="inline-block p-2 bg-slate-600 text-white ">
            {isLoading && pageNum !== totalPage
              ? "Loading..."
              : pageNum === totalPage
              ? "End"
              : "Load More"}
          </span>
        </div>
      )}
      {isError && <div>Error Occur while fetching data</div>}
    </div>
  );
}

export default Search;
