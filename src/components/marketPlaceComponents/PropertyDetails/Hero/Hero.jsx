import React, { useState } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import img_01 from "../../../../assests/marketplace/developer/Awards/img-01.jpg";
import img_02 from "../../../../assests/marketplace/developer/Awards/img-02.jpg";
import img_03 from "../../../../assests/marketplace/developer/Awards/img-03.jpg";
import { CiHeart } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

const Hero = () => {
  const [isFavProduct, setisFav] = useState(false)
  return (
    <div className="property-details-hero mb-[15px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        className="property-hero-swiper h-[100%]"
      >
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_01} alt="ads banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_02} alt="ads banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_03} alt="ads banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_01} alt="ads banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_02} alt="ads banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%] h-[100%] object-cover" src={img_03} alt="ads banner" />
        </SwiperSlide>
      </Swiper>

      <div className="marketplace-container">
        <div className="flex flex-wrap gap-[10px] items-center">
          <a href="/marketplace/search" class="badge badge-primary text-capitalize">house</a>
          <a href="/marketplace/search" class="badge badge-primary text-capitalize">Soul</a>
          <span className="badge-status">Resale</span>
          <span className="badge-developer">developer</span>

          <div class="share-selection ms-auto me-2">
            {/* <input class="fav-checkbox" type="checkbox" onChange={() => {setisFav(!isFavProduct)}} checked={isFavProduct} /> */}
            <span href="#" class="share-icon">
              <FaShareAlt />
            </span>
          </div>
          <div class="fav-selection">
            <input class="fav-checkbox" type="checkbox" onChange={() => {setisFav(!isFavProduct)}} checked={isFavProduct} />
            <span href="#" class="fav-icon">
                <CiHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
