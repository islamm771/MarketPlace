import React from 'react'
import RealCard from "../../RealEstate/Items/RealCard"
import { HiArrowLongRight } from 'react-icons/hi2'

import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const RealSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Real Estates</h3>
        <a className='latest-heading-link font-[500]' href="/marketplace/realestates">
          View All <HiArrowLongRight className='inline text-[14px]' /> 
        </a>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
        clickable: true,
        // el:"swiper-memberSuggested-pagination",
        type:"bullets"
        }}
        navigation={{
            nextEl:".swiper-realSuggested-next-btn",
            prevEl:".swiper-realSuggested-prev-btn",
          }}
        className="realSuggested-swiper !pb-[2.5rem] md:!pb-[5rem]"
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
        {/* <div className='swiper-memberSuggested-pagination'></div> */}
      </Swiper>
    </>
  )
}

export default RealSuggested