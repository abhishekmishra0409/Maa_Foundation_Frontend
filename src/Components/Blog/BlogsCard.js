import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({ id, coverImage, authorImage, title, author, date }) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Link onClick={() => scrollToTop()} to={`/blog/${id}`}>
        <div className="card gap-8 flex flex-col justify-between w-96 h-auto p-3 bg-white rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="h-60 w-[360px] overflow-hidden rounded-lg object-fill bg-gray-dark">
              <img className="h-60 w-[358px]" src={coverImage} alt="" />
            </div>
            <div className="text-2xl font-semibold font-sans text-[#0A0A0A]">{title}</div>
          </div>
          <div className="details flex justify-between items-center bottom-0">
            <div className="flex items-center gap-[8px]">
              <div className="size-9 overflow-hidden rounded-full bg-gray-dark">
                <img src={authorImage} alt="" />
              </div>
              <div className="text-base font-medium text-[#E03233]">
                {author}
              </div>
            </div>
            <div className="font-normal text-[#9B9B9B]">{date}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogsCard;