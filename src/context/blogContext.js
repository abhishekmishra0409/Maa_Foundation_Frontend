import { createContext, useEffect, useState } from "react";
import axiosInstance from "../axios/axios";

//  creating Blog Context
export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // creating state to store the blogs detail
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getAllblogs = async () => {
        const res = await axiosInstance.get("/blog/getAllBlogs");
        console.log(res.data.data);
        setBlogs(res.data.data);
        setLoading(false);
      };

      getAllblogs();
    } catch (error) {
      console.log("someething went wrong while fetching blogs data");
    }
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
