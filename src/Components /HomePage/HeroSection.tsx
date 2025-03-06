'use client'

import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';

if (typeof window !== 'undefined') {
    require('aos');
}

const HeroSection = () => {
    React.useEffect(() => {
        const AOS = require('aos');
        AOS.init({
          duration: 1200,
        });
    })

    return (
        <>
            <Swiper
                navigation={true}
                slidesPerView={'auto'}
                pagination={{ dynamicBullets: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}>
                
                <SwiperSlide>
                    <div className='relative w-full h-screen'>
                        <Image 
                            src='https://images.unsplash.com/photo-1481575184241-4754ea78a1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW90b3IlMjBiaWtlfGVufDB8fDB8fHww'
                            alt='Image of a bike'
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl m-2" data-aos='fade-right'>
                                Honest Quality Work at affordable Prices
                            </h1>
                            <h2 className='text-white text-xl sm:text-2xl text-center' data-aos='fade-left'>
                                We sell top-notch motor bikes and service for imported and domestic heavy bikes. From brake servicing and exhaust tuning to <br/> engine repairs and performance upgrades, we’ve got your style ride covered!
                            </h2>
                            <div className='m-4'>
                                <button className='bg-blue-600 btn-primary p-3 sm:p-4 rounded-md text-white'>
                                    GET FREE QUOTES
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative w-full h-screen'>
                        <Image 
                            src='https://plus.unsplash.com/premium_photo-1661960487542-352d8c5a69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlJTIwZW5naW5lfGVufDB8fDB8fHww'
                            alt='Image of man fixing bike'
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl m-2" data-aos="zoom-in">
                                Latest Motor Bikes at affordable Prices
                            </h1>
                            <h2 className='text-white text-xl sm:text-2xl text-center' data-aos="zoom-out">
                                We provide top-notch service for imported and domestic motorbikes and bikes. From brake servicing and exhaust tuning to<br/>engine repairs and performance upgrades, we’ve got your ride covered!
                            </h2>
                            <div className='m-4'>
                                <button className='bg-blue-600 btn-primary p-3 sm:p-4 rounded-md text-white'>
                                    GET FREE QUOTES
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative w-full h-screen'>
                        <Image 
                            src='https://media.istockphoto.com/id/2159024988/photo/gravel-bike-racing-on-mixed-terrain-with-other-cyclists.webp?a=1&b=1&s=612x612&w=0&k=20&c=-glQRZl5zIHX8gl4VhbX7n5X-n_K8fevDRBcgvA0UuQ=' 
                            alt='Image of a bike'
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl m-2" data-aos="flip-up">
                                Latest Bikes at affordable Prices
                            </h1>
                            <h2 className='text-white text-xl sm:text-2xl text-center' data-aos="flip-down">
                                We provide top-notch bikes and service for imported and domestic bikes. From brake servicing and exhaust tuning to<br/>engine repairs and performance upgrades, we’ve got your ride covered!
                            </h2>
                            <div className='m-4'>
                                <button className='bg-blue-600 btn-primary p-3 sm:p-4 rounded-md text-white'>
                                    GET FREE QUOTES
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSection
