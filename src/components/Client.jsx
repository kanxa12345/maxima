import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';

const Client = () => {
    const clientImages = [
        '/images/clients-images/alwish.png',
        '/images/clients-images/high-vision.png',
        '/images/clients-images/j4.png',
        '/images/clients-images/paragon.png',
        '/images/clients-images/supreme.png',
        '/images/clients-images/tejasvi.png',
    ]
    return (
        <section className='py-20 bg-gray-100'>
            <div className="container flex flex-col items-center gap-4">
                <h2 className='text-2xl font-medium'>Clients</h2>
                <div className='w-full'>
                    <Swiper

                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{ delay: 3000 }}
                        slidesPerView={3}
                        style={{
                            '--swiper-pagination-bullet-size': '10px',
                            '--swiper-pagination-bullet-inactive-color': '#fff',
                            '--swiper-theme-color': '#EB1B8F',
                            '--swiper-pagination-bullet-inactive-opacity': '0.7',
                            '--swiper-navigation-button-prev-size': '10px',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 70
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 80
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 80
                            }
                        }}
                    >
                        {clientImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image height={200} width={200} className='md:h-[100px] h-[40px] w-full bg-white p-1 object-contain' src={image} alt="client-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Client;
