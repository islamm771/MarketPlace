import React from 'react'
import AutoCard from "../../Automotives/Items/AutoCard"
import { HiArrowLongRight } from 'react-icons/hi2'

import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const AutoSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Automotives</h3>
        <a className='latest-heading-link font-[500]' href="/automotives">
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
            nextEl:".swiper-autoSuggested-next-btn",
            prevEl:".swiper-autoSuggested-prev-btn",
          }}
        className="autoSuggested-swiper !pb-[2.5rem] md:!pb-[5rem]"
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
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Owner"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Developer"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Owner"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Developer"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
        </SwiperSlide>


        {/* <div className='swiper-memberSuggested-pagination'></div> */}
      </Swiper>
    </>
  )
}

export default AutoSuggested