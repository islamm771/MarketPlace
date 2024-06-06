import React, { useEffect, useRef, useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import "./Video.css";
import img from "../../../../assests/marketplace/Properties/Video/1.jpg";
import Popup from "../../../ui/Popup/Popup";
const Video = () => {
  const [isactive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef(null);

  const openGallery = () => {
    setIsOpen(true);
  };
  return (
    <div className="property-details-video bg-white mb-[15px]">
      <div
        className="video-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Property Video</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="property-video h-[360px] mt-[30px]">
          <img className="property-video-img" src={img} alt="" />
          <button
            class="property-video-icon"
            onClick={()=> openGallery()}
          >
            <FaPlay />
          </button>
        </div>
      )}

      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <iframe
          ref={iframeRef}
          width="1100"
          height="600"
          src="https://www.youtube.com/embed/eWUxqVFBq74?si=Te004ZteBaveJzWI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Popup>

      
    </div>
  );
};

export default Video;
