import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath,FaBed ,FaInbox ,FaMap,FaRegStar  } from "react-icons/fa";
import { CiHeart  } from "react-icons/ci";
import "./RealCard.css"
import img_01 from "../../../../assests/marketplace/real_estate/card/img-card-01.jpg"
import company_img_01 from "../../../../assests/marketplace/real_estate/card/company-img-01.png"
import avatar_img from "../../../../assests/avatar/01.jpg"



const RealCard = (props) => {
    const {title,price,owner,downPayment} = props

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
    <div className='state-product-card'>
        <div class="card__image card__box-v1">
            <div class="card__image-header h-250">
                <div class="ribbon text-capitalize"><span><FaRegStar className="inline me-1" />featured</span></div>
                <img src={img_01} alt="" class="img-fluid w100 img-transition" />
                <div class="info"><a className="text-white font-[600]" href="#">{owner}</a></div>
                <div class="fav-selection">
                    <input class="fav-checkbox" type="checkbox" />
                    <span href="#" class="fav-icon">
                        <CiHeart />
                    </span>
                </div>
            </div>
            <div class="card__image-body">
                <span class="badge badge-primary text-capitalize mb-2">house</span>
                <h6 class="text-capitalize">
                    <a href="">{textFormater(title)}</a>
                </h6>

                <p class="text-capitalize">
                    <IoLocationSharp />
                    west flaminggo road, las vegas
                </p>
                <ul class="list-inline card__content">
                    <li class="list-inline-item">

                        <span>
                            baths <br />
                            <FaBath className="inline-block" /> 2
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span>
                            beds <br />
                            <FaBed className="inline-block" /> 3
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span>
                            rooms <br />
                            <FaInbox className="inline-block" /> 3
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span>
                            area <br />
                            <FaMap className="inline-block" /> 4300 sq ft
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
                    
                    </div>)}

                {owner.toLowerCase() != 'owner' && (  <div className="profile-wrapper flex items-center gap-[10px]"> 
                <img className="w-[50px] h-[50px] rounded-[50px]" src={company_img_01} alt="" /> {owner}
                </div> )}

                <div className="price ms-auto text-center">
                    {price && <h6 className="text-[14px]"><span>Price</span> {priceFormater(price)} EGP</h6>}
                    {downPayment && <h6 className="text-[14px]"><span>Down Payment</span> {priceFormater(downPayment)} EGP</h6>}
                </div>
            </div>
        </div>
    </div>
  );
};

export default RealCard;
