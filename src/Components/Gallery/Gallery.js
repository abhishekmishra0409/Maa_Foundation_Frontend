import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hcomp from "./HoverComp";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);
  const imagesPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5001/api/gallery?page=${currentPage}&limit=${imagesPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        setTotalPages(jsonData.totalPages);
        console.log(jsonData);
      } catch (error) {
        console.error('Error in fetching data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-20 mb-20">       
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8">
        <div className="flex flex-col justify-center items-center md:items-start gap-10">
          <h1 className="heading leading-snug font-semibold">
            <span className="">Empowering Women Our </span><span className="main-heading">Mission in Action</span>
          </h1>
          <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5">
            Explore our journey of empowering women through impactful
            initiatives. Witness the transformation and strength in every story
            captured in our mission-driven gallery.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
            <NavLink to="/contact" className="">Contact Us</NavLink>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="hero_image"
            src="/gallery/heroImage1.jpeg"
            className="w-full"
          />
        </div>      
      </div>     
      <section className="grid md:grid-cols-3 gap-12 mt-40">
        {data.map((item, index) => {
          let className = "bg-cover bg-center rounded-md ";
          if (index === 1) className += "md:col-span-2 h-[38vw]";
          else if (index === 2) className += "md:col-span-2 row-span-3 h-[60vw]";
          else if (index === 3 || index === 4) className += "md:row-span-2 h-[38vw]";
          else if (index === 5 || index === 6) className += "md:h-[16vw] h-[38vw]";
          else if (index === 7) className += "md:col-span-3 h-[40vw]";
          else className += "h-[38vw]";

          return (
            <div 
              key={item.id || `gallery-item-${index}`} 
              className={className} 
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <Hcomp title={item.title} subtitle={item.subtitle} />
            </div>
          );
        })}
      </section>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
           <button
           key={i}
           onClick={() => paginate(i + 1)}
           className={`mx-1 px-3 py-1 border rounded ${
             currentPage === i + 1
               ? 'bg-[#FF2020] text-white'
               : 'bg-white text-[#FF2020] border-[#FF2020] hover:bg-[#FF2020] hover:text-white'
           }`}
         >
           {i + 1}
         </button>
        ))}
      </div>
    </div>
  );
};
export default Gallery;