/* eslint-disable react/prop-types */
import YouTube from "react-youtube";
import { GrClose } from "react-icons/gr";
function VideoPopUp({ closePopUp, videoKey }) {
  const opts = {
    width:'100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fixed flex top-0 left-0  w-full h-full z-20  ">
      <div className="relative h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[660px]">
        <GrClose
          size={24}
          className="m-2 text-red-600  bg-black p-[2px]"
          onClick={() => closePopUp((prev) => !prev)}
        />
        <YouTube videoId={videoKey} opts={opts} className="bg-white " />
      </div>
      <div
        className="fixed bg-gray-400 w-full h-full left-0 top-0 opacity-30 -z-10"
        onClick={() => closePopUp((prev) => !prev)}
      >
        {/* opacity layer */}
      </div>
    </div>
  );
}

export default VideoPopUp;
