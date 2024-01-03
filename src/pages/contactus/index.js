import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  const initialForm = {
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(initialForm);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(form);
    setForm(initialForm);
  };
  return (
    <>
      <section className="md:h-[150px] h-[100px] relative">
        <Image
          src="/images/banner-image/banner3.jpg"
          priority={true}
          height={2000}
          width={2000}
          className="absolute w-full h-full indent-0 object-cover"
          alt="bg-image"
        />
        <div className="absolute w-full h-full inset-0 bg-black opacity-70"></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <ul className="flex items-center gap-1 md:text-lg font-medium">
            <li className="text-gray-300">
              <Link href="/">Home</Link>
            </li>
            /<li>Contact Us</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16">
        <div className="container font-medium flex flex-col items-center gap-4">
          <h2 className="md:text-2xl text-xl font-medium">Get In Touch</h2>
          <div className="xl:w-[80%] w-full flex lg:flex-row flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-4 px-5 py-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-md lg:w-1/2 w-full bg-gray-100">
              <h3 className="md:text-xl text-lg font-medium">Send Feedback</h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-2 w-full sm:text-base text-sm"
              >
                <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="mobile">Phone</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={form.mobile}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleInputChange}
                    className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none"
                  />
                </div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="font-medium text-white bg-secondColor px-2 py-1 rounded cursor-pointer"
                />
              </form>
            </div>
            <div className="lg:w-1/2 w-full relative h-auto border-1">
              <iframe
                className="w-full sm:h-[430px] h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4315.308701976735!2d85.3567882245635!3d27.753885332250917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d6903fddbf1%3A0x730d0ae7a597378a!2sHIKVISION%20TOWER!5e0!3m2!1sne!2snp!4v1704089193858!5m2!1sne!2snp"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bg-white border border-gray-300 sm:w-2/3 w-full bottom-2 sm:right-2 right-0 p-4 flex flex-col items-start gap-3">
                <div>
                  <h4 className="md:text-lg font-medium">Location</h4>
                  <p className="sm:text-sm text-xs font-regular text-gray-500">
                    Hikvision-Nepal Tower, Bu.Na.Pa-02, Kathmandu
                  </p>
                </div>
                <div>
                  <h4 className="md:text-lg font-medium">Contact</h4>
                  <p className="sm:text-sm text-xs font-regular text-gray-500">
                    +977-1-4372908, +977-1-5329988
                  </p>
                </div>
                <div>
                  <h4 className="md:text-lg font-medium">Email</h4>
                  <p className="sm:text-sm text-xs font-regular text-gray-500">
                    maxima.multinationaltrading@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
