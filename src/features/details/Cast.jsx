import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import CastItem from "../../ui/CastItem";

function Cast() {
  const { media_type, id } = useParams();
  const { isLoading, data, isError } = useFetch(
    `${media_type}/${id}/credits?language=en-US`
  );

  return (
    <div className="m-2 laptop:h-60 h-44 ">
      <h2 className="text-2xl font-medium p-2">Cast</h2>
      <div className="w-full h-full bg-gray-800 overflow-y-scroll p-1 flex gap-2">
        {data &&
          data.cast.map((cast) => {
            return <CastItem cast={cast} key={cast.id} />;
          })}

        {isLoading && "Loading..."}
        {isError && "Error ocuured"}
      </div>
    </div>
  );
}

export default Cast;
// movie/299534/credits?language=en-US
