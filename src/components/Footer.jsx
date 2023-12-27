import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(""); // Clear the input field
  };
  return (
    <footer className="py-10 bg-gray-300">
      <div>
        <div className="container py-5">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-start gap-4">
              <Image
                src="/images/logo.png"
                priority={true}
                height={200}
                width={200}
                alt="logo"
                className="w-40"
              />
              <div className="flex gap-5">
                <a
                  href="#"
                  className="w-[20px] h-[20px] text-xs rounded-full border border-black flex justify-center items-center"
                >
                  <i aria-hidden={true} className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-[20px] h-[20px] text-xs rounded-full border border-black flex justify-center items-center"
                >
                  <i aria-hidden={true} className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-[20px] h-[20px] text-xs rounded-full border border-black flex justify-center items-center"
                >
                  <i aria-hidden={true} className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-[20px] h-[20px] text-xs rounded-full border border-black flex justify-center items-center"
                >
                  <i aria-hidden={true} className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-medium">Company</h3>
              <ul>
                <li>
                  <Link
                    href="/aboutus"
                    className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear"
                  >
                    <i
                      aria-hidden={true}
                      className="fa-solid fa-angle-right text-xs"
                    ></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear"
                  >
                    <i
                      aria-hidden={true}
                      className="fa-solid fa-angle-right text-xs"
                    ></i>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xl font-medium">Contact Us</h3>
              <ul className="text-sm flex flex-col items-start gap-1">
                <li className="group">
                  <a
                    href="https://www.google.com/maps/place/HIKVISION+TOWER/@27.7539028,85.356869,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1d6903fddbf1:0x730d0ae7a597378a!8m2!3d27.7538981!4d85.3594439!16s%2Fg%2F11sd88_nz5?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    <i
                      aria-hidden={true}
                      className="fa-solid fa-location-dot text-xs"
                    ></i>
                    <p className="group-hover:underline">
                      Hikvision-Nepal Tower, Bu.Na.Pa-02, Kathmandu
                    </p>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="tel:+977-1-4372908"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    <i
                      aria-hidden={true}
                      className="fa-solid fa-phone text-xs"
                    ></i>
                    <p className="group-hover:underline">+977-1-4372908</p>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="mailto:maxima.multinationaltrading@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    <i
                      aria-hidden={true}
                      className="fa-solid fa-envelope text-xs"
                    ></i>
                    <p className="group-hover:underline">
                      maxima.multinationaltrading@gmail.com
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="text-xl font-medium">Subscribe</h3>
                <form
                  onSubmit={handleSubmit}
                  className="md:w-10/12 sm:w-2/3 w-9/12"
                >
                  <div className="flex items-center text-sm gap-2 bg-white px-2 py-1 border border-gray-500 rounded-[4px] w-full">
                    <div className="flex-grow">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="focus:outline-none bg-transparent rounded-sm w-full"
                      />
                    </div>
                    <button type="submit" className="px-2 py-1">
                      Join
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="text-xl font-medium">We Accept</h3>
                <div className="w-full flex gap-4">
                  <Image
                    src="/images/payment-method/esewa.webp"
                    priority={true}
                    height={100}
                    width={100}
                    alt="esewa"
                    className="w-[70px] h-7 object-cover"
                  />
                  <Image
                    src="/images/payment-method/mastercard.webp"
                    priority={true}
                    height={100}
                    width={100}
                    alt="mastercard"
                    className="w-[70px] h-7 object-cover"
                  />
                  <Image
                    src="/images/payment-method/khalti.webp"
                    priority={true}
                    height={100}
                    width={100}
                    alt="khalti"
                    className="w-[70px] h-7 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-3 border-t border-gray-400">
        <p className="sm:text-sm text-xs text-center">
          Copyright &copy; Maxima International Pvt. Ltd. All right reserved.
          Powered by{" "}
          <a href="https://radiantnepal.com/" className="underline font-medium">
            Radiant Infotech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
