import React, { useEffect, useRef, useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./FromGallery.css";

import img_01 from "../../../../assests/marketplace/Properties/Gallery/1.jpg";
import img_02 from "../../../../assests/marketplace/Properties/Gallery/2.jpg";
import img_03 from "../../../../assests/marketplace/Properties/Gallery/3.jpg";
import Popup from "../../../ui/Popup/Popup";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const images = [
  img_01,
  img_02,
  img_01,
  img_02,
  img_01,
  img_02,
  img_01,
  img_02,
  img_03,
];

const FromGallery = () => {
  const [isactive, setIsActive] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  

  const openGallery = () => {
    setIsOpen(true);
  };
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };


  return (
    <div className="property-details-gallery bg-white mb-[15px]">
      <div
        className="gallery-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">From Our Gallery</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="prop-gallery-imgs grid md:!grid-cols-12 !gap-[30px] mt-[30px]">
          <div className="md:col-span-6">
            <img
              className="w-[100%] h-[200px] object-cover rounded-[5px]"
              src={img_01}
              alt=""
            />
          </div>
          <div className="md:col-span-6">
            <img
              className="w-[100%] h-[200px] object-cover rounded-[5px]"
              src={img_02}
              alt=""
            />
          </div>
          <div className="md:col-span-6 lg:col-span-4">
            <img
              className="w-[100%] h-[200px] object-cover rounded-[5px]"
              src={img_01}
              alt=""
            />
          </div>
          <div className="md:col-span-6 lg:col-span-4">
            <img
              className="w-[100%] h-[200px] object-cover rounded-[5px]"
              src={img_02}
              alt=""
            />
          </div>
          <div
            className="cursor-pointer md:col-span-6 lg:col-span-4 additional-imgs relative"
            onClick={() => openGallery()}
          >
            <img
              className="w-[100%] h-[200px] object-cover rounded-[5px]"
              src={img_01}
              alt=""
            />
          </div>
        </div>
      )}


      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <img
          src={images[currentImageIndex]}
          alt={`Popup ${currentImageIndex}`}
          className="popup-image"
        />
        <div className="pop-navigation">
          <button onClick={prevImage} className="prev">
              <IoChevronBackSharp />

          </button>
          <button onClick={nextImage} className="next">
              <IoChevronForwardSharp />

          </button>
        </div>
      </Popup>

      
    </div>
  );
};

export default FromGallery;
