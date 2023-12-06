import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";

import SearchQuery from "./SearchQuery";

function Nav() {
  const [movieNav, setMovieNav] = useState(() =>
    window.innerWidth <= 540 ? true : false
  );
  const [searchAction, setSeachAction] = useState(false);
  const [openMovieNav, setOpenMovienav] = useState(false);

  useEffect(() => {
    const handleResize = function () {
      if (window.innerWidth <= 540) {
        setMovieNav(true);
      } else {
        setMovieNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex gap-4">
      <ul
        className={`flex font-medium text-cyan-50 gap-8 transition-all duration-300 ${
          movieNav
            ? "absolute left-0  bg-gray-800 p-2 w-full gap-8 z-10 "
            : " flex  items-center"
        } ${openMovieNav ? "top-[50px] " : "top-[-50px] "}}`}
      >
        <Link to="/movie">
          <li className="hover:text-gray-300">Movies</li>
        </Link>
        <Link to="/tv">
          <li className="hover:text-gray-300">TV Shows</li>
        </Link>
        <Link to="bookmarks">
          <li className="hover:text-gray-300">Favourites</li>
        </Link>
      </ul>

      <div className="flex justify-center ">
        <div className="px-4" onClick={() => setSeachAction((prev) => !prev)}>
          {!searchAction && <IoSearch size={24} color="#2563eb" />}
          {searchAction && <RxCross1 size={24} color="green" />}
        </div>

        {searchAction && <SearchQuery />}

        {movieNav && (
          <div onClick={() => setOpenMovienav((prev) => !prev)}>
            {!openMovieNav && <IoMdMenu size={24} color="#2563eb" />}
            {openMovieNav && <RxCross1 size={24} color="red" />}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
