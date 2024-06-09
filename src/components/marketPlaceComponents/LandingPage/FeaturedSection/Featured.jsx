import React from 'react'
import "./Featured.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { HiArrowLongRight } from 'react-icons/hi2';
const Featured = ({pageTitle,title,subTitle ,children , MemberCards , RealCards , AutoCards , link}) => {
  let renderSwiperSlides;
  console.log(children)
  if(children){
    renderSwiperSlides = children.map( child => (
      <>
        <SwiperSlide>
            {child}
        </SwiperSlide>
      </>
    ) )
  }
  return (
    <div className='landing-featured bg-white py-[4rem] lg:py-[6rem] mb-[25px]'>
        <div className="marketplace-container">
            <div className="featured-heading special-landing-heading flex items-end justify-between">
                <div>
                  <span>{pageTitle}</span>
                  <h1>{title ? title : "Featured Listings"}</h1>
                  {subTitle && <span>{subTitle}</span>}
                </div>
                {!title && <a className='font-[500] mb-[5px]' href={link}>
                  Browse All <HiArrowLongRight className='inline text-[14px]' /> 
                  </a>}
            </div>

            {renderSwiperSlides && (
              <>
                <div className="card-container">
                  <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  // centeredSlides={true}
                  pagination={{
                  clickable: true,
                  // el:"swiper-featured-pagination",
                  type:"bullets"
                  }}
                  navigation={{
                      nextEl:".swiper-featured-next-btn",
                      prevEl:".swiper-featured-prev-btn",
                    }}
                  className="featured-swiper !pb-[2.5rem] md:!pb-[5rem]"
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

                    {renderSwiperSlides}

                    <div className="buttons">
                      <button className='swiper-featured-prev-btn'><FaChevronLeft /></button>
                      <button className='swiper-featured-next-btn'><FaChevronRight /></button>
                    </div>
                  </Swiper>
                  {/* <div className='swiper-featured-pagination'></div> */}
                </div>

                
              </>)}

            {MemberCards && <>{MemberCards}</>}
            {RealCards && <>{RealCards}</>}
            {AutoCards && <>{AutoCards}</>}


        </div>
    </div>
  )
}

export default Featured