import ShowDetailsBanner from "./ShowDetailsBanner";
import Cast from "./Cast";
import Recommendations from "./Recommendations";
import Similar from "./Similar";

function Details() {

  return (
    <div className="">
      <ShowDetailsBanner />
      <Cast />
      <Similar />
      <Recommendations />
    </div>
  );
}

export default Details;
