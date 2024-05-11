import React from 'react'
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import img_01 from "../../../../assests/marketplace/landing/Category/3.jpg"
import img_02 from "../../../../assests/marketplace/landing/Category/4.jpg"
import img_03 from "../../../../assests/marketplace/landing/Category/5.jpg"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className='landing-featured py-[3rem]'>
        <div className="landing-featured-container">
            <div className="featured-heading special-landing-heading text-center">
                <span>Properties</span>
                <h1>Featured Lisitngs</h1>
            </div>

            <div className="card-container mt-[30px]">
                <Swiper
                slidesPerView={4}
                spaceBetween={0}
                // centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                navigation={{
                    nextEl:".swiper-next-btn",
                    prevEl:".swiper-prev-btn",
                  }}
                className="featured-swiper !pb-[35px]"
                modules={[Pagination,Navigation]}
                breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                  }}
                >
                <SwiperSlide>
                    <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_03} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_03} className='w-[100%] h-[100%] object-cover' alt="" />
                </SwiperSlide>
                
                </Swiper>
            </div>

            <div className="buttons">
                <button className='swiper-prev-btn'><FaChevronLeft /></button>
                <button className='swiper-next-btn'><FaChevronRight /></button>
            </div>
        </div>
    </div>
  )
}

export default SectionFour