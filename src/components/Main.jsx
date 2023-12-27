import React from "react";
import Banner from "./Banner";
import ProductCat from "./ProductCat";
import Feature from "./Feature";
import Client from "./Client";
import LatestProduct from "./LatestProduct";
import Testimonial from "./Testimonial";
import TopSellingProduct from "./TopSellingProduct";

const Main = () => {
  return (
    <>
      <Banner />
      <Feature />
      <LatestProduct />
      <ProductCat />
      <TopSellingProduct />
      <Testimonial />
      <Client />
    </>
  );
};

export default Main;
