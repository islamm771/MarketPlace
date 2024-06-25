import React from 'react'

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Detail from '../../components/marketPlaceComponents/PropertyDetails/Detail/Detail'
import FromGallery from '../../components/marketPlaceComponents/PropertyDetails/FromGallery/FromGallery'
import Info from '../../components/marketPlaceComponents/ClassifiedDetails/Info/Info';
import Aside from '../../components/marketPlaceComponents/ClassifiedDetails/Aside/Aside';
import Related from '../../components/marketPlaceComponents/ClassifiedDetails/Related/Related';



const ClassifiedDetails = () => {
  return (
    <div className="mt-[3rem] md:!mt-[6rem]">
      <div className="marketplace-container">
        <div className="adSwiper-banner">
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
          </Swiper>
        </div>

        <div className="grid xl:!grid-cols-12 !gap-[30px]">
          <div className="xl:col-span-9">
            <Info />
            <Related />
          </div>
          <div className="xl:col-span-3">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassifiedDetails