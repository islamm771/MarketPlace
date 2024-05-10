import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath,FaBed ,FaInbox ,FaMap,FaRegStar  } from "react-icons/fa";
import { CiHeart  } from "react-icons/ci";
import "./AutoCard.css"
import img_01 from "../../../../assests/marketplace/automotives/card/car-01.jpg"
import company_img_01 from "../../../../assests/marketplace/real_estate/card/company-img-01.png"
import avatar_img from "../../../../assests/avatar/01.jpg"
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


const AutoCar = (props) => {
    const {title,price,location,owner,downPayment,isFav,isSold,carBrand,carModel,carYear} = props

    const [isFavProduct, setisFav] = useState(isFav)

    const textFormater = (text = "") =>{
        if(text.length > 35){
            return text.slice(0 , 35) + "..."
        }
        return text
    }

    const priceFormater = (number) => {
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
    <div className='state-product-card market-card grid-rows-12'>
            <div class="card__image-header">
                <div class="ribbon text-capitalize">
                    {
                        isSold? <span>Sold</span> :<span><FaRegStar className="inline me-1" />featured</span>
                    }
                </div>
                
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="real-card-swiper h-[100%]"
                >
                <SwiperSlide className="relative">
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

                <div class="info"><a className="text-white font-[600]" href="#">{owner}</a></div>
                <div class="fav-selection">
                    <input class="fav-checkbox" type="checkbox" onChange={() => {setisFav(!isFavProduct)}} checked={isFavProduct} />
                    <span href="#" class="fav-icon">
                        <CiHeart />
                    </span>
                </div>
            </div>
            <div class="card__image-body">
                <span class="badge badge-primary text-capitalize mb-2">{carBrand}</span>
                <span class="badge badge-primary text-capitalize mb-2 ms-2">{carModel}</span>
                <span class="badge badge-primary text-capitalize mb-2 ms-2">{carYear}</span>
                <h6 class="text-capitalize">
                    <a href="">{textFormater(title)}</a>
                </h6>

                <p class="text-capitalize">
                    <IoLocationSharp />
                    {location}
                </p>
                <ul class="list-inline card__content">
                    <li class="list-inline-item">

                        <span>
                            Passengers <br />
                            <svg className="inline-block" width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                    <g id="01_Home" transform="translate(-155.000000, -2016.000000)" stroke="#1A2B50" stroke-width="0.5">
                                        <g id="trending-car" transform="translate(135.000000, 1603.000000)">
                                            <g id="one_tour" transform="translate(0.000000, 86.000000)">
                                                <g id="tour">
                                                    <g id="Group-4" transform="translate(20.000000, 327.000000)">
                                                        <g id="Regular">
                                                            <circle id="Oval" cx="10" cy="3.125" r="2.5"></circle>
                                                            <path d="M13.125,11.875 L13.125,10 C13.125,8.27411016 11.7258898,6.875 10,6.875 C8.27411016,6.875 6.875,8.27411016 6.875,10 L6.875,11.875 L8.125,11.875 L8.75,16.875 L11.25,16.875 L11.875,11.875 L13.125,11.875 Z" id="Shape"></path>
                                                            <circle id="Oval" cx="3.75" cy="5" r="1.875"></circle>
                                                            <path d="M4.75,8.28916667 C3.79624791,7.9682092 2.74632008,8.12578507 1.92880562,8.71257878 C1.11129116,9.29937249 0.626070499,10.2436921 0.625,11.25 L0.625,11.875 L1.875,11.875 L2.5,15.625 L5,15.625 L5.31333333,13.745" id="Shape"></path>
                                                            <circle id="Oval" cx="16.25" cy="5" r="1.875"></circle>
                                                            <path d="M15.25,8.28916667 C16.2037521,7.9682092 17.2536799,8.12578507 18.0711944,8.71257878 C18.8887088,9.29937249 19.3739295,10.2436921 19.375,11.25 L19.375,11.875 L18.125,11.875 L17.5,15.625 L15,15.625 L14.6866667,13.745" id="Shape"></path>
                                                            <path d="M19.375,17.5 C19.375,18.5358333 15.1775,19.375 10,19.375 C4.8225,19.375 0.625,18.5358333 0.625,17.5" id="Shape"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> 10
                            {/* <FaBath className="inline-block" /> 2 */}
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span>
                            Gear Shift <br />
                            <svg className="inline-block" width="22px" height="22px" viewBox="0 0 23 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="01_Home" transform="translate(-206.000000, -2016.000000)" fill="#1A2B50" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="0.1">
                                        <g id="trending-car" transform="translate(135.000000, 1603.000000)">
                                            <g id="one_tour" transform="translate(0.000000, 86.000000)">
                                                <g id="tour">
                                                    <g id="Group-3" transform="translate(70.000000, 327.000000)">
                                                        <g id="gear-shift" transform="translate(1.000000, 0.000000)">
                                                            <path d="M19.7745569,0.0513671801 L19.7745392,0.0514139099 C18.3074667,0.0512294327 17.0910913,1.18771017 16.9917569,2.65141594 C16.8924225,4.11512172 17.9440975,5.40552369 19.4409941,5.65309615 L19.3909941,9.66473167 L11.6307137,9.61473167 L11.6741302,5.60479315 C13.1303141,5.41137358 14.1868843,4.12166512 14.0899634,2.65589263 C13.9930424,1.19012015 12.7758553,0.0507588812 11.306882,0.0507588812 C9.83790863,0.0507588812 8.62072156,1.19012015 8.52380058,2.65589263 C8.4268796,4.12166512 9.4834498,5.41137358 10.9830502,5.65435784 L10.9330502,9.66473167 L3.17276982,9.61473167 L3.216023,5.60355344 C4.67176554,5.40530795 5.72422287,4.11193704 5.6224451,2.64628739 C5.52066733,1.18063775 4.2995449,0.0451489602 2.83037373,0.0500155897 C1.36120257,0.0548822192 0.147629469,1.19843593 0.055563751,2.66472769 C-0.0365019666,4.13101944 1.02450076,5.41738951 2.52510626,5.65557279 L2.48152666,14.3711402 C1.02497044,14.5597349 -0.0356560051,15.845726 0.056409469,17.3115528 C0.148474943,18.7773795 1.3616723,19.9205566 2.83037933,19.9254217 C4.29908636,19.9302868 5.51983056,18.7951721 5.62160501,17.3299875 C5.72337946,15.8648028 4.67129589,14.5718133 3.17276982,14.3240307 L3.22276982,10.3123952 L10.9830502,10.3623952 L10.9396337,14.3723337 C9.4834498,14.5657533 8.4268796,15.8554618 8.52380058,17.3212343 C8.62072156,18.7870067 9.83790863,19.926368 11.306882,19.926368 C12.7758553,19.926368 13.9930424,18.7870067 14.0899634,17.3212343 C14.1868843,15.8554618 13.1303141,14.5657533 11.6307137,14.3227691 L11.6807137,10.3123952 L19.7648259,10.3123952 C19.9436732,10.3123952 20.0886577,10.1674108 20.0886577,9.98856344 L20.1322559,5.60598431 C21.5910187,5.41766076 22.6527359,4.12876319 22.5582126,2.66093483 C22.4636894,1.19310648 21.2454256,0.0510321461 19.7745569,0.0513671801 Z M9.16538667,2.84062966 L9.16538664,2.84057279 C9.16538664,1.65785758 10.1241668,0.699077462 11.306882,0.699077462 C12.4895972,0.699077462 13.4483773,1.65785758 13.4483773,2.84057279 C13.4483773,4.023288 12.4895972,4.98206812 11.3068251,4.98206808 C10.1246987,4.98072339 9.16673136,4.02275601 9.16538667,2.84062966 Z M0.697723119,2.84062966 L0.697723087,2.84057279 C0.697723087,1.65785758 1.6565032,0.699077462 2.83921841,0.699077462 C4.02193362,0.699077462 4.98071374,1.65785758 4.98071374,2.84057279 C4.98071374,4.023288 4.02193362,4.98206812 2.83916154,4.98206808 C1.65703519,4.98072339 0.699067809,4.02275601 0.697723119,2.84062966 Z M4.98066698,17.1364972 L4.98066701,17.1365541 C4.98066701,18.0027125 4.45890325,18.7835824 3.65867542,19.1150424 C2.85844758,19.4465024 1.93734851,19.2632763 1.3248889,18.650803 C0.712429292,18.0383298 0.529223852,17.1172266 0.860701716,16.3170062 C1.19217958,15.5167857 1.97306117,14.9950394 2.83927641,14.9950588 C4.02138407,14.9964299 4.97932234,15.9543895 4.98066698,17.1364972 Z M13.4483773,17.1364972 L13.4483773,17.1365541 C13.4483773,18.3192693 12.4895972,19.2780494 11.306882,19.2780494 C10.1241668,19.2780494 9.16538664,18.3192693 9.16538664,17.1365541 C9.16538664,15.9538389 10.1241668,14.9950588 11.3069388,14.9950588 C12.4890652,14.9964035 13.4470326,15.9543709 13.4483773,17.1364972 Z M19.7746002,4.98206809 L19.7745444,4.98206812 C18.5918354,4.98204169 17.6330793,4.02324987 17.6330969,2.84054089 C17.6331145,1.65783191 18.5918992,0.699068654 19.7746082,0.699077462 C20.9573172,0.69908627 21.9160876,1.65786381 21.9160875,2.84062855 C21.9147691,4.02278508 20.9567567,4.98077607 19.7746002,4.98206809 Z" id="Shape"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> 3
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span>
                            Door <br />
                            <svg className="inline-block" width="22px" height="22px" viewBox="0 0 20 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="01_Home" transform="translate(-309.000000, -2015.000000)" fill="#1A2B50" fill-rule="nonzero" stroke="#FFFFFF">
                                        <g id="trending-car" transform="translate(135.000000, 1603.000000)">
                                            <g id="one_tour" transform="translate(0.000000, 86.000000)">
                                                <g id="tour">
                                                    <g id="suitcase" transform="translate(125.000000, 326.000000)">
                                                        <g id="Group-2" transform="translate(6.000000, 0.042132)">
                                                            <g id="Group">
                                                                <g id="doors" transform="translate(44.000000, 0.957868)">
                                                                    <path d="M14.4049515,11.1208738 L14.4049515,8.15165049 L17.2397087,10.9865049 C17.3819417,11.1287379 17.5682524,11.1998058 17.7546602,11.1998058 C17.9409709,11.1998058 18.1273786,11.1287379 18.2696117,10.9865049 C18.5539806,10.7021359 18.5539806,10.241068 18.2696117,9.95679612 L14.4049515,6.09203883 L14.4049515,5.65330097 L14.4049515,2.16990291 C14.4049515,0.973398058 13.3596117,0 12.0748544,0 L6.49135922,0 C5.20660194,0 4.16126214,0.973398058 4.16126214,2.16990291 L4.16126214,5.65330097 L4.16126214,6.09203883 L0.296601942,9.95679612 C0.0122330097,10.241165 0.0122330097,10.702233 0.296601942,10.9865049 C0.438834951,11.1286408 0.625242718,11.1998058 0.811553398,11.1998058 C0.997864078,11.1998058 1.18427184,11.1287379 1.32650485,10.9865049 L4.16126214,8.15165049 L4.16126214,11.1209709 L0.296601942,14.9858252 C0.0122330097,15.2701942 0.0122330097,15.7312621 0.296699029,16.0156311 C0.438834951,16.1578641 0.625242718,16.228932 0.811553398,16.228932 C0.997864078,16.228932 1.18427184,16.1578641 1.32650485,16.0156311 L4.16126214,13.1806796 L4.16126214,15.6059223 L4.16126214,17.7557282 C4.16126214,18.952233 5.20660194,19.9256311 6.49135922,19.9256311 L12.0748544,19.9256311 C13.3596117,19.9256311 14.4049515,18.952233 14.4049515,17.7557282 L14.4049515,15.6058252 L14.4049515,13.1805825 L17.2397087,16.015534 C17.3819417,16.157767 17.5682524,16.228835 17.7546602,16.228835 C17.9409709,16.228835 18.1273786,16.157767 18.2695146,16.015534 C18.5539806,15.731165 18.5539806,15.2701942 18.2696117,14.9857282 L14.4049515,11.1208738 Z M12.9486408,11.4228155 L12.9486408,14.8776699 L5.61757282,14.8776699 L5.61757282,11.4228155 C5.61757282,11.4226214 5.61757282,11.4225243 5.61757282,11.4223301 L5.61757282,6.39417476 C5.61757282,6.3938835 5.61757282,6.39349515 5.61757282,6.39320388 L5.61757282,6.38145631 L12.9486408,6.38145631 L12.9486408,6.39320388 C12.9486408,6.39349515 12.9486408,6.3938835 12.9486408,6.39417476 L12.9486408,11.4223301 C12.9486408,11.4224272 12.9486408,11.4226214 12.9486408,11.4228155 Z M6.49135922,1.45631068 L12.0748544,1.45631068 C12.5485437,1.45631068 12.9486408,1.7831068 12.9486408,2.16990291 L12.9486408,4.92514563 L5.61757282,4.92514563 L5.61757282,2.16990291 C5.61757282,1.7831068 6.0176699,1.45631068 6.49135922,1.45631068 Z M12.0748544,18.4691262 L6.49135922,18.4691262 C6.0176699,18.4691262 5.61757282,18.1423301 5.61757282,17.755534 L5.61757282,16.3339806 L12.9486408,16.3339806 L12.9486408,17.7556311 C12.9486408,18.1424272 12.5485437,18.4691262 12.0748544,18.4691262 Z" id="Shape"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> 4
                        </span>
                    </li>
                </ul>
            </div>
            <div class="card__image-footer">

                {owner.toLowerCase() == 'owner' && (<div class="owner-profile-wrapper flex w-fit gap-3">
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
                    
                    </div>)}

                {owner.toLowerCase() != 'owner' && (<div className="profile-wrapper flex items-center gap-[10px]"> 
                <img className="w-[50px] h-[50px] rounded-[50px]" src={company_img_01} alt="" /> 
                <h6 className="">
                    {owner}
                </h6>
                </div> )}

                <div className="price ms-auto">
                    {price && <h6 className="text-[14px]"><span>Price</span> {priceFormater(price)} EGP</h6>}
                    {downPayment && <h6 className="text-[14px]"><span>Down Payment</span> {priceFormater(downPayment)} EGP</h6>}
                </div>
            </div>
    </div>
  );
};

export default AutoCar;
