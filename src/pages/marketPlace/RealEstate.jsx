import React, { useEffect } from "react";
import './MarketPlace.css'
import MarketPlaceNavigation from "../../components/marketPlaceComponents/MarketPlaceNavigation";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Hero from "../../components/marketPlaceComponents/LandingPage/HeroSection/Hero";
import Featured from "../../components/marketPlaceComponents/LandingPage/FeaturedSection/Featured";
import Category from "../../components/marketPlaceComponents/LandingPage/CategorySection/Category";
import SectionFour from "../../components/marketPlaceComponents/LandingPage/SectionFour/SectionFour";
import Latest from "../../components/marketPlaceComponents/LandingPage/LatestSection/Latest";
import Location from "../../components/marketPlaceComponents/LandingPage/LocationSection/Location";
import RealCard from "../../components/marketPlaceComponents/RealEstate/Items/RealCard";

const RealEstate = () => {
	return (
    <div className="real-estate-container !mt-[5rem]">
    
      {/* <div className="real-estate-swiperContainer">
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
      </div> */}

      <Hero />

      <Featured>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"owner"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
      </Featured>

      <Category />
      <SectionFour />

      <Latest>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
      </Latest>

      <Location>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
      </Location>
    </div>
  );
};

export default RealEstate;
