import { useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

function useFetch(url, fetchThen = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [FetchAgainData, setFetchAgainData] = useState(null);
  const [isError, setIsError] = useState(null);

  async function fetchAgain(data, url) {
    const newUrl = url.replace("?", "/videos?");
    const moreData = await getApiData(`${newUrl}`);
    setFetchAgainData(moreData);
  }

  useEffect(() => {
    async function movieData() {
      setIsLoading(true);
      setData(null);
      setIsError(null);
      try {
        const data = await getApiData(`${url}`);
        setData(data);
        if (fetchThen) {
          fetchAgain(data, url);
        }
      } catch (err) {
        setIsError("error occur");
      } finally {
        setIsLoading(false);
      }
    }
    movieData();
  }, [url, fetchThen]);

  return { isLoading, data, isError, FetchAgainData };
}

// fetch('https://api.themoviedb.org/3/tv/series_id/videos?language=en-US', options)

// fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)

export default useFetch;
