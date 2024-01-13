import { useCallback, useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

function useInfiniteFetch(url, page) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const fetchNextPage = useCallback(
    async function (url) {
      try {
        setIsLoading(true);
        const nextData = await getApiData(`${url}`);
        setData((prevData) => [...prevData, ...nextData.results]);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(err);
      }
    },
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getApiData(`${url}`);
        setData(data.results);
        setTotalPage(data.total_pages);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(err);
      }
    }

    if (page === 1) {
      fetchData();
    } else {
      fetchNextPage(url);
    }
  }, [url, page, fetchNextPage]);

  return { data, isLoading, isError, totalPage };
}

export default useInfiniteFetch;
