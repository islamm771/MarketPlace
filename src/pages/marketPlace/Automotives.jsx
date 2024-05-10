import React from "react";
import './MarketPlace.css'
import MarketPlaceNavigation from "../../components/marketPlaceComponents/MarketPlaceNavigation";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AutomotiveProducts from "../../components/marketPlaceComponents/Products/AutomotiveProducts/Products";

const Automotives = () => {
	return (
    <div className="real-estate-container">
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-container">
            <img src="/img/ads/ads.jpeg" alt="ads banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-container">
            <img src="/img/ads/ads.jpeg" alt="ads banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-container">
            <img src="/img/ads/ads.jpeg" alt="ads banner" />
          </div>
        </SwiperSlide>
      </Swiper>

      <section>
        <AutomotiveProducts />
      </section>
    </div>
  );
};

export default Automotives;
