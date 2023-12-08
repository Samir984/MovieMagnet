import {  useEffect, useState } from "react";
import useFetch from "../../hooks/usefetch";
import { useImgConfig } from "../../context/ImageConfig";
import { randomNumGenerator } from "../../utils/helper";

function HeroSection() {
  const [bgImg, setBgImg] = useState("");
  const { imgConfig } = useImgConfig();
  const { isLoading, isError, data } = useFetch(
    "trending/all/day?language=en-US"
  );
  const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(myInterval);
  }, []);

  useEffect(() => {
    const randomNumber = randomNumGenerator(data?.results.length);
    if (randomNumber) {
      setBgImg(imgConfig.backdrop + data.results[randomNumber].backdrop_path);
    }
  }, [data, imgConfig.backdrop, trigger]);

  return (
    <div className="relative h-[360px] phone:h-[420px] laptop:h-[520px] desktop:h-[640px] ">
      {!isLoading && (
        <div className="absolute  h-full overflow-hidden w-full ">
          <img src={bgImg} className="w-full rounded-lg  h-full " />
        </div>
      )}
      {isError && (
        <div className="font-bold font-mono text-2xl text-white text-center ">
          Error occur while fetching movie poste
        </div>
      )}
      <div className="w-full h-full absolute top-0 bg-gradient-to-r from-sky-600 to-sky-900 ...   opacity-50"></div>

      <div className="text-white h-full w-full">
        <div className="h-full p-4 font-mono  absolute  top-0 flex flex-col gap-4 justify-center w-full">
          <h2 className="text-3xl font-extrabold">Welcome.</h2>
          <h3 className="text-xl font-semibold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <form className="w-full bg-white rounded-3xl flex gap-4 items-center">
            <input
              type="text"
              className=" w-full text-black bg-transparent text-lg px-6"
              placeholder="Search..."
            />
            <button className="bg-cyan-500 px-6 rounded-3xl p-3 ">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
