import React, { useContext } from "react";
// import blogsData from "./blogsData";
import BlogsCard from "./BlogsCard";
import { image } from "./blogsdata";
import { BlogContext } from "../../context/blogContext";

const Blogs = () => {

  const {blogs} = useContext(BlogContext);  
  return (
    <div className="">
      <div className="relative">
        {/* Background Image */}
        <img
          className="w-full h-auto object-cover"
          src={image.heroimg}
          alt=""
        />

        {/* Absolute Positioned Content */}
        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:pl-10 lg:pl-[10%] lg:py-[8%]">
          <p className="font-bold text-4xl lg:text-5xl text-black mb-2 sm:mb-4 lg:pb-10">
            Blogs
          </p>
          <p className="font-semibold text-xl lg:text-3xl text-primary-base mb-1 sm:mb-2 lg:mb-4">
            Voice of Empowerment
          </p>
          <p className="text-base lg:text-2xl text-black leading-normal mb-1 sm:mb-2 lg:mb-4">
            Amplifying Women's Strength and Influence
          </p>
        </div>

      </div>

      <div className=" border pt-5 md:pt-10 lg:pt-20">
        <div className="mx-20 h-auto flex flex-wrap justify-center gap-8">
          {blogs.map((item) => {
            return (
              <BlogsCard
                id={item.id}
                coverImage={item.coverImage}
                authorImage={item.authorImage}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center my-28 items-center">
          <button className="btn-primary ">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
