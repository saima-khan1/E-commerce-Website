import BestSellers from "../components/BestSellers";
import KidsCollections from "../components/KidsCollection";
import Landing from "../components/Landing";
import MensCollection from "../components/MensCollection";
import NewsLetter from "../components/NewsLetterBox";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <div>
      <Landing />

      <MensCollection />
      <KidsCollections />
      <BestSellers />
      <Policy />
      <NewsLetter />
    </div>
  );
};

export default Home;
