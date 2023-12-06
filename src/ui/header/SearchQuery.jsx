import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function SearchQuery() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handelSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handelSearch}>
      <div className="absolute left-0 top-[60px] bg-slate-100 w-full px-4 py-2 flex gap-4 items-center z-20 ">
        <IoSearch color="black" size={20} />
        <input
          type="text"
          className="w-11/12 bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <RxCross1
          className={`${query ? "visible " : " invisible"} `}
          onClick={() => setQuery("")}
          size={20}
        />
      </div>
    </form>
  );
}

export default SearchQuery;
