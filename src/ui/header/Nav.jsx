import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import SearchQuery from "./SearchQuery";
import MobileNav from "./MobileNav";

function Nav() {
  const [movieNav, setMovieNav] = useState(() =>
    window.innerWidth <= 540 ? true : false
  );
  const [searchAction, setSeachAction] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

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
        className={`flex font-medium text-cyan-50 gap-8 transition-all duration-1000 ${
          movieNav
            ? "absolute top-[60px] bg-gray-800 p-2 w-full items-center gap-8 z-10 flex-col "
            : "  "
        } ${openMobileNav ? "left-0 " : "-left-[600px] "}}`}
      >
        <li className="hover:text-gray-300">
          <Link to="/movie">Movies</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="/tv">TV Shows</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link to="bookmarks">Favourites</Link>
        </li>
      </ul>

      <div className="flex justify-center ">
        <div className="px-4" onClick={() => setSeachAction((prev) => !prev)}>
          {!searchAction && <IoSearch size={24} color="#2563eb" />}
          {searchAction && <RxCross1 size={24} color="green" />}
        </div>

        {searchAction && <SearchQuery />}

        {movieNav && (
          <MobileNav
            setOpenMobileNav={setOpenMobileNav}
            openMobileNav={openMobileNav}
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;
