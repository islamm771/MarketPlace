import React from 'react'
import "./Property.css"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { HiArrowLongRight } from 'react-icons/hi2';


import img_01 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-03.jpg"
import img_02 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-01.jpg"
import img_03 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-02.jpg"
import img_04 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-04.jpg"
import img_05 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-05.jpg"


const PropertyDistination = ({children}) => {
//   const renderSwiperSlides = children.map( child => (
//     <>
//       <SwiperSlide>
//           {child}
//       </SwiperSlide>
//     </>
//   ) )
  return (
    <div className='property-distination-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]'>
        <div className="marketplace-container">
            <div className="propertyDistination-heading special-landing-heading">
                <div>
                  <span>Properties</span>
                  <h1>Property Destinations</h1>
                </div>
                
                {/* <a className='font-[500] mb-[5px]' href='/marketplace/search'>
                  Browse All <HiArrowLongRight className='inline text-[14px]' /> 
                </a> */}
            </div>

            <div className="card-container">
                <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  }}
                navigation={{
                    nextEl:".swiper-PropertyDistination-next-btn",
                    prevEl:".swiper-PropertyDistination-prev-btn",
                  }}
                className="PropertyDistination-swiper !pb-[4rem] md:!pb-[5rem]"
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
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_01} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Soul</a>
                                    <p class="prop-card-tagline">A PLACE UNLIKE ANY OTHER</p>
                                    <p class="prop-card-location">Egypt | North Coast</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_02} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Bellevie</a>
                                    <p class="prop-card-tagline">Life is beautiful</p>
                                    <p class="prop-card-location">Egypt | New Zayed</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_03} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Cairo Gate</a>
                                    <p class="prop-card-tagline">Boutique Lifestyle Living</p>
                                    <p class="prop-card-location">Egypt | Sheikh Zayed City</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_05} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Marrasi</a>
                                    <p class="prop-card-tagline">Truly somewhere else</p>
                                    <p class="prop-card-location">Egypt | North Coast</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_04} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Uptown Cairo</a>
                                    <p class="prop-card-tagline">A PLACE UNLIKE ANY OTHER</p>
                                    <p class="prop-card-location">Egypt | In the Center of Cairo</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='prop-card'>
                            <div className="prop-card-img">
                                <a href="">
                                    <img className='w-[100%]' src={img_03} alt="" />
                                </a>
                            </div>
                            <div className="prop-card-info text-center pt-[15px]">
                                    <a className="prop-card-title" href="#">Soul</a>
                                    <p class="prop-card-tagline">A PLACE UNLIKE ANY OTHER</p>
                                    <p class="prop-card-location">Egypt | North Coast</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="buttons">
                        <button className='swiper-PropertyDistination-prev-btn'><FaChevronLeft /></button>
                        <button className='swiper-PropertyDistination-next-btn'><FaChevronRight /></button>
                    </div>
                </Swiper>
            </div>

            
        </div>
    </div>
  )
}

export default PropertyDistination