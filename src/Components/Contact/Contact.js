import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axios";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    feedback: "",
  });

  // Function to validate email
  const [flag, setFlag] = useState(false);
  const handleSumbit = async (e) => {
    e.preventDefault();
    setFlag(true);
    try {
      const response = await axiosInstance.post(
        "/feedback/create",
        contactInfo
      );
      console.log(response);
      toast.success("FeedBack successfully submitted");
      setFlag(false);
    } catch (err) {
      console.log(err);
      toast.error(err);
      setFlag(false);
    }
  };

  return (
    <div>
      <div className="mx-5 lg:mx-20 2xl:mx-36 pt-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8">
          {/* First div content */}
          <div className=" flex flex-col justify-center items-center md:items-start gap-8 lg:gap-10">
            <h1 className="heading leading-snug font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              <span className="">Get in Touch with </span>
              <span className="main-heading">Maa Foundation</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl pr-0 md:pr-20 -mt-5 text-justify">
              Connect with Maa Foundation for inquiries, support, or to get
              involved. We're here to answer your questions and collaborate for
              a better future.
            </p>
          </div>

          {/* Second div content with image */}
          <div className="flex hidden sm:block justify-center items-center lg:-mr-4">
            <img alt="map" src="/Contact/MapImg.jpg" className="w-full" />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-28 gap-3">
          <div className="flex flex-wrap w-full lg:w-[45%] text-gray-dark">
            <p className="text-lg lg:text-xl font-normal leading-9">
              <span className="text-lg lg:text-xl text-primary-base mb-4">
                MAA FOUNDATION{" "}
              </span>
              has been working in India for over 70 years, for the upliftment of
              marginalised women and girls through 53 programmes in 18 states
              and 130+ districts.
            </p>
            <div className="mt-8   space-y-6 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <img
                  className="size-7"
                  src="/Contact/lets-icons_message-light.jpg"
                  alt="Email Icon"
                />
                <p>maafoundataion@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="size-6"
                  src="/Contact/solar_phone-linear.jpg"
                  alt="Phone Icon"
                />
                <p>+91 9865327856, +91 9785694325</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="size-6"
                  src="/Contact/basil_location-outline.jpg"
                  alt="Location Icon"
                />
                <p>somewhere in Delhi</p>
              </div>
            </div>
          </div>

          {/* Vertical line */}
          <div className="block lg:block w-px bg-gray-300 mx-4 my-8 lg:my-0"></div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-[45%] flex justify-center md:mt-5 lg:mt-0">
            <form onSubmit={handleSumbit} className="w-full max-w-lg space-y-4">
              <input
                onChange={(e) => {
                  setContactInfo({
                    ...contactInfo,
                    email: e.target.value,
                  });
                }}
                value={contactInfo.email}
                type="email"
                placeholder="Your Mail"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light"
              />
              <input
                onChange={(e) => {
                  setContactInfo({
                    ...contactInfo,
                    phone: e.target.value,
                  });
                }}
                type="tel"
                placeholder="Phone Number (optional)"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light"
              />
              <textarea
                onChange={(e) => {
                  setContactInfo({
                    ...contactInfo,
                    feedback: e.target.value,
                  });
                }}
                placeholder="Provide Feedback"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light w-full h-44 resize-none rounded-md"
                rows="4"
              />
              <button
                type="submit"
                className="btn-primary lg:text-lg"
                disabled={flag} // Disable the button while submitting
              >
                {flag ? "Submitting..." : "Feedback"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-20">
        <iframe
          title="Map"
          width="100%"
          height="700"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
}
