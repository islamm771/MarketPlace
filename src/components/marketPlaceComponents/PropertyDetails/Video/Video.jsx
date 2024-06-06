import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import "./Video.css";
import img from "../../../../assests/marketplace/Properties/Video/1.jpg";
const Video = () => {
  const [isactive, setIsActive] = useState(true);
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
            <a
            class="property-video-icon"
            href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&amp;showinfo=0"
            data-rel="lightcase:myCollection"
            >
            <FaPlay />
            </a>
        </div>
      )}
    </div>
  );
};

export default Video;
