import { useCallback, useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

function useInfiniteFetch(url, page) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const fetchNextPage = useCallback(
    async function (url) {
      console.log("sn");
      try {
        setIsLoading(true);
        console.log("n");
        const nextData = await getApiData(`${url}`);
        setData((prevData) => [...prevData, ...nextData.results]);
        setIsLoading(false);
      } catch (err) {
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
        console.log("o");
        setData(data.results);
        setTotalPage(data.total_pages);
        setIsLoading(false);
      } catch (err) {
        setIsError(err);
      }
    }

    if (page === 1) {
      fetchData();
    } else {
      console.log("call");
      fetchNextPage(url); 
    }
  }, [url, page, fetchNextPage]);

  return { data, isLoading, isError, totalPage };
}

export default useInfiniteFetch;
