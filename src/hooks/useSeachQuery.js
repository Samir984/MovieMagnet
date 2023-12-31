import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSeachQuery() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handelSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery("");
  }

  return { setQuery, query, handelSearch };
}

export default useSeachQuery;

// ('https://api.themoviedb.org/3/search/movie?query=avenger&include_adult=fals