import PropTypes from "prop-types";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div>
      <h3
        className={`text-xl md:text-2xl lg:text-3xl font-greatVives text-primary font-bold md:mb-1`}
      >
        {heading}
      </h3>
      <>
        <h2 className="inline-flex text-2xl md:text-4xl lg:text-[44px] font-semibold relative pb-3 md:pb-5">
          {subHeading}
          <span className="absolute bg-primary rounded-full h-[3px] bottom-0 left-1/2 transform -translate-x-1/2  w-[70%] mx-auto"></span>
        </h2>
      </>
    </div>
  );
};

export default SectionHeading;

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
