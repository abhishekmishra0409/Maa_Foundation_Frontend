import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/blogs') {
      return location.pathname.startsWith('/blogs') || location.pathname.startsWith('/blog/');
    }
    if (path === '/events') {
      return location.pathname.startsWith('/events') || location.pathname.startsWith('/event/');
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (url) => {
    setIsOpen(false);
    navigate(url);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    ["Home", "/"],
    ["Events", "/events"],
    ["Gallery", "/gallery"],
    ["Blogs", "/blogs"],
    ["About", "/about"],
  ];

  return (
    <nav className="relative py-4 flex justify-between items-center bg-secondary-light w-full px-20 pb-5">
      <Link className="text-3xl font-bold leading-none" to="/" onClick={() => handleNavigation("/")}>
        <img alt="maa-logo" className="h-14" src="/assets/maa-logo.png" />
      </Link>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <ul className={`lg:flex lg:items-center lg:w-auto lg:space-x-4 ${isOpen ? "block" : "hidden"} absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}>
        {menuItems.map(([title, url]) => (
          <li key={url}>
            <button
              onClick={() => handleNavigation(url)}
              className={`nav-link font-normal ${isActive(url) ? "text-primary-base underline !font-medium" : "text-black-500"}`}
            >
              {title}
            </button>
          </li>
        ))}
        <li className="mt-4 lg:mt-0">
          <button
            onClick={() => handleNavigation("/signup")}
            className="block lg:inline-block py-2 px-6 border border-primary-base hover:border-primary-dark bg-primary-base hover:bg-primary-dark text-white text-sm font-bold rounded-xl no-underline"
          >
            Sign Up
          </button>
        </li>
        <li className="mt-4 lg:mt-0">
          <button
            onClick={() => handleNavigation("/login")}
            className="block lg:inline-block py-2 px-6 border border-primary-base hover:bg-primary-base hover:text-white text-sm font-bold rounded-xl no-underline"
          >
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;