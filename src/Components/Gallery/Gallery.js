import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hcomp from "./HoverComp";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/gallery');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error in fetching data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  
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
         {/* from here the images div start */}
        <section className="grid  md:grid-cols-3 gap-12 mt-40 ">
            <div className="bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: `url(${data[0].imageUrl})` }}>
              <Hcomp title ={data[0].title} subtitle ={data[0].subtitle} />
            </div>
            <div className="md:col-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: `url(${data[1].imageUrl})` }}>
              <Hcomp title ={data[1].title} subtitle ={data[1].subtitle}/>
            </div>
            <div className="bg-center bg-cover md:col-span-2 row-span-3 h-[60vw] rounded-md" style={{ backgroundImage: `url(${data[2].imageUrl})` }}>
              <Hcomp title ={data[2].title} subtitle ={data[2].subtitle} />
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: `url(${data[3].imageUrl})` }}>
              <Hcomp title ={data[3].title} subtitle ={data[3].subtitle}/>
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: `url(${data[4].imageUrl})` }}>
              <Hcomp title ={data[4].title} subtitle ={data[4].subtitle} />
            </div>
            <div className="bg-center bg-cover md:h-[16vw] h-[38vw] rounded-md" style={{ backgroundImage: `url(${data[5].imageUrl})` }}>
              <Hcomp title ={data[5].title} subtitle ={data[5].subtitle} />
            </div>
            <div className="bg-center bg-cover rounded-md md:h-[16vw] h-[38vw]" style={{ backgroundImage: `url(${data[6].imageUrl})` }}>
              <Hcomp title ={data[6].title} subtitle ={data[6].subtitle} />
            </div>
            <div className=" md:col-span-3 bg-cover bg-center h-[40vw] rounded-md" style={{ backgroundImage: `url(${data[7].imageUrl})` }}>
              <Hcomp title ={data[7].title} subtitle ={data[7].subtitle} />
            </div>
        </section>    
      </div>
  );
};



export default Gallery;
