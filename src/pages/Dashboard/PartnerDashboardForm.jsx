import React, { useState } from "react";
import eventImage from "/images/enjoy.png";
import { FaCheckCircle } from "react-icons/fa";



const PartnerDashboardForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyNumber: "",
    eventType: "",
    otherInfo: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers in phone & companyNumber
    if (["phone", "companyNumber"].includes(name) && /[^0-9]/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty field check
    for (const key in formData) {
      if (formData[key].trim() === "") {
        alert("Please fill out all fields.");
        return;
      }
    }

    // Phone validation
    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Company number validation
    if (isNaN(formData.companyNumber)) {
      alert("Company number must contain only numbers.");
      return;
    }

    console.log("Form Data Submitted:", formData);

    setShowModal(true);

    // Reset form after successful submit
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      companyNumber: "",
      eventType: "",
      otherInfo: "",
    });

    // Hide modal after 3 seconds
    setTimeout(() => setShowModal(false), 5000);
  };



  return (
    <div className="bg-[#0A0A1F] text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full flex flex-col gap-5 items-center justify-center px-6 sm:px-10 md:px-12 h-60 sm:h-72 md:h-80 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${eventImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <h2 className="text-3xl md:text-5xl text-center md:text-left z-20 font-bold">Hosting an Event? Let’s talk!</h2>
        <p className="text-lg md:text-2xl mt-1.5 z-20 text-center">
          Give us what you have – and we’ll connect through{" "}
          <span className="textPinkColor md:block font-semibold">email as soon as possible!</span>
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-5xl mx-auto my-9 bg-white/5 backdrop-blur-md py-8 px-6 sm:px-10 lg:px-20 space-y-6 rounded-xl shadow-lg border border-[#26243A]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="xyz@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="XXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Registered Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Registered Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white text-black"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company Incorporation Number</label>
            <input
              type="text"
              name="companyNumber"
              placeholder="XXXXXXXXXX"
              value={formData.companyNumber}
              onChange={handleChange}
              maxLength={10}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Type of Event</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              required
            >
              <option value="">Select Type</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Party">Party</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm">Any Other Information</label>
          <textarea
            name="otherInfo"
            placeholder="Details about the event, etc."
            value={formData.otherInfo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white text-black"
            rows="3"
            required
          />
        </div>

        <div className="text-center mt-7">
          <button
            type="submit"
            className="cursor-pointer bgPinkColor w-4/5 hoverPinkColor hover:border-pink-600 hover:border py-2.5 rounded-lg text-white font-medium transition"
          >
            Submit Details
          </button>
        </div>
      </form>



      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-md px-4 sm:px-6">
  <div className="bg-[#0A0A1F] border-2 border-pink-600 p-5 sm:p-8 md:p-10 rounded-xl text-center w-full max-w-md sm:max-w-lg md:max-w-xl text-white shadow-xl">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Your form is submitted!</h2>
    <FaCheckCircle className="text-green-600 mx-auto my-3 text-5xl sm:text-6xl" />
    <p className="text-sm sm:text-base text-gray-300">
      Now let us redirect you home.<br />
      Sit tight and wait for the Wooziee team to contact you!
    </p>

    <button
      onClick={() => setShowModal(false)}
      className="mt-6 px-4 py-2 w-full sm:w-1/2 rounded bgPinkColor hoverPinkColor text-white font-semibold border border-transparent hover:border-pink-600 transition"
    >
      Close
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default PartnerDashboardForm;
