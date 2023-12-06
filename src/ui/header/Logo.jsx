import { Link } from "react-router-dom";
import { IoIosMagnet } from "react-icons/io";

function Logo() {
  return (
    <Link to="/">
      <div className="text-3xl font-bold flex font-mono ">
        <span className="text-sky-500 ">MOVIE</span>

        <IoIosMagnet size={32} color="#0ea5e9"/>
      </div>
    </Link>
  );
}

export default Logo;
