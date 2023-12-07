/* eslint-disable react/prop-types */

import { useState } from "react";

function Toggle({ active, setActive, filter }) {
  return (
    <div className="flex w-44 h-auto bg-sky-500 rounded-2xl  items-center justify-evenly p-1">
      <div
        className={`flex-1 cursor-pointer text-center rounded-2xl  ${
          active === "Day" ? "bg-white " : "text-white"
        }`}
        onClick={() => setActive(`${filter[0]}`)}
      >
        {filter[0]}
      </div>
      <div
        className={`flex-1 cursor-pointer text-center  rounded-2xl ${
          active === "Week" ? "bg-white " : "text-white"
        }`}
        onClick={() => setActive(`${filter[1]}`)}
      >
        {filter[1]}
      </div>
    </div>
  );
}

export default Toggle;
