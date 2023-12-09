import { useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

function useInfiniteFetch(url) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function movieData() {
      try {
        setIsLoading(true);
        const data = await getApiData(`${url}`);
        setData(data.results);
        setTotalPage(data.total_pages);
        setIsLoading(false);
      } catch (err) {
        setIsError(err);
      }
    }
    movieData();
  }, [url]);

  return { data, isLoading, isError, totalPage };
}

export default useInfiniteFetch;

//search/multi?include_adult=false&language=en-US&page=1
