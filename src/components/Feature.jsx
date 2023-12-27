import FeatureData from "@/data/FeatureData";
import React from "react";

const Feature = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
        {FeatureData.map((dataItem, index) => (
          <div
            key={index}
            className="flex xl:flex-row flex-col items-center xl:justify-center justify-start gap-3"
          >
            <i
              aria-hidden={true}
              className={`${dataItem.icon} text-gray-600 xl:text-2xl text-xl`}
            ></i>
            <h3 className="xl:text-lg font-medium text-center">
              {dataItem.title.toUpperCase()}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
