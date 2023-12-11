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

// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTopOnURLChange = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]); // Scroll to the top whenever the pathname changes

//   return null; // This component doesn't render anything
// };

// export default ScrollToTopOnURLChange;
