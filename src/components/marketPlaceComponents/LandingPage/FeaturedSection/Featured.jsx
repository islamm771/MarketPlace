import React from 'react'
import "./Featured.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Featured = ({pageTitle,title,subTitle ,children , MemberCards , RealCards , AutoCards}) => {
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
        <div className="landing-featured-container">
            <div className="featured-heading special-landing-heading">
                <span>{pageTitle}</span>
                <h1>{title ? title : "Featured Lisitngs"}</h1>
                {subTitle && <span>{subTitle}</span>}
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
                  </Swiper>
                  {/* <div className='swiper-featured-pagination'></div> */}
                </div>

                <div className="buttons">
                    <button className='swiper-featured-prev-btn'><FaChevronLeft /></button>
                    <button className='swiper-featured-next-btn'><FaChevronRight /></button>
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