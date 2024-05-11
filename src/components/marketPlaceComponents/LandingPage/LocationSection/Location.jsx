import React from 'react'
import "./Location.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import RealCard from '../../RealEstate/Items/RealCard';

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Location = () => {
  return (
    <div className='landing-location py-[3rem]'>
        <div className="landing-location-container">
            <div className="location-heading special-landing-heading text-center">
                <span>Properties</span>
                <h1>Location Lisitngs</h1>
            </div>

            <div className="card-container mt-[30px]">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                    nextEl:".swiper-next-btn",
                    prevEl:".swiper-prev-btn",
                  }}
                className="location-swiper !pb-[35px]"
                modules={[Navigation]}
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
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
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

export default Location