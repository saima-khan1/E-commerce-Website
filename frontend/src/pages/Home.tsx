import BestSellers from "../components/BestSellers";
import KidsCollections from "../components/KidsCollection";
import Landing from "../components/Landing";
import MensCollection from "../components/MensCollection";

const Home = () => {
  return (
    <div>
      <Landing />

      <MensCollection />
      <KidsCollections />
      <BestSellers />
    </div>
  );
};

export default Home;
