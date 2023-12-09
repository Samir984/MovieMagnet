import { useParams } from "react-router-dom";
import Crousel from "../../ui/Crousel";

function Similar() {
  const { media_type, id } = useParams();
  const endPoint = `${media_type}/${id}/similar?language=en-US&page=1`;

  return (
    <div className="my-14 mx-2">
      <h2 className="text-2xl font-medium pt-4">Similar {media_type==='tv'?'Tv Shows':"Movies"}</h2>
      <Crousel
        endPoint={endPoint}
        active={media_type}
        caller="recommendation"
      />
    </div>
  );
}

export default Similar;
