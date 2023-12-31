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
import TestimonialData from "@/data/TestimonialData";

const Testimonial = () => {
  return (
    <section className="md:py-20 py-16 bg-gray-800 text-white">
      <div className="container flex flex-col items-center gap-4">
        <h2 className="md:text-2xl text-xl font-medium">Testimonials</h2>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              clickable: true,
            }}
            style={{
              "--swiper-theme-color": "#fff",
              "--swiper-navigation-size": "20px",
              "--swiper-navigation-background": "#000",
            }}
            autoplay={{ delay: 6000 }}
          >
            {TestimonialData.map((dataItem, index) => (
              <SwiperSlide key={index}>
                <div className="xl:w-1/2 lg:w-3/4 w-full  mx-auto text-center text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-6 h-6 text-thirdColor md:mb-8 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed md:text-lg sm:text-base text-sm">
                    {dataItem.description}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 my-4"></span>
                  <h3 className="text-gray-100 font-medium title-font tracking-wider text-sm">
                    {dataItem.name}
                  </h3>
                  <p className="text-gray-400">{dataItem.profession}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
