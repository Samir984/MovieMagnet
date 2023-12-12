import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import LazyImg from "../../ui/LazyImg";
import { useImgConfig } from "../../context/ImageConfig";
import { GoPlay } from "react-icons/go";
import { useState } from "react";
import VideoPopUp from "../../ui/VideoPopUp";
import { formatDate, formatTime } from "../../utils/helper";
import { useEffect } from "react";

function ShowDetailsBanner() {
  const [openVideoPopup, setOpenVideoPopup] = useState(false);
  const { imgConfig } = useImgConfig();
  const { media_type, id } = useParams();
  const { isLoading, data, isError, FetchAgainData } = useFetch(
    `${media_type}/${id}?language=en-US`,
    true
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const posterUrl = imgConfig.posterHQ + data?.poster_path;
  const trailerKey = FetchAgainData?.results[0]?.key;

  return (
    <div className="p-2 min-h-[900px] phone:min-h-[400px] overflow-hidden">
      {openVideoPopup && (
        <VideoPopUp closePopUp={setOpenVideoPopup} videoKey={trailerKey} />
      )}
      {isLoading && "Loading..."}
      {isError && "Error occure"}
      {data && (
        <div className="flex laptop:gap-4 gap-3 flex-col phone:flex-row laptop:items-center ">
          <LazyImg
            src={posterUrl}
            alt={data.original_name || data.title}
            className="w-64 self-center"
          />
          <div className="flex flex-col gap-3 self-center ">
            <div className="text-2xl font-semibold">
              {data.original_name || data.title}
            </div>
            <div className="text-zinc-600">{data.tagline}</div>
            <div className="flex gap-2 flex-wrap">
              {data.genres?.map((genre, i) => {
                return (
                  <span
                    className="px-2 bg-sky-600 text-white inline-block text-sm rounded-lg"
                    key={i}
                  >
                    {genre?.name}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full inline-block p-4 text-black bg-slate-200">
                {Number(data.vote_average)?.toFixed(1)}
              </span>
              <div
                className="flex items-center gap-4 hover:text-red-600 transition-all duration-300"
                onClick={() => setOpenVideoPopup(true)}
              >
                <GoPlay size={52} />
                <span className="font-mono text-2xl">Watch Trailer</span>
              </div>
            </div>
            <div className="max-w-3xl">
              <h3 className="mt-2 font-medium text-xl">Overview</h3>
              <p>{data.overview}</p>
            </div>

            <div className="flex gap-4 flex-wrap ">
              <div>
                <span className="font-medium text-lg">Status:&nbsp;</span>{" "}
                {data.status}
              </div>
              <div>
                <span className="font-medium text-lg">
                  Released Date:&nbsp;
                </span>{" "}
                {formatDate(data.release_date)}
              </div>
              <div>
                <span className="font-medium text-lg">Runtime:&nbsp;</span>{" "}
                {formatTime(data.runtime)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowDetailsBanner;

// import React, { useEffect } from 'react';

// const ScrollToTopOnURLChange = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]); // Scroll to the top whenever the pathname changes

//   return null; // This component doesn't render anything
// };

// export default ScrollToTopOnURLChange;
