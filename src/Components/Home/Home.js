/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "../Common/Card/Card";
import DonateElement from "./DonateElement";
import VolunteerElement from "./VolunteerElement";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 bg-secondary-light p-4"> {/* Added padding for mobile spacing */}

      {/* First div */}

      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 lg:mx-20 2xl:mx-36 mt-6 2xl:gap-8">
        <div className=" flex flex-col justify-center items-center md:items-start gap-8 lg:gap-10">


     
          {/* First div content */}
          <h1 className="heading leading-snug font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
            <span>Leading the Way to Women's </span>
            <span className="main-heading">Empowerment</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl pr-0 md:pr-20 -mt-5 text-justify">
            Empowering women to lead with confidence and strength. Join us in
            creating a world of equality and opportunity for all women.
          </p>

          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl -mt-2 lg:-mt-0 mb-6 lg:mb-0">
            <NavLink to="/contact" className="" >Contact Us</NavLink>
          </button>
        </div>
        <div className="flex hidden sm:block justify-center items-center lg:-mr-4">
          {/* Second div content with image */}
          <img
            src="/assets/map.png"
            className="w-full h-auto" // Ensure the image scales correctly
            alt="map"
          />
        </div>
      </div>

      {/* Objective Element */}
      <div id="objective" className="mt-[-40px]"> {/* Adjusted margin to move up */}
        <h1 className="heading font-semibold text-center text-2xl md:text-3xl lg:text-4xl">
          <span>Our </span>
          <span className="main-heading">Objective</span>
        </h1>

        <div className="flex flex-col items-center mt-2 lg:mt-6 mx-4 lg:mx-20">
          <div className="flex justify-center w-full"> {/* Centering the grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10"> {/* Responsive grid layout */}
              <div className="p-2"> {/* Card container */}
                <Card
                  imgSrc={"assets/womenEmpowerment.png"}
                  cardTitle={"Women Empowerment"}
                  cardDescription={
                    "We focus on providing equal opportunities for women in the work field. We also conduct skill development programmes for women."
                  }
                />
              </div>
              <div className="p-2"> {/* Card container */}
                <Card
                  imgSrc={"assets/childCare.png"}
                  cardTitle={"Mother & Child Care"}
                  cardDescription={
                    "Empowering mothers and nurturing children for a healthier, brighter future. Together, we thrive."
                  }
                />
              </div>
              <div className="p-2"> {/* Card container */}
                <Card
                  imgSrc={"assets/medical.png"}
                  cardTitle={"Free Medical Camp"}
                  cardDescription={
                    "Providing free medical check-ups and essential healthcare services to underserved communities."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Element */}
      <div id="volunteer">
        <VolunteerElement />
      </div>

      {/* Donate Element */}

      <div id="donate" className="-mt-[360px] lg:mt-10">
        <div className="flex justify-center items-center mb-8 lg:mb-10 mt-0 md:mt-40 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-snug">
            <span className="">Become a </span>
            <span className="main-heading">Contributor</span>
          </h1>
        </div><br/>

        <section
          className="w-full h-auto flex justify-center items-center sm:block"
          style={{
            background: `linear-gradient(89.63deg,#ffffff 39.45%,rgba(0, 0, 0, 0.62) 70.46%), 
            url('/assets/maa.png')`,
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "screen",
          }}
        >
          <div className="w-full max-w-96 md:max-w-lg lg:max-w-2xl xl:max-w-3xl mt-2 lg:mt-6 ml-4 p-4">
            <div className="w-full max-w-md lg:max-w-lg mt-6">
              <div className="tracking-wide leading-6 text-base">
                <span className="font-medium text-primary-base">MAA FOUNDATION </span>
                <span className="font-normal">
                  has been working in India for over 70 years, uplifting marginalized women and girls through 53 programmes in 18 states and 130+ districts.
                </span>
              </div>
              <p className="input-field-primary mt-4 text-base font-bold text-black w-full">
                MAA FOUNDATION PAN NUMBER: <span className="text-[#0B0B0B]">A125D4G46D</span>
              </p>
              <div className="mt-4" id="donateSection">
                <DonateElement />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
