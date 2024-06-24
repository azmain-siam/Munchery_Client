import bannerImage from "../assets/home-banner-image.png";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  return (
    <div className="h-screen flex justify-between items-center container mx-auto px-[5%] z-20">
      <div>
        {/* <h3 className="text-2xl font-greatVives text-primary font-bold mb-2">
          Its Quick & Amusing!
        </h3> */}
        <h3 className="text-6xl  font-semibold leading-tight cursor-default">
          {/* The <span className="text-primary">Art</span> of speed <br />
          food Quality. */}
          Experience <br />
          the Art of{" "}
          <span className="text-primary">
            <Typewriter
              words={["Speed.", "Quality.", "Excellence."]}
              cursor
              loop="0"
              delaySpeed="2500"
              deleteSpeed="60"
              typeSpeed="90"
              cursorStyle="|"
            />
          </span>
        </h3>
        <p className="text-xl text-dark max-w-[670px] mt-4">
          Experience gourmet dishes crafted with the finest ingredients, served
          swiftly without compromising quality. Taste the perfect blend of speed
          and excellence at{" "}
          <span className="text-primary font-semibold">Munchery!</span>
        </p>
      </div>
      <div className="h-[50%] md:h-[60%] lg:h-[68%] overflow-hidden">
        <img
          className="h-full w-full object-contain"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};
