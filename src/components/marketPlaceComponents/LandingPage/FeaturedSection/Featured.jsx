import React from 'react'
import "./Featured.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import RealCard from '../../RealEstate/Items/RealCard';

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Featured = () => {
  return (
    <div className='landing-featured bg-white py-[4rem] mb-[25px]'>
        <div className="landing-featured-container">
            <div className="featured-heading special-landing-heading">
                <span>Properties</span>
                <h1>Featured Lisitngs</h1>
            </div>

            <div className="card-container">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                navigation={{
                    nextEl:".swiper-next-btn",
                    prevEl:".swiper-prev-btn",
                  }}
                className="featured-swiper !pb-[50px]"
                modules={[Pagination,Navigation]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    992: {
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

export default Featured