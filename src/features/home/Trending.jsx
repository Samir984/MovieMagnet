import { useState } from "react";
import Crousel from "../../ui/Crousel";
import Toggle from "../../ui/Toggle";

function Trending() {
  const [active, setActive] = useState("Day");
  const endPoint = `trending/all/${active.toLowerCase()}?language=en-US`;

  return (
    <div className="my-6 mx-2">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl font-medium">Trending</h2>
        <Toggle
          active={active}
          setActive={setActive}
          filter={["Day", "Week"]}
        />
      </div>
      <Crousel endPoint={endPoint} />
    </div>
  );
}
// trending/all/day?language=en-US

export default Trending;
