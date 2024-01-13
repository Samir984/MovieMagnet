import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import MoviePoster from "../../ui/MediaPoster";

function Explore() {
  const { media_type } = useParams();
  const [pageNum, setPageNum] = useState(() => {
  
    return 1;
  });
  useEffect(() => {
    setPageNum(1);
  }, [media_type]);

  const filterUrl = `discover/${media_type}?include_adult=true&include_video=true&language=en-US&page=${pageNum}&sort_by=popularity.desc`;

  const { data, isLoading, isError, totalPage } = useInfiniteFetch(
    filterUrl,
    pageNum
  );



  const exploreLable = media_type === "movie" ? "Movie" : "Tv Shows";
  return (
    <div className="m-2 mt-12 p-2">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="text-2xl font-mono  font-bold">
          Explore:&nbsp;<q>{exploreLable}</q>
        </div>
      </div>

      {data && (
        <div className="m-2 p-2 grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 justify-items-center  gap-3 ">
          {data.map((data) => {
            return (
              <MoviePoster
                key={data.id}
                movieData={data}
                type="search"
                active={media_type}
              />
            );
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

export default Explore;
