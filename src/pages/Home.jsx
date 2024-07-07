import { Banner } from "../components/Banner";
import bgImg from "../assets/home-banner-background.png";
import CategorySection from "../components/CategorySection";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute h-full -right-[320px] md:-right-[80px]">
          <img className="h-full" src={bgImg} />
        </div>
        <div className="min-h-screen flex items-center">
          <Banner />
        </div>
      </div>
      <div className="container mx-auto mb-5">
        <CategorySection />
      </div>
    </div>
  );
};

export default Home;
