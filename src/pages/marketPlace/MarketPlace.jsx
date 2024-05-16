import React from "react";
import './MarketPlace.css'
import MarketPlaceNavigation from "../../components/marketPlaceComponents/MarketPlaceNavigation";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Hero from "../../components/marketPlaceComponents/LandingPage/HeroSection/Hero";
import Featured from "../../components/marketPlaceComponents/LandingPage/FeaturedSection/Featured";
import MemberSuggested from "../../components/marketPlaceComponents/MainPage/SuggestedListing/MemberSuggested";
import RealSuggested from "../../components/marketPlaceComponents/MainPage/SuggestedListing/RealSuggested";
import AutoSuggested from "../../components/marketPlaceComponents/MainPage/SuggestedListing/AutoSuggested";

const MarketPlace = () => {
	return (
    <div className="market-place-container !mt-[5rem]">
      {/* <Swiper
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
        className="mySwiper mb-[30px]"
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
      </Swiper> */}

      <Hero />
      <Featured pageTitle={"Marketplace"}
      title={"Suggested Listings"}
       subTitle={"Based on your recent search"}
       MemberCards={<MemberSuggested />} 
       RealCards={<RealSuggested />} 
       AutoCards={<AutoSuggested />} />

      <Featured pageTitle={"Marketplace"}
      title={"Recently Viewed"}
       MemberCards={<MemberSuggested />} 
       RealCards={<RealSuggested />} 
       AutoCards={<AutoSuggested />} />
    </div>
  );
};

export default MarketPlace;
