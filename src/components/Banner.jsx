import bannerImage from "../assets/home-banner-image.png";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className=" md:h-screen flex flex-col-reverse gap-10 md:gap-0 md:flex-row mt-[80px] md:mt-5 lg:mt-0 md:justify-between items-center container mx-auto px-[5%] md:px-[3%] lg:px-[4%] z-20 mb-10">
      <div className="space-y-4 lg:space-y-5">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-greatVives text-primary font-bold">
          Its Quick & Amusing!
        </h3>
        <div className="text-2xl md:text-4xl lg:text-6xl font-semibold cursor-default mb-6">
          <h3 className="mb-3">Experience</h3>
          the Art of{" "}
          <span className="text-primary">
            <Typewriter
              words={["Quality.", "Speed.", "Excellence."]}
              cursor
              loop="0"
              delaySpeed="2200"
              deleteSpeed="50"
              typeSpeed="80"
              cursorStyle="|"
            />
          </span>
        </div>
        <p className="lg:text-xl text-dark max-w-[400px] lg:max-w-[670px] mb-3">
          Experience gourmet dishes crafted with the finest ingredients, served
          swiftly without compromising quality. Taste the perfect blend of speed
          and excellence at{" "}
          <span className="text-primary font-semibold">Munchery!</span>
        </p>
        <div className="w-fit">
          <Link to={"/menu"}>
            <button className="px-4 lg:px-6 py-2 lg:py-[10px] bg-primary text-white lg:text-lg rounded-full hover:bg-transparent border border-primary hover:text-primary flex gap-2 items-center hover:font-medium hover:gap-4 transition-gap duration-300">
              See Menu <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[70%] md:h-[60%] lg:h-[68%] overflow-hidden">
        <img
          className="h-full w-[80%] md:w-full mx-auto object-contain"
          src={bannerImage}
        />
      </div>
    </div>
  );
};
