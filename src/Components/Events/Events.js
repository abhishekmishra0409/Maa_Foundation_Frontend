import React from "react";
import { events } from "../Utils/Constant";
import EventCard from "./EventCard";
import { NavLink } from "react-router-dom";

const Events = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-32 justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-36">
      {/* First section with heading and image */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8">
        {/* First div content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-8 lg:gap-10">
          <h1 className="heading leading-snug font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
            <span>Transformative Programs for a </span>
            <span className="main-heading">Brighter Future</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl pr-0 md:pr-20 -mt-5 text-justify">
            Empowering Women Celebrating Strength and Independence - Explore Our
            Transformative Programs Driving Women's Rights, Education, and
            Economic Opportunities for a Brighter Future.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl -mt-2 lg:-mt-0 mb-6 lg:mb-0">
            <NavLink to="/contact">Contact Us</NavLink>
          </button>
        </div>

        {/* Second div content with image */}
        <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-5">
          <img
            alt="map"
            src="assets/eventMap.png"
            className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl hidden md:block"
          />
        </div>
      </div>

      {/* Event list */}
      <div className="mb-32 flex flex-col gap-16 md:gap-24 lg:gap-36">
        {events.map((data, index) => (
          <EventCard
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            path={data.path}
            id={data.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
