import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgSrc, cardTitle, cardDescription, link = "#" }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-[30%] lg:w-80 cursor-pointer hover:scale-[1.1] hover:translate-y-3 transition-transform duration-300 py-2 shadow-lg hover:shadow-xl rounded-lg">
      <div>
        <img src={imgSrc} alt="" className="w-full h-auto rounded-t-lg" />
      </div>

      <div className="flex flex-col justify-between h-44 gap-2 p-4 bg-white rounded-b-lg">
        <div>
          <h2 className="font-semibold mt-2 leading-8 text-xl text-[#0A0A0A]">{cardTitle}</h2>
          <p className="text-lg text-gray-dark line-clamp-3">{cardDescription}</p>
        </div>
        <NavLink to={link} className="flex items-center text-primary-base transition duration-300 hover:text-primary-dark">
          <span className="font-medium text-sm">Learn more</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 ml-1"
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
