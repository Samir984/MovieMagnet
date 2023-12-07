// top_rated?language=en-US&page=1
import { useState } from "react";
import Crousel from "../../ui/Crousel";
import Toggle from "../../ui/Toggle";

function TopRated() {
  const [active, setActive] = useState("Movie");
  const endPoint = `${active.toLowerCase()}/top_rated?language=en-US&page=1`;

  return (
    <div className="my-6 mx-2">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl font-medium">TopRated</h2>
        <Toggle
          active={active}
          setActive={setActive}
          filter={["Movie", "Tv"]}
        />
      </div>
      <Crousel endPoint={endPoint} />
    </div>
  );
}
export default TopRated;
