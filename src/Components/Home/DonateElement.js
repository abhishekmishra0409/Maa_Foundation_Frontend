import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";

const DonateElement = () => {
  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    donationAmount: ""
  });

  const [amountError, setAmountError] = useState(false);

  const handleButtonClick = (amount) => {
    setDonationData((prevData) => ({
      ...prevData,
      donationAmount: amount
    }));
  };

  const isFormValid = donationData.name  && donationData.donationAmount;

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        const formattedName = value.replace(/[^a-zA-Z\s]/g, '');
        setDonationData((prevData) => ({
          ...prevData,
          name: formattedName
        }));
        break;
      case "email":
        const formattedEmail = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setDonationData((prevData) => ({
          ...prevData,
          email: formattedEmail
        }));
        break;
      case "donationAmount":
        const formattedAmount = value.replace(/\D/g, '');
        formattedAmount >= 400000 ? setAmountError(true) : setAmountError(false);
        setDonationData((prevData) => ({
          ...prevData,
          donationAmount: formattedAmount
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.isEmail(donationData.email)) {
      console.log("Donation Data:", donationData);
      // ToDo: Redirect to payment or handle the logic here
    } else {
      console.log("Invalid email:", donationData.email);
    }
  };

  return (
    <div className="border border-black text-gray-900 text-normal mb-7 rounded-lg">
      <form className="m-4" onSubmit={handleSubmit}>
        <input autoFocus
          type="text"
          name="name"
          value={donationData.name}
          onChange={handleChange}
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={donationData.email}
          onChange={handleChange}
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Mail (Optional)"
        />
        <div className="mb-4">
          <div className="flex mb-4 gap-8">
            {["1000", "1500", "2500"].map((amount) => (
              <button
                key={amount}
                className={`px-4 rounded-md hover:bg-gray-200 text-[#0B0B0B] border border-[#0B0B0B] font-bold relative py-1`}
                type="button"
                onClick={() => handleButtonClick(amount)}
              >
                {amount}/-
                {donationData.donationAmount === amount && (
                  <span className="absolute -top-2 -right-2">
                    <img src='/assets/tick.svg' alt="Tick" className="size-5" />
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-1 items-center">
          <input autoFocus
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="donationAmount"
            value={donationData.donationAmount}
            onChange={handleChange}
            className="input-field-primary text-sm !w-1/2"
            placeholder="Rs/- Enter Amount"
          />
            {amountError && (
              <div className="text-primary-base text-center">Please recheck amount. Are you sure?</div>
            )}
          </div>
        </div>
        <NavLink to="/payment">
          <button className="btn-primary mx-auto" disabled={!isFormValid}>Donate</button>
        </NavLink>
      </form>
      <div className="container mx-auto pt-4 px-0 border-t border-[#0B0B0B]">
        <div className="flex justify-between pb-1">
          <div className="p-4 pr-0 text-sm">
            <h1 className="text-lg md:text-xl font-bold mb-4 text-[#0A0A0A]">Online Banking</h1>
            <p className="mb-1 text-[#2E2E2E]">Name: Maa Foundation</p>
            <p className="mb-1 text-[#2E2E2E]">Account No: 9457485678</p>
            <p className="mb-1 text-[#2E2E2E]">IFSC Code: SBIN0014321</p>
            <p className="mr-40 text-[#2E2E2E] font-bold text-center">OR</p>
            <p className="mb-1 text-[#2E2E2E]">maafoundation@upi</p>
          </div>
          <div className="p-4 flex flex-col items-center border-l border-[#0B0B0B] w-[40%]">
            <img src="./assets/bar.png" alt="Placeholder" className="mb-4" />
            <p className="text-center text-sm">Scan to donate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateElement;