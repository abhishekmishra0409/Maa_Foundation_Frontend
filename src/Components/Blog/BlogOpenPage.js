import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./blogsdata";
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
    <div className="bg-secondary-light">
      {/* Cover Image */}
      <div className="w-full h-auto">
        <img className="w-full" src={coverImage} alt="" />
      </div>

      {/* Author and Share Section */}
      <div className="flex flex-col sm:flex-row justify-between px-4 md:px-5 lg:px-10 py-2">
        <div className="details flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-10 items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img src={authorImage} alt="" />
            </div>
            <div className="text-base sm:text-lg md:text-xl font-medium text-primary-base">
              {author}
            </div>
          </div>
          <div className="font-medium text-sm sm:text-md md:text-lg text-gray-500">
            {date}
          </div>
        </div>
        <div className="flex justify-center mt-4 sm:mt-0">
          <img className="h-12 sm:h-16" src={image.share} alt="" />
        </div>
      </div>

      {/* Title Section */}
      <div className="font-sans py-6 sm:py-10 lg:py-20 px-6 sm:px-12 lg:px-24 flex justify-center items-center bg-pink-200 text-2xl sm:text-3xl lg:text-5xl font-semibold leading-relaxed">
        {title}
      </div>

      {/* Blog Content */}
      <div className="flex flex-col px-6 sm:px-12 lg:px-24 text-base sm:text-lg lg:text-2xl mt-4">
        <div>
          {data.map((item) => (
            <p className="my-4 text-gray-dark text-lg leading-7 sm:leading-8">
              <span className="text-primary-base font-medium">
                {item.datatitle}:{" "}
              </span>
              {item.datadesc}
            </p>
          ))}
        </div>
      </div>

      {/* Next Blogs Section */}
      <div className="relative flex flex-col gap-6 items-start my-12 sm:my-24 px-6 sm:px-12 lg:px-24">
        {nextBlogs.map((item, index) => (
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
        ))}
        {/* Gradient Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(255,250,250,0.7)] to-transparent z-0"></div>
      </div>
    </div>
  );
};

export default BlogOpenPage;
