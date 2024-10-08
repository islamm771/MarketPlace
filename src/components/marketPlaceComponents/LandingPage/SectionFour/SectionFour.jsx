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

import developer_logo from "../../../../assests/marketplace/real_estate/card/company-img-01.png"

const SectionFour = ({pageTitle,title}) => {
  return (
    <div className="landing-Secondfeatured bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
      <div className="landing-Secondfeatured-container">
        <div className="Secondfeatured-heading special-landing-heading">
          <span>{pageTitle}</span>
          <h1>{title ? title : "Featured Developers"}</h1>
        </div>
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
            540: {
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
              <a href="/developer">
                <img src={img_01} alt="Image" />
                <div class="slide-item-info">
                  <div className='slide-item-info-logo w-[100%] mb-[15px]'>
                      <img src={developer_logo} alt="" /> 
                    </div>
                  <div class="slide-item-info-breif">
                    <h6 className="mb-[10px]">The luxury crib</h6>
                    <h1>
                      <a href="#" className="text-[20px]">
                        Upper East Side
                      </a>
                    </h1>
                  </div>
                  <div class="btn-wrapper go-top">
                    <a class="" href="#">
                      Details
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
            <div className="slide-item">
              <a href="/developer">
                <img src={img_02} alt="Image" />
              <div class="slide-item-info">
                <div className='slide-item-info-logo w-[100%] mb-[15px]'> <img src={developer_logo} alt="" /> </div>
                <div class="slide-item-info-breif">
                  <h6 className="mb-[10px]">The luxury crib</h6>
                  <h1>
                    <a href="#" className="text-[20px]">
                      Upper East Side
                    </a>
                  </h1>
                </div>
                <div class="btn-wrapper go-top">
                  <a class="" href="#">
                    Details
                  </a>
                </div>
              </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
            <div className="slide-item">
              <a href="/developer">
                <img src={img_03} alt="Image" />
              <div class="slide-item-info">
                <div className='slide-item-info-logo w-[100%] mb-[15px]'> <img src={developer_logo} alt="" /> </div>
                <div class="slide-item-info-breif">
                  <h6 className="mb-[10px]">The luxury crib</h6>
                  <h1>
                    <a href="#" className="text-[20px]">
                      Upper East Side
                    </a>
                  </h1>
                </div>
                <div class="btn-wrapper go-top">
                  <a class="" href="#">
                    Details
                  </a>
                </div>
              </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
            <div className="slide-item">
              <a href="/developer">
                <img src={img_01} alt="Image" />
              <div class="slide-item-info">
                <div className='slide-item-info-logo w-[100%] mb-[15px]'> <img src={developer_logo} alt="" /> </div>
                <div class="slide-item-info-breif">
                  <h6 className="mb-[10px]">The luxury crib</h6>
                  <h1>
                    <a href="#" className="text-[20px]">
                      Upper East Side
                    </a>
                  </h1>
                </div>
                <div class="btn-wrapper go-top">
                  <a class="" href="#">
                    Details
                  </a>
                </div>
              </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
            <div className="slide-item">
              <a href="/developer">
                <img src={img_02} alt="Image" />
              <div class="slide-item-info">
                <div className='slide-item-info-logo w-[100%] mb-[15px]'> <img src={developer_logo} alt="" /> </div>
                <div class="slide-item-info-breif">
                  <h6 className="mb-[10px]">The luxury crib</h6>
                  <h1>
                    <a href="#" className="text-[20px]">
                      Upper East Side
                    </a>
                  </h1>
                </div>
                <div class="btn-wrapper go-top">
                  <a class="" href="#">
                    Details
                  </a>
                </div>
              </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /> */}
            <div className="slide-item">
              <a href="/developer">
                <img src={img_03} alt="Image" />
              <div class="slide-item-info">
                <div className='slide-item-info-logo w-[100%] mb-[15px]'> <img src={developer_logo} alt="" /> </div>
                <div class="slide-item-info-breif">
                  <h6 className="mb-[10px]">The luxury crib</h6>
                  <h1>
                    <a href="#" className="text-[20px]">
                      Upper East Side
                    </a>
                  </h1>
                </div>
                <div class="btn-wrapper go-top">
                  <a class="" href="#">
                    Details
                  </a>
                </div>
              </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SectionFour








