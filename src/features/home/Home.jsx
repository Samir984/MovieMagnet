import HeroSection from "./HeroSection";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";

function Home() {
  return (
    <div>
      <HeroSection />
      <Trending/>
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
