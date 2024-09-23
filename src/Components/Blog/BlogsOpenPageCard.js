import React from "react";
import { Link } from "react-router-dom";

const BlogsOpenPageCard = ({
  id,
  coverImage,
  authorImage,
  title,
  author,
  date,
  sample_data,
}) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Link onClick={() => scrollToTop()} to={`/blog/${id}`} className="block w-full">
      <div className="flex flex-col md:flex-row p-2 bg-white rounded-lg gap-3 w-full">
        {/* image */}
        <div className="flex-shrink-0 md:w-80">
          <div className="h-56 w-full flex justify-center items-center overflow-hidden">
            <img className="h-56 w-full object-cover rounded-md" src={coverImage} alt="" />
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col justify-between gap-4 flex-grow px-5 w-full">
          <div>
            <div className="text-xl lg:text-2xl font-semibold mb-2">{title}</div>
            <div className="text-gray-dark lg:text-xl">{sample_data}</div>
          </div>

          {/* author and date */}
          <div className="flex w-full items-center justify-between mt-auto mb-4">
            <div className="flex items-center gap-2">
              <div className="size-9 overflow-hidden rounded-full">
                <img src={authorImage} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="font-medium text-primary-base">
                {author}
              </div>
            </div>
            <div className="font-normal text-[#9B9B9B]">{date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogsOpenPageCard;