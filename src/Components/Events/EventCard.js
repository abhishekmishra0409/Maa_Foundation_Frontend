import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const EventCard = ({ image, title, subtitle, path, index, id }) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="w-full flex justify-center px-4 md:px-8 lg:px-12 xl:px-20">
      <div
        className={`flex flex-col w-full items-center gap-6 lg:gap-12 lg:flex-row ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } justify-evenly`}
      >
        {/* Image Div */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <img src={image} className="w-full h-auto" alt="event" />
        </div>

        {/* Content Div */}
        <div className="flex flex-col justify-center items-start gap-6 lg:gap-8 max-w-full lg:max-w-[590px]">
          {/* Title */}
          <div className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </div>

          {/* Subtitle */}
          <div className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            {subtitle}
          </div>

          {/* Button */}
          <Link to={`/event/${id}`} onClick={scrollToTop}>
            <button className="flex items-center gap-3 text-base sm:text-lg text-primary-light hover:text-primary-dark">
              Learn More <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
