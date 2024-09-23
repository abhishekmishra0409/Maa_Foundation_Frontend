// This page is dedicated to events that are shown on full page

// necessary imports
import React, { useContext } from "react";
import EventCard from "./EventCard";
import { NavLink } from "react-router-dom";
import { EventContext } from "../../context/eventContext";

const Events = () => {

  const {events,loading} = useContext(EventContext);

  return (
    // main div
    <div className="flex flex-col gap-20 xl:gap-52 justify-center items-center mx-20 2xl:mx-36">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8 -mr-8">

        {/* First div content */}
        <div className=" flex flex-col justify-center items-center md:items-start gap-10">
          <h1 className="heading leading-snug font-semibold 2xl:pr-40">
            <span className="">Transformative Programs for a </span>
            <span className="main-heading">Brighter Future</span>
          </h1>
          <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5">
            Empowering Women Celebrating Strength and Independence - Explore
            Our Transformative Programs Driving Women's Rights, Education, and
            Economic Opportunities for a Brighter Future.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
            <NavLink to="/contact" className="" >Contact Us</NavLink>
          </button>
        </div>

        {/* Second div content with image */}
        <div className="flex justify-center items-center">
          <img
            alt="map"
            src="assets/eventMap.png"
            className="w-full"
          />
        </div>
      </div>

      {/* event list */}
      {loading?<div className="flex justify-center items-center h-screen">
      <h1 className="text-center mt-[20px] text-2xl " >Loading...</h1>
    </div>:
      <div className="mb-32 flex flex-col gap-36">
        {events.map((data, index) => (
          <EventCard
            key={index}
            image={data.imageUrl}
            title={data.title}
            subtitle={data.subtitle}
            path={data.path}
            id={data._id}
            index={index}
          ></EventCard>
        ))}
      </div>}
    </div>
  );
};

export default Events;
