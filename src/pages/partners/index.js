import ClientData from "@/data/clientData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [activeProvince, setActiveProvince] = useState(0);
  const [activeDistrict, setActiveDistrict] = useState(0);

  const handleProvince = (index) => {
    setActiveProvince(index);
    setActiveDistrict(0);
  };

  const handleDistrict = (index) => {
    setActiveDistrict(index);
  };

  const groupedData = {};

  ClientData.forEach((dataItem) => {
    if (!groupedData[dataItem.province]) {
      groupedData[dataItem.province] = {
        province: dataItem.province,
        districts: {},
      };
    }

    const provinceGroup = groupedData[dataItem.province];
    if (!provinceGroup.districts[dataItem.district]) {
      provinceGroup.districts[dataItem.district] = {
        district: dataItem.district,
        clients: [dataItem],
      };
    } else {
      provinceGroup.districts[dataItem.district].clients.push(dataItem);
    }
  });

  return (
    <>
      <section className="md:h-[150px] h-[100px] relative">
        <Image
          src="/images/banner-image/img1.avif"
          priority={true}
          height={200}
          width={200}
          className="absolute w-full h-full indent-0 object-cover"
          alt="bg-image"
        />
        <div className="absolute w-full h-full inset-0 bg-black opacity-70"></div>
        <div className="container flex justify-center items-center h-full relative text-white">
          <ul className="flex items-center gap-1 md:text-lg font-medium">
            <li className="text-gray-300">
              <Link href="/">Home</Link>
            </li>
            /<li>Our Partners</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16">
        <div className="container flex flex-col items-center gap-4">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-4 w-full border-b border-gray-600">
              {Object.values(groupedData).map((provinceItem, provinceIndex) => (
                <div key={provinceIndex}>
                  <button
                    onClick={() => handleProvince(provinceIndex)}
                    className={`py-1 px-2 ${
                      activeProvince === provinceIndex ? "text-brandColor" : ""
                    }`}
                  >
                    {provinceItem.province}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              {Object.values(groupedData).map((provinceItem, provinceIndex) => (
                <div
                  key={provinceIndex}
                  className={`w-full ${
                    activeProvince === provinceIndex ? "block" : "hidden"
                  }`}
                >
                  {activeProvince === provinceIndex && (
                    <div className="flex items-start gap-4 border-b border-gray-400 w-full">
                      {Object.values(provinceItem.districts).map(
                        (districtItem, districtIndex) => (
                          <div key={districtIndex}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation(),
                                  handleDistrict(districtIndex);
                              }}
                              className={`py-1 px-2 ${
                                activeDistrict === districtIndex
                                  ? "text-thirdColor"
                                  : ""
                              }`}
                            >
                              {districtItem.district}
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              {Object.values(groupedData).map((provinceItem, provinceIndex) => (
                <div
                  key={provinceIndex}
                  className={`w-full ${
                    activeProvince === provinceIndex ? "block" : "hidden"
                  }`}
                >
                  {activeProvince === provinceIndex && (
                    <div className="flex flex-col items-start gap-2 w-full">
                      {Object.values(provinceItem.districts).map(
                        (districtItem, districtIndex) => (
                          <div
                            key={districtIndex}
                            className={`w-full ${
                              activeDistrict === districtIndex
                                ? "block"
                                : "hidden"
                            }`}
                          >
                            {activeDistrict === districtIndex && (
                              <div className="w-full flex flex-col gap-4">
                                {districtItem.clients.map(
                                  (clientItem, clientIndex) => (
                                    <div
                                      key={clientIndex}
                                      className="flex items-center gap-8 w-full shadow-md p-4"
                                    >
                                      <div className="w-1/4">
                                        <Image
                                          src={clientItem.imageUrl}
                                          priority={true}
                                          width={2000}
                                          height={2000}
                                          alt={clientItem.companyName}
                                          className="w-full h-[200px] object-contain"
                                        />
                                      </div>
                                      <div className="w-3/4 flex flex-col items-start">
                                        <h3 className="text-xl font-semibold">
                                          {clientItem.companyName}
                                        </h3>
                                        <span className="flex items-center gap-1">
                                          <p className="font-medium">
                                            Location:
                                          </p>
                                          {clientItem.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                          <p className="font-medium">
                                            Contact No.:
                                          </p>
                                          {clientItem.contact}
                                        </span>
                                        <span className="flex items-center gap-1">
                                          <p className="font-medium">Email:</p>
                                          {clientItem.email}
                                        </span>
                                        {clientItem.website.length > 0 && (
                                          <p className="flex items-center gap-1">
                                            Website:
                                            <a
                                              href={`https://${clientItem.website}`}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="inline-block hover:underline"
                                            >
                                              {clientItem.website}
                                            </a>
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
