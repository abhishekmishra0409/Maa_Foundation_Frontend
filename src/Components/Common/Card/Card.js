import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgSrc, cardTitle, cardDescription, link = "#" }) => {
  return (
    <div className="relative w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto cursor-pointer hover:scale-[1.05] hover:translate-y-1 transition-transform duration-300 py-2 shadow-lg hover:shadow-xl rounded-lg">
      <div>
        <img src={imgSrc} alt={cardTitle} className="w-full h-auto rounded-t-lg" />
      </div>

      <div className="flex flex-col justify-between h-48 gap-2 p-4 bg-white rounded-b-lg">
        <div className="flex-grow">
          <h2 className="font-semibold mt-2 leading-8 text-xl text-[#0A0A0A]">{cardTitle}</h2>
          <p className="text-lg text-gray-700 line-clamp-3">{cardDescription}</p>
        </div>
        <NavLink 
          to={link} 
          className="absolute bottom-4 left-4 flex items-center text-primary-base transition duration-300 hover:text-primary-dark"
          style={{ marginBottom: '-5px' }} // Adjust the margin as needed
        >
          <span className="font-medium text-sm">Learn more</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
