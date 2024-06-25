import bannerImage from "../assets/home-banner-image.png";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div className="min-h-screen md:h-screen flex flex-col-reverse gap-4 md:flex-row mt-[80px] md:mt-0 justify-between items-center container mx-auto px-[5%] md:px-[3%] lg:px-[5%] z-20 mb-10">
      <div className="space-y-3 md:space-y-3 lg:space-y-5">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-greatVives text-primary font-bold">
          Its Quick & Amusing!
        </h3>
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight cursor-default mb-6">
          {/* The <span className="text-primary">Art</span> of speed <br />
          food Quality. */}
          Experience <br />
          the Art of{" "}
          <span className="text-primary">
            <Typewriter
              words={["Quality.", "Speed.", "Excellence."]}
              cursor
              loop="0"
              delaySpeed="2200"
              deleteSpeed="50"
              typeSpeed="60"
              cursorStyle="|"
            />
          </span>
        </h3>
        <p className=" lg:text-xl text-dark max-w-[400px] lg:max-w-[670px]">
          Experience gourmet dishes crafted with the finest ingredients, served
          swiftly without compromising quality. Taste the perfect blend of speed
          and excellence at{" "}
          <span className="text-primary font-semibold">Munchery!</span>
        </p>
      </div>
      <div className="h-[70%] md:h-[60%] lg:h-[68%] overflow-hidden">
        <img
          className="h-full w-[80%] md:w-full mx-auto object-contain"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};
