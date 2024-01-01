import React from "react";
import ProductData from "@/data/ProductData";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCat = () => {
  const router = useRouter();

  const groupedData = {};
  ProductData.forEach((dataItem) => {
    if (!groupedData[dataItem.category]) {
      groupedData[dataItem.category] = {
        title: dataItem.category,
        thumbnailImage: dataItem.imageUrl,
        products: [dataItem],
      };
    } else {
      groupedData[dataItem.category].products.push(dataItem);
    }
  });

  return (
    <section className="md:py-20 py-16 bg-gray-200 bg-opacity-80">
      {Object.values(groupedData).length > 0 && (
        <div className="container flex flex-col sm:items-start items-center gap-2">
          <h2 className="md:text-2xl text-xl font-medium">Categories</h2>
          <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
            {Object.values(groupedData).map((dataItem, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-2 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] group rounded-sm bg-white"
              >
                <button
                  onClick={() => router.push(`/category/${dataItem.title}`)}
                  className="overflow-hidden"
                >
                  <Image
                    src={dataItem.thumbnailImage}
                    priority={true}
                    height={1000}
                    width={1000}
                    className="w-full sm:h-[250px] h-[150px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear"
                    alt={dataItem.title}
                  />
                </button>
                <h3 className="sm:text-xl text-lg font-medium leading-5 text-center">
                  {dataItem.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCat;
