import React from "react";
import "./Featured.css"
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import developer_logo from "../../../../../assests/marketplace/real_estate/card/company-img-01.png";

import commun_img_01 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-01.jpg"
import commun_img_02 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-02.jpg"
import commun_img_03 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-03.jpg"
import commun_img_04 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-04.jpg"
import commun_img_05 from "../../../../../assests/marketplace/developer/FeaturedCommunitties/img-05.jpg"
const communitities_imgs = [commun_img_01,commun_img_02,commun_img_03,commun_img_04,commun_img_05]

const FeaturedCommunitities = ({ title, subtitle }) => {

  const renderImgs = communitities_imgs.map((img,index) => (
    <SwiperSlide key={index}>
      <div className="slide-item">
        <a href="#">
          <img src={img} alt="Image" />
        </a>
        <div class="slide-item-info">
          <div className="slide-item-info-logo w-[100%] mb-[15px]">
            {" "}
            <img src={developer_logo} alt="" />{" "}
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
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="featured-communitities-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
      <div className="marketplace-container">
        <div className="FeaturedCommunitities-heading special-landing-heading">
          <span>{subtitle}</span>
          <h1>{title}</h1>
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
          className="featured-communitities-swiper"
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
          

          {renderImgs}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCommunitities;
