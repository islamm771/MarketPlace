import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Info.css";
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import { FaFacebook, FaInstagram, FaShareAlt, FaShareSquare, FaWhatsapp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import img_01 from "../../../../assests/marketplace/member_classifieds/card/gigs-01.jpg"

const images = [
    {
      original: img_01,
      thumbnail: img_01,
    },
    {
      original: img_01,
      thumbnail: img_01,
    },
    {
      original: img_01,
      thumbnail: img_01,
    },
    {
      original: img_01,
      thumbnail: img_01,
    },
    {
      original: img_01,
      thumbnail: img_01,
    },
    {
      original: img_01,
      thumbnail: img_01,
    },
  ];


const Info = () => {
  const [isactive, setIsActive] = useState(true);
  const [isFavProduct, setisFav] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };
  return (
    <div className="classified-details-info bg-white mb-[15px]">
      <div
        className="info-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h2 className="text-[25px] capitalize mb-[15px]">
          vila in coral gables with pool, garden apartment
        </h2>
        <p class="text-capitalize flex gap-1">
          <IoLocationSharp />
          west flaminggo road, las vegas
        </p>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="classified-info-content">
          <hr />
          <div className="classified-gallery relative">
            <ImageGallery
              items={images}
              // autoPlay={true}
              showPlayButton={false}
            />

            <div className="classified-social">
              <button className="share-selection" onClick={toggleShareOptions}>
                <span href="#" className="share-icon">
                  <FaShareAlt />
                </span>
              </button>

              {showShareOptions && (
                  <div class="share-options">
                    <p class="title"> <FaShareSquare className="inline mt-[-3px]" /> share</p>
                    <div class="social-media">
                        <button class="social-media-btn"> <FaWhatsapp /> </button>
                        <button class="social-media-btn"><FaInstagram /></button>
                        <button class="social-media-btn"><FaXTwitter /></button>
                        <button class="social-media-btn"><FaFacebook /></button>
                    </div>
                  </div>
                )}

              <button className="fav-selection">
                <input
                  className="fav-checkbox"
                  type="checkbox"
                  onChange={() => {
                    setisFav(!isFavProduct);
                  }}
                  checked={isFavProduct}
                />
                <span href="#" className="fav-icon">
                  <CiHeart />
                </span>
              </button>
            </div>

            <div className="classified-badges">
              <a href="/memberclassifieds/search" className="badge badge-primary text-capitalize">Category</a>
              <a href="/memberclassifieds/search" className="badge badge-primary text-capitalize">Sub-Category</a>
              <span className="badge-status">Used</span>
              {/* <span className="badge-developer">New</span> */}
            </div>
          </div>

          <hr />
          <div className="classified-info-description">
            <h3>Description</h3>
            <p className="mb-[20px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
              harum cum eaque nisi tenetur ducimus vero perspiciatis aperiam
              quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aut, rerum! Magnam eius, quia et voluptatum at ullam porro ex
              itaque harum cum eaque nisi tenetur ducimus vero perspiciatis
              aperiam quam. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Aut, rerum! Magnam eius, quia et voluptatum at ullam porro
              ex itaque harum cum eaque nisi tenetur ducimus vero perspiciatis
              aperiam quam.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
              harum cum eaque nisi. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aut, rerum! Magnam eius, quia et voluptatum at
              ullam porro ex itaque harum cum eaque nisi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
