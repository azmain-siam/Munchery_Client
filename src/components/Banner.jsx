import bannerImage from "../assets/home-banner-image.png";

export const Banner = () => {
  return (
    <div className="h-screen flex justify-between items-center container mx-auto px-[5%] z-20">
      <div>
        {/* <h3 className="text-2xl font-greatVives text-primary font-bold mb-2">
          Its Quick & Amusing!
        </h3> */}
        <h3 className="text-6xl  font-semibold leading-tight">
          The <span className="text-primary">Art</span> of speed <br />
          food Quality.
        </h3>
      </div>
      <div className="h-[50%] md:h-[60%] lg:h-[68%] overflow-hidden">
        <img className="h-full" src={bannerImage} alt="" />
      </div>
    </div>
  );
};
