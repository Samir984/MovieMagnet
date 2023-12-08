/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getApiData } from "../services/movieApi";

const ImgConfig = createContext();
function ImgConfigProvider({ children }) {
  const [imgConfig, setImgConfig] = useState({});
  useEffect(() => {
    getApiData("configuration").then((data) => {
      setImgConfig({
        backdrop: data.images.secure_base_url + "original",
        posterLQ: data.images.secure_base_url + "w342",
        posterHQ: data.images.secure_base_url + "w780",
        profile: data.images.secure_base_url + "w185",
      });
    });
  }, []);

  return (
    <ImgConfig.Provider value={{ imgConfig }}>{children}</ImgConfig.Provider>
  );
}

const useImgConfig = function () {
  return useContext(ImgConfig);
};
export { ImgConfigProvider, useImgConfig };
