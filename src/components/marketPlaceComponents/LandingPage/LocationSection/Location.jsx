import React from 'react'
import "./Location.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { HiArrowLongRight } from 'react-icons/hi2';

const Location = ({children ,pageTitle}) => {
  const renderSwiperSlides = children.map( child => (
    <>
      <SwiperSlide>
          {child}
      </SwiperSlide>
    </>
  ) )
  return (
    <div className='landing-location bg-white py-[4rem] lg:py-[6rem] mb-[25px]'>
        <div className="marketplace-container">
            <div className="location-heading special-landing-heading flex items-end justify-between">
                <div>
                  <span>{pageTitle}</span>
                  <h1>Location Listings</h1>
                </div>
                
                <a className='font-[500] mb-[5px]' href='/marketplace/realestate/search'>
                  Browse All <HiArrowLongRight className='inline text-[14px]' /> 
                </a>
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
                className="location-swiper !pb-[4rem] md:!pb-[5rem]"
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

                  <div className="buttons">
                    <button className='swiper-location-prev-btn'><FaChevronLeft /></button>
                    <button className='swiper-location-next-btn'><FaChevronRight /></button>
                  </div>
                </Swiper>
            </div>

            
        </div>
    </div>
  )
}

export default Location