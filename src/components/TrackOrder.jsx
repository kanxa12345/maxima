import React, { useState } from "react";

const TrackOrder = ({ closeModal, setOpenTrack }) => {
  const initialForm = {
    productName: "",
    address: "",
    quantity: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted successfully!");

    // Reset the form to its initial state
    setForm(initialForm);
  };

  return (
    <div className="xl:w-[25%] lg:w-8/12 w-10/12 bg-white py-4 px-10 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] flex flex-col items-center">
      <button
        onClick={() => closeModal(setOpenTrack)}
        className="w-[35px] h-[35px] flex justify-center items-center bg-gray-200 rounded-full ms-auto mb-2"
      >
        <i className="fa-solid fa-xmark text-xl"></i>
      </button>
      <h2 className="lg:text-2xl text-xl font-medium sm:mb-4 mb-1 text-center">
        Track your order
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col justify-between items-center gap-4 mb-3"
      >
        <div className="w-full">
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Productname"
            value={form.productName}
            onChange={handleInputChange}
            required
            className="focus:outline-none w-full p-2 border border-gray-400 rounded"
          />
        </div>
        <div className="w-full relative">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address"
            value={form.address}
            onChange={handleInputChange}
            required
            className={`focus:outline-none w-full p-2 border border-gray-400 rounded placeholder:text-base placeholder:font-normal`}
          />
        </div>
        <div className="w-full relative">
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Product quantity"
            value={form.quantity}
            onChange={handleInputChange}
            required
            className={`focus:outline-none w-full p-2 border border-gray-400 rounded placeholder:text-base placeholder:font-normal`}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-brandColor py-2 px-3 rounded-md"
        >
          Track Order
        </button>
      </form>
    </div>
  );
};

export default TrackOrder;
