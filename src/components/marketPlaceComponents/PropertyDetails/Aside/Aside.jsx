import React from "react";
import img_01 from "../../../../assests/marketplace/developer/MessageFrom/img-02.png";
import agent_img from "../../../../assests/marketplace/developer/DirectorBoard/4.jpg";
import {
  FaFacebookF,
  FaLinkedin,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import "./Aside.css";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import RealCard from "../../RealEstate/Items/RealCard";
import Calculator from "../Calculator/Calculator";

const Aside = () => {
  return (
    <div className="property-details-aside">
      <div className="property-details-profile mb-[15px]">
        <div className="property-profile-header w-[100%] h-[80px] bg-[#fd6729]"></div>
        <div className="property-profile-body-img">
          <img src={img_01} alt="" />
        </div>
        <div className="property-profile-body-info">
          <h3>Emmar Misr</h3>
          <div className="flex items-center justify-center gap-[20px] py-[20px]">
            <div className="rate text-center">
              <p className="text-[20px] font-[700] mb-[5px]">4.5</p>
              <span className="flex gap-[5px] stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <div className="social-links">
              <ul className="flex gap-[15px]">
                <li>
                  <a href="#">
                    {" "}
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="property-details-price mb-[15px]">
        <div>
          <h5>Price</h5>
          <p>3,500,000 EGP</p>
        </div>
        <hr />
        <div>
          <h5>Downpayment</h5>
          <p>3,500,000 EGP</p>
        </div>
        <hr />
        <div>
          <h5>
            <span>X72</span> - Monthly
          </h5>
          <p>3,500,000 EGP</p>
        </div>
      </div>

      <div className="property-details-agent mb-[15px]">
        <div className="propert-agent-img">
          <img src={agent_img} alt="" />
        </div>
        <h3>Agent Mohamed Fahim</h3>
        <button>
          {" "}
          <BsEnvelope className="inline me-[5px]" /> Send Message
        </button>
      </div>

      <div className="property-details-popular mb-[15px]">
        <div className="popular-header">
            <h3 className="!text-[20px] capitalize">Popular Properties</h3>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="popular-swiper !pb-[3rem] md:!pb-[3rem]"
        >
          <SwiperSlide>
            <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"developer"} isFav={false}/>
          </SwiperSlide>
          <SwiperSlide>
            <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"developer"} isFav={false}/>
          </SwiperSlide>
          <SwiperSlide>
            <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"developer"} isFav={false}/>
          </SwiperSlide>
        </Swiper>
      </div>

      <Calculator />
    </div>
  );
};

export default Aside;
