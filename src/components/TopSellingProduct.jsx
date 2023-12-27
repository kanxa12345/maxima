import React from "react";
import ProductItem from "@/pages/category/[category]/ProductItem";
import ProductData from "@/data/ProductData";

const TopSellingProduct = () => {
  return (
    <section className="md:py-20 py-16">
      <div className="container flex flex-col sm:items-start items-center gap-4">
        <h2 className="md:text-2xl text-xl font-medium">
          Top Selling Products
        </h2>
        <div className="w-full grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {ProductData.slice(0, 6).map((dataItem, index) => (
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

export default TopSellingProduct;
