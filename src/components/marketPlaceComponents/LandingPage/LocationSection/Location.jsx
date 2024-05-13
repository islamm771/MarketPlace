import React from 'react'
import "./Location.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Location = ({children}) => {
  const renderSwiperSlides = children.map( child => (
    <>
      <SwiperSlide>
          {child}
      </SwiperSlide>
    </>
  ) )
  return (
    <div className='landing-location bg-white py-[3rem] mb-[25px]'>
        <div className="landing-location-container">
            <div className="location-heading special-landing-heading">
                <span>Properties</span>
                <h1>Location Lisitngs</h1>
            </div>

            <div className="card-container">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  }}
                navigation={{
                    nextEl:".swiper-location-next-btn",
                    prevEl:".swiper-location-prev-btn",
                  }}
                className="location-swiper !pb-[50px]"
                modules={[Navigation,Pagination]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                {renderSwiperSlides}
                </Swiper>
            </div>

            <div className="buttons">
                <button className='swiper-location-prev-btn'><FaChevronLeft /></button>
                <button className='swiper-location-next-btn'><FaChevronRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Location