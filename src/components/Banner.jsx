import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Banner = () => {
    const images = [
        '/images/banner-image/img1.avif',
        '/images/banner-image/img2.avif',
        '/images/banner-image/img3.avif',
        '/images/banner-image/img4.avif',
        '/images/banner-image/img5.avif',
    ]

    return (
        <section className='w-full h-auto'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                navigation={{
                    clickable: true,
                }}
                style={{
                    '--swiper-pagination-bullet-size': '8px',
                    '--swiper-pagination-bullet-inactive-color': '#fff',
                    '--swiper-theme-color': '#0001FB',
                    '--swiper-pagination-bullet-inactive-opacity': '0.7',
                    '--swiper-navigation-size': '30px',
                    '--swiper-navigation-background': '#000',
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000 }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image height={300} width={300} className='w-full lg:h-[600px] md:h-[400px] h-[300px] object-cover' src={image} alt="banner-image"  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Banner;
