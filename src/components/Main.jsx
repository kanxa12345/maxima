import React from "react";
import Banner from "./Banner";
import ProductCat from "./ProductCat";
import Feature from "./Feature";
import Client from "./Client";
import LatestProduct from "./LatestProduct";
import Testimonial from "./Testimonial";
import TopSellingProduct from "./TopSellingProduct";
import Ad from "./Ad";
import SecondAd from "./SecondAd";

const Main = () => {
  return (
    <>
      <Banner />
      <Ad />
      <Feature />
      <LatestProduct />
      <SecondAd />
      <ProductCat />
      <TopSellingProduct />
      <Testimonial />
      <Client />
    </>
  );
};

export default Main;
