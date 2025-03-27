import BestSellers from "../components/BestSellers";
import KidsCollections from "../components/KidsCollection";
import Landing from "../components/Landing";
import MensCollection from "../components/MensCollection";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <div>
      <Landing />

      <MensCollection />
      <KidsCollections />
      <BestSellers />
      <Policy />
    </div>
  );
};

export default Home;
