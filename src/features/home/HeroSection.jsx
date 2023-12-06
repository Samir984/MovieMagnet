import { lazy, useEffect, useState } from "react";
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
    }, 10000);

    return () => clearInterval(myInterval);
  }, []);
  useEffect(() => {
    const randomNumber = randomNumGenerator(data?.results.length);
    if (randomNumber) {
      setBgImg(
        imgConfig.backdrop + data.results[randomNumber].backdrop_path,
        trigger
      );
    }
  }, [data, imgConfig.backdrop, trigger]);

  return (
    <div className="">
        
      {!isLoading && <img src={bgImg} className="w-full" />}
    </div>
  );
}

export default HeroSection;
