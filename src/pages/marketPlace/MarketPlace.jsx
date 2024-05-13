import React from "react";
import './MarketPlace.css'
import MarketPlaceNavigation from "../../components/marketPlaceComponents/MarketPlaceNavigation";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ClassifiedsProducts from "../../components/marketPlaceComponents/Products/ClassifiedProducts/Products";

const MarketPlace = () => {
	return (
    <div className="market-place-container">
		
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
      </section>
    </div>
  );
};

export default MarketPlace;
