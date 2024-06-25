import React from "react";
import img_01 from "../../../../assests/marketplace/developer/MessageFrom/img-02.png";
import {
  FaStar,
} from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import "./Aside.css";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";

import MemberCard from "../../MemberClassifieds/Items/MemberCard";

import avatar_img from "../../../../assests/avatar/01.jpg"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";


const Aside = () => {
  return (
    <div className="classified-details-aside">

      <div className="classified-details-profile mb-[15px]">
        <div className="classified-profile-header  w-[100%] h-[80px] bg-[#fd6729]"></div>
        <div className="classified-profile-body-img">
          {/* <img src={img_01} alt="" /> */}

          <div class="owner-profile-wrapper">
            <div class="owner-profile-img">
              <div className="profile-image-content relative">
                <img
                  className="rounded-[50%] !border-[1px] !p-[5px] !border-solid !border-[#fd6729]"
                  src={avatar_img}
                  alt="Profile"
                />

                <RiVerifiedBadgeFill
                    className="nav-small-verify absolute !bottom-[0px] !right-[5px]"
                    color={"#36e9f7"}
                    size={25}
                />

                <MdAdminPanelSettings
                    className="nav-small-admin  !top-[0px] !right-[0px]"
                    color={"#d7006a"}
                    size={25}
                />

                <div class="badge-container absolute bottom-[0] left-0 w-[25px] h-[25px]">
                  <div className="relative">
                    <div className="absolute w-[25px] h-[25px]">
                      <img
                        className="w-[25px] h-[25px] !border-none"
                        src="/img/download.png"
                        alt="Padge"
                      />
                    </div>
                    <p class="badge-number absolute text-white text-[14px] top-[6px] left-[6px] font-[700]">
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>



        </div>
        <div className="classified-profile-body-info">

          <div className="owner-details pt-[1rem] text-center">
            <h6 className="owner-details-title text-[20px]">
              Marina Valentine
            </h6>

            <p className="owner-details-text">Marketing Manager</p>
            <p className="owner-details-text">Brandmarks</p>
          </div>

          <div className="py-[20px]">
            <div className="rate text-center">
              <p className="text-[20px] font-[700] mb-[5px]">4.5</p>
              <span className="flex justify-center gap-[5px] stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>

          <button class="button secondary !block !w-[80%] !mx-auto !py-[0] my-[20px]">
            <BsEnvelope className="inline me-[5px]" /> Send Message
          </button>
        </div>
      </div>

      <div className="classified-details-price mb-[15px]">
        <div>
          <h5>Price</h5>
          <p className="price !text-[25px]">7,500 EGP</p>

          {/* <p className="new-price">
            6,000
          </p> */}
        </div>
      </div>

      <div className="classified-details-similar mb-[15px]">
        <div className="similar-header">
          <h3 className="!text-[20px] capitalize">Similar Products</h3>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 7500,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          className="popular-swiper !pb-[3rem] md:!pb-[3rem]"
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
        </Swiper>
      </div>
    </div>
  );
};

export default Aside;
