import React from "react";
import {NavLink} from "react-router-dom";
import Hcomp from "./HoverComp";

const Gallery = () => {
  return (
      <div className="mx-20 mb-20">       
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8">
        <div className=" flex flex-col justify-center items-center md:items-start gap-10">

          {/* First div content */}
          <h1 className="heading leading-snug font-semibold">
            <span className="">Empowering Women Our </span><span className="main-heading">Mission in Action</span>
          </h1>
          <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5">
            Explore our journey of empowering women through impactful
            initiatives. Witness the transformation and strength in every story
            captured in our mission-driven gallery.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
            <NavLink to="/contact" className="" >Contact Us</NavLink>
          </button>
        </div>
        <div className=" flex justify-center items-center">
          {/* Second div content with image */}
          <img
            alt="hero_image"
            src="/gallery/heroImage1.jpeg"
            className="w-full"
          />
        </div>
      </div>

        <section className="grid  md:grid-cols-3 gap-12 mt-40 ">
            <div className="bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore the inspiring Women Educating Programme by Maa Foundation, empowering women through education to create brighter futures. Witness their journey and achievements here."} />
            </div>
            <div className="md:col-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall3.jpeg')" }}>
              <Hcomp heading={"Women Entreprenuer"} text={"Richa Bashistha, founder of Maa Foundation, is a dedicated women entrepreneur committed to empowering communities. Her vision and leadership drive positive change, fostering growht and opportunites for all."}/>
            </div>
            <div className="bg-center bg-cover md:col-span-2 row-span-3 h-[60vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Ma & Child Care program"} text={"Explore our Ma & Child Care program gallery. showcasing herartwarning moments and impactful initiatives dedicated to nurturing maternal and child health at the Maa Foundation"}/>
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall4.jpeg')" }}>
              <Hcomp heading={"Skill Development"} text={"Explore our Women's Skill Developemnt Program: Empowering Women with Essential Skills for a Brighter Future at Maa Foundation."}/>
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Eye Care Camp"} text={"Explore our Eye Care Medical Camp gallery-transforming lives through vision care. Witness our impact firsthand."}/>
            </div>
            <div className="bg-center bg-cover md:h-[16vw] h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall7.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."}/>
            </div>
            <div className="bg-center bg-cover rounded-md md:h-[16vw] h-[38vw]" style={{ backgroundImage: "url('/gallery/gall7.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."}/>
            </div>
            <div className=" md:col-span-3 bg-cover bg-center h-[40vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall1.jpeg')" }}>
              <Hcomp heading={"Richabashistha's Seminar"} text={"Richa Bashistha. Founder of Maa Foundation is a dedicated advocate for community developemnt. She recently engaged with stakeholders. Highlighting her commitment to impactful change and fostering collaborative efforts for sustainable growht."}/>
            </div>
        </section>
      </div>
  );
};



export default Gallery;
