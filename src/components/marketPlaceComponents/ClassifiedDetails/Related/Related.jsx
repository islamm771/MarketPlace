import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Related.css";
import MemberCard from "../../MemberClassifieds/Items/MemberCard";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";


const Related = () => {
  const [isactive, setIsActive] = useState(true);
  return (
    <div className="classified-details-related bg-white mb-[15px]">
      <div
        className="related-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Seller Listings</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="classified-related mt-[30px]">
          <div className="">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="classified-related-swiper !pb-[3rem] md:!pb-[3rem]"
            >
              <SwiperSlide>
                <MemberCard
                  title={"Ladies Gap Jeans (Bought one month ago)"}
                  price={7500}
                  isChecked={false}
                />
              </SwiperSlide>

              <SwiperSlide>
                <MemberCard
                  title={"Ladies Gap Jeans (Bought one month ago)"}
                  price={7500}
                  isChecked={false}
                />
              </SwiperSlide>

              <SwiperSlide>
                <MemberCard
                  title={"Ladies Gap Jeans (Bought one month ago)"}
                  price={7500}
                  isChecked={false}
                />
              </SwiperSlide>

              <SwiperSlide>
                <MemberCard
                  title={"Ladies Gap Jeans (Bought one month ago)"}
                  price={7500}
                  isChecked={false}
                />
              </SwiperSlide>

              <SwiperSlide>
                <MemberCard
                  title={"Ladies Gap Jeans (Bought one month ago)"}
                  price={7500}
                  isChecked={false}
                />
              </SwiperSlide>
            </Swiper>

            <a
              className="seller-viewAll font-[500] block w-fit ms-auto me-[5px]"
              href="/marketplace/realestates/search"
            >
              View All <HiArrowLongRight className="inline text-[14px]" />{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Related;
