export default function Contact() {
  return (
    <div>
      <div className="mx-20 pt-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8 -mr-8">

          {/* First div content */}
          <div className=" flex flex-col justify-center items-center md:items-start gap-10">
            <h1 className="heading leading-snug font-semibold 2xl:pr-40">
              <span className="">Get in Touch with </span>
              <span className="main-heading">Maa Foundation</span>
            </h1>
            <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5">
              Connect with Maa Foundation for inquiries, support, or to get
              involved. We're here to answer your questions and collaborate
              for a better future.
            </p>
          </div>

          {/* Second div content with image */}
          <div className="flex justify-center items-center">
            <img
              alt="map"
              src="/Contact/MapImg.jpg"
              className="w-full"
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-28 gap-3">
          <div className="flex flex-wrap w-full lg:w-[45%] text-gray-dark">
            <p className="text-lg lg:text-xl font-normal leading-9">
              <span className="text-lg lg:text-xl text-primary-base mb-4">MAA FOUNDATION </span>
              has been working in India for over 70 years, for the
              upliftment of marginalised women and girls through 53
              programmes in 18 states and 130+ districts.
            </p>
            <div className="mt-8 space-y-6 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <img className="size-7" src="/Contact/lets-icons_message-light.jpg" alt="Email Icon" />
                <p>maafoundataion@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="size-6" src="/Contact/solar_phone-linear.jpg" alt="Phone Icon" />
                <p>+91 9865327856, +91 9785694325</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="size-6" src="/Contact/basil_location-outline.jpg" alt="Location Icon" />
                <p>somewhere in Delhi</p>
              </div>
            </div>
          </div>

          {/* Vertical line */}
          <div className="block lg:block w-px bg-gray-300 mx-4 my-8 lg:my-0"></div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-[45%] flex justify-center mt-8 lg:mt-0">
            <form className="w-full max-w-lg space-y-4">
              <input autoFocus
                type="email"
                placeholder="Your Mail"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light"
              />
              <input autoFocus
                type="tel"
                placeholder="Phone Number (optional)"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light"
              />
              <textarea autoFocus
                placeholder="Provide Feedback"
                className="input-field-primary text-base lg:text-xl text-[#9B9B9B] bg-secondary-light w-full h-44 resize-none rounded-md"
                rows="4"
              />
              <button type="submit" className="btn-primary lg:text-lg">Feedback</button>
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
