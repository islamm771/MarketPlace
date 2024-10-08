import React from 'react'
import MemberCard from "../../MemberClassifieds/Items/MemberCard"
import { HiArrowLongRight } from 'react-icons/hi2'

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const MemberSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Member Classifieds</h3>
        <a className='latest-heading-link font-[500]' href="/memberclassifieds">
          View All <HiArrowLongRight className='inline text-[14px]' /> 
        </a>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
        clickable: true,
        // el:"swiper-memberSuggested-pagination",
        type:"bullets"
        }}
        navigation={{
            nextEl:".swiper-memberSuggested-next-btn",
            prevEl:".swiper-memberSuggested-prev-btn",
          }}
        className="memberSuggested-swiper !pb-[2.5rem] md:!pb-[5rem]"
        modules={[Pagination,Navigation]}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
        <SwiperSlide>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        </SwiperSlide>
        <SwiperSlide>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        </SwiperSlide>
        <SwiperSlide>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        </SwiperSlide>
        <SwiperSlide>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        </SwiperSlide>
        <SwiperSlide>
        <MemberCard title={"Ladies Gap Jeans (Bought one month ago)"} price={7500} isChecked={false} />
        </SwiperSlide>

        {/* <div className='swiper-memberSuggested-pagination'></div> */}
      </Swiper>
    </>
  )
}

export default MemberSuggested