import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
