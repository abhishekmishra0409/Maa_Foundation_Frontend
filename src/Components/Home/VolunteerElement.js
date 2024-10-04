import React, { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axios";

const VolunteerElement = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    address: "",
    reason: "",
    agreed: false,
  });
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phoneNumber") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 10);
      setVolunteerData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setVolunteerData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const clear = () => {
    setVolunteerData({
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
      address: "",
      reason: "",
      agreed: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await axiosInstance.post('/create/volunteer', volunteerData);
    console.log(res);
    console.log(volunteerData);
    clear();

    
    if (volunteerData.email.trim() !== "" && validator.isEmail(volunteerData.email)) console.log("Volunteer Data:", volunteerData);
    else {
      //ToDo: display toast here for invalid email

    }
  };

  return (
    <div className="-mt-10 md:-mt-8 lg:-mt-0">
      <div className="flex justify-center items-center">

        <h1 className="text-2xl md:text-3xl lg:text-4xl leading-snug">
          <span className="">Become a </span>
          <span className="main-heading">Volunteer</span>
        </h1>
      </div>
      <section
        className="volunteer w-volunteer w-full  bg-cover bg-center bg-no-repeat mt-2 md:mt-6 h-[882px] bg-cover bg-center bg-no-repeat mt-2 md:mt-6 "
        style={{
          background: `linear-gradient(261.68deg, #ffffff 6.38%, #ffffff 11.65%, #ffffff 17.15%, #ffffff 20.6%, #ffffff 24.43%, #ffffff 36.62%, #ffffff 41.71%, #ffffff 45.65%, rgba(203, 203, 203, 0.1) 89.6%), url('/assets/volunteer.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="flex items-center sm:h-full justify-center sm:justify-end sm:mr-[5%] lg:mr-20">
          <form
            className="mt-2 space-y-3 xl:space-y-6 sm:mt-10 w-[80%] sm:w-full sm:max-w-96 lg:max-w-md xl:max-w-lg"
            onSubmit={handleSubmit}
          >
            <input
              className="input-field-primary"
              placeholder="Your Name"
              name="name"
              value={volunteerData.name}
              onChange={handleChange}
              required
            />
            <input autoFocus
              className="input-field-primary py-0 md:py-3 lg:py-3"

              placeholder="Your email"
              name="email"
              value={volunteerData.email}
              onChange={handleChange}
              required
            />
            <div className="flex items-center gap-1">
              <span className="input-field-primary text-sm w-fit py-0 md:py-3 lg:py-3">+91</span>
              <input autoFocus
                className="input-field-primary py-0 md:py-3 lg:py-3"
                placeholder="Your Number (optional)"
                name="phoneNumber"
                type="tel"
                value={volunteerData.phoneNumber}
                onChange={handleChange}
                maxLength={10}
                pattern="[0-9]{10}"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="input-field-primary text-sm min-w-[100px] lg:min-w-[120px] w-fit">
                Date of Birth:
              </span>
              <input
                className="input-field-primary max-h-[2.38rem] lg:max-h-[2.88rem] min-w-[120px]"
                type="date"
                name="dob"
                value={volunteerData.dob}
                onChange={handleChange}

                max={
                  new Date(
                    new Date().setFullYear(new Date().getFullYear() - 16)
                  )
                    .toISOString()
                    .split("T")[0]
                } // Ensures user is minimum 16 years old
                required
              />
            </div>

            <input
              className="input-field-primary"
              placeholder="Your Address"
              name="address"
              value={volunteerData.address}
              onChange={handleChange}
              required
            />
            <textarea
              className="input-field-primary w-full h-44 mb-5 text-sm resize-none rounded-md p-3"
              rows="10"
              placeholder="Why You Want to Join as Volunteer?"
              name="reason"
              value={volunteerData.reason}
              onChange={handleChange}
              required
            />
            <div className="flex items-center gap-2">
              <input
                id="link-checkbox"
                type="checkbox"
                name="agreed"
                className="custom-checkbox"
                checked={volunteerData.agreed}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="link-checkbox"
                className="text-bold font-medium !text-black"
              >
                <span className="custom-checkbox-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                <span>Agree to the terms and conditions.</span>
              </label>
            </div>
            <div className="flex items-center">
              <button type="submit" className="btn-primary mx-auto">
                {flag ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VolunteerElement;
