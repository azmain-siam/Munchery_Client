import { Banner } from "../components/Banner";
import bgImg from "../assets/home-banner-background.png";

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      // style={{ backgroundImage: `url(${bg})` }}
      // className="bg-[url('https://i.ibb.co/0ZDFtQr/7392-1.jpg')] min-h-screen bg-contain bg-no-repeat relative bg-right"
    >
      {/* <div className="absolute inset-0 bg-accent opacity-90 "></div> */}
      <div className="absolute h-full -right-[320px] md:-right-[65px]">
        <img className="h-full" src={bgImg} />
      </div>
      <div className="min-h-screen flex items-center">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
