import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axios";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    feedback: "",
  });

  const [flag, setFlag] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlag(true);
    try {
      const response = await axiosInstance.post("/feedback/create", contactInfo);
      console.log(response);
      toast.success("Feedback successfully submitted");
      setFlag(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message || "An error occurred");
      setFlag(false);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-16 py-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Get in Touch with{" "}
              <span className="text-[#ff2020]">Maa Foundation</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Connect with Maa Foundation for inquiries, support, or to get
              involved. We're here to answer your questions and collaborate for
              a better future.
            </p>
          </div>
          <div className="w-full max-w-xl mx-auto">
            <img
              src="/Contact/MapImg.jpg"
              alt="map"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Contact Info and Form Section */}
        <div className="mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-base sm:text-lg font-normal leading-relaxed">
              <span className="text-lg sm:text-xl text-primary-base font-semibold block mb-2">
                MAA FOUNDATION
              </span>
              has been working in India for over 70 years, for the upliftment of
              marginalised women and girls through 53 programmes in 18 states
              and 130+ districts.
            </p>
            <div className="space-y-6">
              {[
                { icon: "/Contact/lets-icons_message-light.jpg", text: "maafoundataion@gmail.com" },
                { icon: "/Contact/solar_phone-linear.jpg", text: "+91 9865327856, +91 9785694325" },
                { icon: "/Contact/basil_location-outline.jpg", text: "somewhere in Delhi" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
            />
            <textarea
              placeholder="Provide Feedback"
              className="w-full p-3 border border-gray-300 rounded-md h-32 text-sm sm:text-base resize-none"
              value={contactInfo.feedback}
              onChange={(e) => setContactInfo({ ...contactInfo, feedback: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary-base text-white py-3 px-6 rounded-md font-semibold text-sm sm:text-base hover:bg-primary-dark transition duration-300"
              disabled={flag}
            >
              {flag ? "Submitting..." : "Send Feedback"}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-12 sm:my-20">
        <iframe
          title="Map"
          className="w-full h-[300px] sm:h-[400px] lg:h-[600px]"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </>
  );
}