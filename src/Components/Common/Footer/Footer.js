import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your email");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validator.isEmail(newEmail));
    setPlaceholder("Enter your email");
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Check for valid email before making a request
    if (!isValidEmail) {
      toast.error("Please enter a valid email address");
      setPlaceholder("Invalid email address");
      return;
    }

    try {
      console.log("Subscribing with email:", email);
      const emailSend = { email };

      // Await the POST request to ensure synchronous-like behavior
      const response = await axios.post('http://localhost:5001/api/subscribe', emailSend);

      // Show success message and reset fields if successful
      toast.success(response?.data?.message || "Subscribed successfully!");
      setEmail("");
      setIsValidEmail(false);

    } catch (error) {
      // Show error message based on server response or fallback
      toast.error(error?.response?.data?.message || "Subscription failed");
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
        {/*<ToastContainer/>*/}
        {/* First Div */}
        <div className="flex flex-col space-y-8 px-4 py-8 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <img alt="maa" src="/assets/maa-logo.png" className="mb-4 w-44 h-20" />
              <p className="text-[#0B0B0B] max-w-sm">
                Empowering communities through education, healthcare, and sustainable development, Maa Foundation is dedicated to creating lasting positive change and uplifting lives across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Quick Links</h2>
              <ul className="space-y-2 font-normal">
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

            {/* Shortcuts */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Shortcuts</h2>
              <ul className="space-y-2 font-normal">
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

            {/* Email Subscription */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Get Updated</h2>
              <div className="flex items-center input-field-primary !p-0 h-10 w-full max-w-full md:max-w-xl lg:max-w-md overflow-hidden">
                <div className="flex-grow h-full relative">
                  <input
                      type="email"
                      placeholder={placeholder}
                      value={email}
                      onChange={handleEmailChange}
                      className="bg-inherit h-full font-normal border-none pl-1 pr-0 w-full focus:outline-none"
                  />
                </div>
                <div className="w-px h-2/3 bg-gray-300 z-10"></div>
                <button
                    className="btn-primary border border-primary-base text-white px-4 min-w-[60px] flex-shrink-0 rounded-l-none hover:border-primary-dark"
                    type="button"
                    onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <h2 className="text-primary-base font-semibold">Follow on</h2>
                <NavLink to="#" onClick={scrollToTop}>
                  <img src="/assets/socials/instagram.svg" className="h-6 hover:h-7 hover:transition-all hover:duration-300 hover:ease-in-out" alt="Instagram" />
                </NavLink>
                <NavLink to="#" onClick={scrollToTop}>
                  <img src="/assets/socials/fb.svg" alt="Facebook" className="h-6 hover:h-7 hover:transition-all hover:duration-300 hover:ease-in-out" />
                </NavLink>
                <NavLink to="#" onClick={scrollToTop}>
                  <img src="/assets/socials/x.svg" alt="Twitter" className="h-6 hover:h-7 hover:transition-all hover:duration-300 hover:ease-in-out" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Footer;
