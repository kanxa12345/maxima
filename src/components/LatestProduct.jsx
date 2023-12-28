import ProductData from "@/data/ProductData";
import ProductItem from "@/pages/category/[category]/ProductItem";
import React from "react";

const LatestProduct = () => {
  const data = [...ProductData];
  const reverseData = data.reverse();
  return (
    <section className="md:py-20 py-16">
      <div className="container flex flex-col sm:items-start items-center gap-4">
        <h2 className="md:text-2xl text-xl font-medium">Latest Products</h2>
        <div className="w-full grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2">
          {reverseData.slice(0, 12).map((dataItem, index) => (
            <ProductItem
              key={index}
              category={dataItem.category}
              subCategory={dataItem.subCategory}
              dataItem={dataItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
