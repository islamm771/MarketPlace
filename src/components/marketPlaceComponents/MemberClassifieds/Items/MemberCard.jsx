import React, { useState } from "react";
import "./MemberCard.css";
import { FaStar,FaShareAlt,FaMeteor,FaRegStar  } from "react-icons/fa";
import { CiHeart  } from "react-icons/ci";
import img_01 from "../../../../assests/marketplace/member_classifieds/card/gigs-01.jpg"
import img_map from "../../../../assests/marketplace/member_classifieds/card/map-pin-check.svg"
import { Link } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import avatar_img from "../../../../assests/avatar/01.jpg"

const ClassifiedCard = (props) => {
    const {title,price,isChecked,isSold} = props

    const [isFav , setIsFav] = useState(isChecked)

    const textFormater = (text = "") =>{
        if(text.length > 35){
            return text.slice(0 , 35) + "..."
        }
        return text
    }

    const pricFormater = (number) => {
        // Convert number to string
        let numStr = number.toString();
    
        // Check if number is long enough to add commas
        if (numStr.length > 3) {
            // Add commas
            let result = '';
            for (let i = numStr.length - 1, j = 1; i >= 0; i--, j++) {
                result = numStr[i] + result;
                if (j % 3 === 0 && i !== 0) {
                    result = ',' + result;
                }
            }
            return result;
        } 
        // Number is short, no need for commas
        return numStr;
    }
  return (
    <div className='member-product-card market-card'>
        <div className="gigs-grid">
            <div className="gigs-img">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="member-card-swiper"
                >
                <SwiperSlide>
                <Link to="service-details.html">
                    <img src={img_01} className="img-fluid" alt="Gigs" />
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link to="service-details.html">
                    <img src={img_01} className="img-fluid" alt="Gigs" />
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link to="service-details.html">
                    <img src={img_01} className="img-fluid" alt="Gigs" />
                </Link>
                </SwiperSlide>
                
                </Swiper>
                <div class="card-overlay-badge">
                    {
                        isSold? <span>Sold</span> :<span><FaRegStar className="inline me-1" />featured</span>
                    }
                </div>
                <div class="fav-selection">
                    <input class="fav-checkbox" type="checkbox" checked={isFav} onChange={() => {setIsFav(!isFav)}} />
                    <a href="javascript:void(0);" class="fav-icon">
                        <CiHeart />
                    </a>
                </div>
                <div class="user-thumb">

                    <div className="profile-image bg-white rounded-[50%]">
                    <div className="profile-image-content">
                        <img className="profile-img" src="/img/avatar/01.jpg" alt="Profile" />
                        <RiVerifiedBadgeFill
                            className="nav-small-verify"
                            color={"#36e9f7"}
                            size={16}
                        />
                        <MdAdminPanelSettings
                            className="nav-small-admin"
                            color={"#d7006a"}
                            size={16}
                        />
                        <div className="badge-container-nav">
                                <img src="/img/download.png" alt="Padge" />
                                <p className="badge-number-nav">12</p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div class="gigs-content">
                <div class="gigs-info">
                    <a href="service-details.html" class="badge bg-primary-light">
                        Fashion
                    </a>
                    <span>Used</span>
                </div>
                <div class="gigs-title">
                    <h3>
                        <a href="service-details.html">
                            {title ? textFormater(title) : "Product Title"}
                        </a>
                    </h3>
                </div>
                <div className="gigs-describtion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sunt quaerat est minima, recusandae quasi, illum nulla,
                        adipisci quibusdam magnam quas assumenda? Odit ab ducimus 
                        aperiam id rem earum, laudantium voluptatum?
                    </p>
                </div>

                <div class="owner-profile-wrapper w-fit gap-3 my-[18px] hidden">
                    <div class="owner-profile-img w-[50px]">
                        <div className="relative">
                            <img className="rounded-[50%] border-[1px] border-solid border-[#fd6729] p-[1.5px]" src={avatar_img} alt="Profile" />
                            
                            <svg stroke="currentColor" 
                                fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
                                class="owner-profile-verify absolute bottom-[-6px] right-0" color="#36e9f7" height="16" width="16" 
                                xmlns="http://www.w3.org/2000/svg" style={{color:'rgb(54, 233, 247)'}}>
                                <path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 
                                    3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 
                                    5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 
                                    10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 
                                    12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 
                                    17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578
                                    18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007
                                    21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308
                                    21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 
                                    20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407
                                    17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 
                                    12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 
                                    7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942
                                    5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 
                                    2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024
                                    13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z">
                                </path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                            viewBox="0 0 24 24" color="#d7006a" 
                            height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                            class="absolute top-[-2px] right-[-2px]"
                            style={{color: "rgb(215, 0, 106)"}}>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 
                            4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 
                            2.69-6 6-6z"></path><path d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 
                            1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 
                            5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 
                            1.17-2.24 1.17z"></path>
                            </svg>
                            <div class="badge-container absolute bottom-[-6px] left-0 w-[18px] h-[18px]">
                                <div className="relative">
                                    <div className="absolute w-[18px] h-[18px]">
                                        <img className="w-[18px] h-[18px]" src="/img/download.png" alt="Padge" />
                                    </div>
                                    <p class="badge-number absolute text-white text-[12px] top-[3px] left-[3px]">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owner-details pt-[2.5px]">
                        <h6 className="owner-details-title">
                            Marina Valentine
                            {/* <MdAdminPanelSettings size={20} color={"#d7006a"} /> */}
                        </h6>

                        <p className="owner-details-text">
                            Marketing Manager
                        </p>
                        <p className="owner-details-text">Brandmarks</p>
                    </div>
                </div>

                <div class="gigs-card-footer">
                    <div class="gigs-share">
                        <a href="">
                            <FaShareAlt />
                        </a>
                    </div>
                    <div class="star-rate">
                        <span><FaStar />5.0</span>
                    </div>
                    <p><img src={img_map} alt="Icon" />Cairo</p>
                    <h5>{price ? pricFormater(price) : "7800000"} EGP</h5>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ClassifiedCard;























