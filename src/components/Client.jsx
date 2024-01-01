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
import Image from "next/image";
import clientData from "@/data/clientData";

const Client = () => {
  return (
    <section className="md:py-20 py-16 bg-gray-100">
      <div className="container flex flex-col items-center gap-4">
        <h2 className="md:text-2xl text-xl font-medium">Clients</h2>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            slidesPerView={3}
            style={{
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-theme-color": "#EB1B8F",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
              "--swiper-navigation-button-prev-size": "10px",
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
          >
            {clientData.map((clientItem, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={clientItem.imageUrl}
                  height={2000}
                  width={2000}
                  priority={true}
                  className="md:h-[90px] h-[40px] w-full bg-white p-1 object-contain"
                  alt={clientItem.companyName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Client;
