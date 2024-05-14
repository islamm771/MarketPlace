import React from 'react'
import "swiper/css/navigation";
import "swiper/css";
import {  Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "./SectionFour.css"
import img_01 from "../../../../assests/marketplace/landing/Category/3.jpg"
import img_02 from "../../../../assests/marketplace/landing/Category/4.jpg"
import img_03 from "../../../../assests/marketplace/landing/Category/5.jpg"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className='landing-featured-ful py-[4rem] lg:py-[6rem] mb-[25px]'>
        <div className="landing-featured-full-container">
            <div className="featured-full-heading special-landing-heading mx-[15px] md:mx-[4rem]">
                <span>Properties</span>
                <h1>Featured Lisitngs</h1>
            </div>

            <div className="card-container">
                <Swiper
                slidesPerView={4}
                spaceBetween={0}
                
                // navigation={{
                //     nextEl:".section-swiper-next-btn",
                //     prevEl:".section-swiper-prev-btn",
                //   }}
                className="section-swiper"
                // modules={[Navigation]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    991: {
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
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_01} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_02} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_03} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_01} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_02} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
                    <div className="slide-item">
                      <a href="#">
                        <img src={img_03} alt="Image" />
                      </a>
                      <div class="slide-item-info">
                        <div class="slide-item-info-breif">
                          <h6 className='mb-[10px]'>The luxury crib</h6>
                          <h1><a href="#" className='text-[20px]'>Upper East Side</a></h1>
                        </div>
                        <div class="btn-wrapper go-top">
                          <a class="" href="#">
                          Details
                          </a>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>


                </Swiper>
            </div>

            {/* <div className="buttons">
                <button className='section-swiper-prev-btn'><FaChevronLeft /></button>
                <button className='section-swiper-next-btn'><FaChevronRight /></button>
            </div> */}
        </div>
    </div>
  )
}

export default SectionFour








