import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Banner = () => {
  const images = [
    "/images/banner-image/banner1.jpg",
    "/images/banner-image/banner2.jpg",
    "/images/banner-image/banner3.jpg",
  ];

  return (
    <section className="w-full h-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-theme-color": "#0001FB",
          "--swiper-pagination-bullet-inactive-opacity": "0.7",
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-background": "#000",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              priority={true}
              height={6000}
              width={6000}
              className="w-full lg:h-[600px] md:h-[400px] sm:h-[300px] h-[200px] object-cover"
              alt="banner-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
