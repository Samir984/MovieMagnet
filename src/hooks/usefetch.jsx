import { useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function movieData() {
      setIsLoading(true);
      setData(null);
      setIsError(null);
      try {
        const data = await getApiData(`${url}`);
        setData(data);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    }
    movieData();
  }, [url]);

  return { isLoading, data, isError };
}

export default useFetch;
