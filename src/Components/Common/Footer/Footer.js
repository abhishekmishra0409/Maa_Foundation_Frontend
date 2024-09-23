import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import validator from "validator";
import axiosInstance from "../../../axios/axios";

function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your email")

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validator.isEmail(newEmail));
    setPlaceholder("Enter your email");
  };

  const handleSubscribe = async(e) => {

    e.preventDefault();
    try {
      if (isValidEmail) {
        console.log("Subscribing with email:", email);
        await axiosInstance.post('/subscribe',{email});
        // TODO : Add success toast here for successfull subscribtion 
        setEmail("");
        setIsValidEmail(false);
        setPlaceholder("Enter your email");
      } else {
        // TODO : Add error toast here for incorrect email 
        setPlaceholder("Please enter a valid email address");
      }
    } catch (error) {
      console.log("something went wrong while subscribing")
      // TODO : Add error toast here 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* First Div */}
      <div className="flex flex-col">
        <img alt="maa" src="/assets/maa-logo.png" className="mb-4 w-44 h-20" />
        <p className="w-80 text-[#0B0B0B]">
          Empowering communities through education, healthcare, and sustainable development, Maa Foundation is dedicated to creating lasting positive change and uplifting lives across India.
        </p>
      </div>

      <div>
        <ul className="space-y-2 mt-12 font-normal">
          <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Quick Links</h2>
          <li>
            <Link to="objective" smooth={true} duration={500} offset={-100} className="hover:text-primary-base hover:underline underline-offset-1 cursor-pointer">
              Objective
            </Link>
          </li>
          <li>
            <Link to="volunteer" smooth={true} duration={500} offset={-100} className="hover:text-primary-base hover:underline underline-offset-1 cursor-pointer">
              Volunteer
            </Link>
          </li>
          <li>
            <Link to="donateSection" smooth={true} duration={500} offset={-400} className="hover:text-primary-base hover:underline underline-offset-1 cursor-pointer">
              Donate
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-2 mt-12 font-normal">
          <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Shortcuts</h2>
          <li>
            <NavLink to="/blogs" className="hover:text-primary-base hover:underline" onClick={scrollToTop}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="hover:text-primary-base hover:underline" onClick={scrollToTop}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-primary-base hover:underline" onClick={scrollToTop}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="space-y-2 mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Get Updated</h2>
        <div className="flex items-center justify-center input-field-primary !p-0 h-10 w-full max-w-md overflow-hidden">
          <div className="flex-grow h-full relative">
            <input autoFocus
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={handleEmailChange}
              className={`bg-inherit h-full font-normal !m-0 border-none pl-1 pr-0 min-w-56 w-60 focus:outline-none focus:ring-0 focus:border-transparent`}
            />
          </div>
          <div className="w-px h-2/3 bg-gray-300 z-10"></div>
          <button
            className={`btn-primary border border-primary-base text-white px-4 min-w-[100px] flex-shrink-0 rounded-l-none !hover:border-primary-dark'
                }`}
            type="button"
            onClick={handleSubscribe}
            disabled={!isValidEmail}

          >
            Subscribe
          </button>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="mb-4 text-primary-base font-semibold">Follow on</h2>
          <NavLink to="#" onClick={scrollToTop}>
            <img src="/assets/socials/instagram.svg" className="h-[25px] hover:h-[30px] hover:transition-all hover:duration-300 hover:ease-in-out" alt="Instagram" />
          </NavLink>
          <NavLink to="#" onClick={scrollToTop}>
            <img src="/assets/socials/fb.svg" alt="Facebook" className="h-[24px] hover:h-[30px] hover:transition-all hover:duration-300 hover:ease-in-out" />
          </NavLink>
          <NavLink to="#" onClick={scrollToTop}>
            <img src="/assets/socials/x.svg" alt="Twitter" className="h-[24px] hover:h-[30px] hover:transition-all hover:duration-300 hover:ease-in-out" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;