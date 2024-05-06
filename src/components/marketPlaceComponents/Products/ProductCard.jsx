import React from "react";
import "./ProductCard.css";
import { FaStar,FaShareAlt,FaMeteor,FaRegStar  } from "react-icons/fa";
import { CiHeart  } from "react-icons/ci";
import img_01 from "../../../assests/marketplace/member_classifieds/card/gigs-01.jpg"
import imgUser_01 from "../../../assests/marketplace/member_classifieds/card/user-01.jpg"
import img_map from "../../../assests/marketplace/member_classifieds/card/map-pin-check.svg"
import { Link } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";


const ProductCard = (props) => {
    const {title,price} = props

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
    <div className='market-product-card'>
        <div className="gigs-grid">
            <div className="gigs-img">
                <div className="img-slider owl-carousel">
                    <div className="slide-images">
                        <Link to="service-details.html">
                            <img src={img_01} className="img-fluid" alt="Gigs" />
                        </Link>
                    </div>
                    {/* <div class="slide-images">
                        <a href="service-details.html">
                            <img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="Gigs">
                        </a>
                    </div>
                    <div class="slide-images">
                        <a href="service-details.html">
                            <img src="assets/img/gigs/gigs-07.jpg" class="img-fluid" alt="Gigs">
                        </a>
                    </div> */}
                </div>
                <div class="card-overlay-badge">
                    <a href="#"><span class="badge bg-warning"><FaRegStar />Featured</span></a>
                    {/* <a href="service.html"><span class="badge bg-danger"><FaMeteor />Hot</span></a> */}
                </div>
                <div class="fav-selection">
                    <input class="fav-checkbox" type="checkbox" />
                    <a href="javascript:void(0);" class="fav-icon">
                        <CiHeart />
                    </a>
                </div>
                <div class="user-thumb">

                    <div className="profile-image">
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
                <div class="gigs-card-footer">
                    <div class="gigs-share">
                        <a href="javascript:void(0);">
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

export default ProductCard;
