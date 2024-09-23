import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./blogsdata"
import { image } from "./blogsdata";
import BlogsOpenPageCard from "./BlogsOpenPageCard";

const BlogOpenPage = () => {

  const { blogId } = useParams();
  const currentIndex = blogsData.findIndex((item) => item.id === blogId);
  const nextBlogs = blogsData.slice(currentIndex + 1, currentIndex + 6);

  const coverImage = blogsData[blogId - 1].coverImage;
  const title = blogsData[blogId - 1].title;
  const author = blogsData[blogId - 1].author;
  const authorImage = blogsData[blogId - 1].authorImage;
  const date = blogsData[blogId - 1].date;
  const data = blogsData[blogId - 1].data;
  return (
    <div className=" bg-secondary-light">
      <div className="w-full h-auto">
        <img className="w-full" src={coverImage} alt="" />
      </div>
      <div className="flex justify-between px-3 md:px-5 lg:px-10 py-2">
        <div className="details flex sm:flex-row flex-col gap-[10px] sm:gap-[20px] md:gap-[40px] items-center bottom-0">
          <div className="flex items-center gap-[8px]">
            <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
              <img src={authorImage} alt="" />
            </div>
            <div className="text-[15px] sm:text-[20px] font-medium text-primary-base">
              {author}
            </div>
          </div>
          <div className="font-medium text-[15px] sm:text-[18px] text-[#9B9B9B]">
            {date}
          </div>
        </div>
        <div>
          <img className="h-[60px] sm:h-[80px]" src={image.share} alt="" />
        </div>
      </div>

      <div className="font-sans py-4 sm:py-10 lg:py-20 px-8 sm:px-14 lg:px-28 flex justify-center items-center bg-[#FFC3C4] text-3xl lg:text-5xl font-semibold leading-loose">
        {title}
      </div>

      <div className="flex flex-col px-8 sm:px-14 lg:px-28 lg:text-2xl mt-4">
        <div>
          {data.map((item) => {
            return (
              <p className="my-8 text-gray-dark text-xl leading-8">
                <span className="text-primary-base font-medium">
                  {item.datatitle} :{" "}
                </span>
                {item.datadesc}
              </p>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-col justify-center gap-10 items-start my-24 mx-24">
        {nextBlogs.map((item, index) => {
          return (
            <BlogsOpenPageCard
              key={item.id}
              id={item.id}
              coverImage={item.coverImage}
              authorImage={item.authorImage}
              title={item.title}
              sample_data={item.sample_data}
              author={item.author}
              date={item.date}
              className={index === nextBlogs.length - 1 ? "relative z-10" : ""}
            />
          );
        })}
        {/* here using rgba for gradient effect... decrease opacity more for more transparency */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(255,250,250,0.5)] to-transparent z-0"></div>
      </div>
    </div>
  );
};

export default BlogOpenPage;
