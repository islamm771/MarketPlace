import React from 'react'
import { FaStar,FaShareAlt,FaMeteor,FaRegStar  } from "react-icons/fa";
import { CiHeart,CiStar  } from "react-icons/ci";
import img_01 from "../assets/img/member_classifieds/card/gigs-01.jpg"
import imgUser_01 from "../assets/img/member_classifieds/card/user-01.jpg"
import img_map from "../assets/img/member_classifieds/card/map-pin-check.svg"
import "./Card.css"



const Card = () => {
  return (
    <div className='card'>
        <div className="gigs-grid">
            <div className="gigs-img">
                <div className="img-slider owl-carousel">
                    <div className="slide-images">
                        <a href="service-details.html">
                            <img src={img_01} className="img-fluid" alt="Gigs" />
                        </a>
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
                    <a href="service.html"><span class="badge bg-warning"><FaRegStar />Featured</span></a>
                    <a href="service.html"><span class="badge bg-danger"><FaMeteor />Hot</span></a>
                </div>
                <div class="fav-selection">
                    <a href="javascript:void(0);" class="fav-icon">
                        <CiHeart />
                    </a>
                </div>
                <div class="user-thumb">
                    <a href="user-profile.html">
                        <img src={imgUser_01} alt="User" />
                    </a>
                </div>
            </div>
            <div class="gigs-content">
                <div class="gigs-info">
                    <a href="service-details.html" class="badge bg-primary-light">
                        Fashion
                    </a>
                </div>
                <div class="gigs-title">
                    <h3>
                        <a href="service-details.html">
                            Ladies Gap Jeans
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
                    <h5>$780</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card