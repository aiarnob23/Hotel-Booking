import Advertises from "./components/Advertise";
import Banner from "./components/Banner";
import SearchField from "./components/SearchField";
import TopHotels from "./components/TopHotels";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <SearchField />
      <TopHotels/>
      <Advertises />
    </div>
  );
};

export default Home;
