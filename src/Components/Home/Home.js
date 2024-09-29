/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "../Common/Card/Card";
import DonateElement from "./DonateElement";
import VolunteerElement from "./VolunteerElement";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 bg-secondary-light">

      {/* First div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-20 2xl:mx-36 mt-6 2xl:gap-8">
        <div className=" flex flex-col justify-center items-center md:items-start gap-10">

          {/* First div content */}
          <h1 className="heading leading-snug font-semibold">
            <span className="">Leading the Way to Women's </span>
            <span className="main-heading">Empowerment</span>
          </h1>
          <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5 text-justify">
            Empowering women to lead with confidence and strength. Join us in
            creating a world of equality and opportunity for all women.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
            <NavLink to="/contact" className="" >Contact Us</NavLink>
          </button>
        </div>
        <div className=" flex justify-center items-center -mr-4">
          {/* Second div content with image */}
          <img
            alt="map"
            src="assets/map.png"
            className="w-full"
          />
        </div>
      </div>

      {/* Objective Element */}
      <div id="objective">
        <h1 className="heading font-medium text-center">
          <span className="">Our </span>
          <span className="main-heading">Objective</span>
        </h1>

        <div className="flex flex-wrap justify-between items-center h-auto mt-2 lg:mt-6 mx-4 lg:mx-20">
          <Card
            className=""
            imgSrc={"assets/womenEmpowerment.png"}
            cardTitle={"Women Empowerment"}
            cardDescription={
              "We focus on providing equal opportunities for women in the work field. We do also skill development programme for women."
            }
          />
          <Card
            imgSrc={"assets/childCare.png"}
            cardTitle={"Mother & Child Care"}
            cardDescription={
              "Empowering mothers and nurturing children for a nice healthier, brighter future. Together, we thrive."
            }
          />
          <Card
            imgSrc={"assets/medical.png"}
            cardTitle={"Free Medical Camp"}
            cardDescription={
              "Providing free medical check-ups and essential healthcare services to undeserved communities."
            }
          />
        </div>
      </div>

      {/* Volunteer Element */}
      <div id="volunteer">
        <VolunteerElement />
      </div>

      {/* Donate Element */}
      <div id="donate" className="mt-10">
        <div className="flex justify-center items-center ">
          <h1 className="heading leading-snug">
            <span className="">Become a </span>
            <span className="main-heading">Contributor</span>
          </h1>
        </div>

        <section
          className="w-full h-auto md:h-[790px] lg:h-[844px] flex justify-center items-center sm:block"
          style={{
            background: `linear-gradient(89.63deg,#ffffff 39.45%,rgba(0, 0, 0, 0.62) 70.46%), 
    url('/assets/maa.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "screen",
          }}
        >
          <div className="w-full max-w-96  md:max-w-lg lg:max-w-2xl xl:max-w-3xl mt-2 lg:mt-6 ml-16 p-4">
            <div className="w-full max-w-md lg:max-w-lg mt-6">
              <div className="tracking-wide leading-6 text-base ">
                <span className="font-medium text-primary-base">MAA FOUNDATION </span>
                <span className="font-normal  ">
                  has been working in India for over 70 years, for the upliftment of marginalized women and girls through 53 programmes in 18 states and 130+ districts.
                </span>
              </div>
              <p className="input-field-primary mt-4 text-normal font-bold text-black w-full">
                MAA FOUNDATION PAN NUMBER : <span className="text-[#0B0B0B]">A125D4G46d</span>
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
