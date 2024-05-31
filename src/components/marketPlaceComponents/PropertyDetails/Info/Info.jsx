import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import "./Info.css";
const Info = () => {
  const [isactive, setIsActive] = useState(false);
  return (
    <div className="property-details-info bg-white mb-[25px]">
        <div
          className="info-header relative"
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
          <div className="property-info-content">
            <hr />
            <div className="property-info-categories grid !grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4">
              <div className="provider flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Provider:</h5>
                  <p>Emmar Egypt</p>
                </div>
              </div>
              <div className="community flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Community:</h5>
                  <p>Soul</p>
                </div>
              </div>
              <div className="compound flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Compound</h5>
                  <p>Locanda</p>
                </div>
              </div>
              <div className="type flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Type:</h5>
                  <p>Townhouse</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="property-info-describtion">
              <h3>Describtion</h3>
              <p className="mb-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
                harum cum eaque nisi tenetur ducimus vero perspiciatis aperiam
                quam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
                harum cum eaque nisi tenetur ducimus vero perspiciatis aperiam
                quam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
                harum cum eaque nisi tenetur ducimus vero perspiciatis aperiam
                quam.
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
                harum cum eaque nisi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                rerum! Magnam eius, quia et voluptatum at ullam porro ex itaque
                harum cum eaque nisi.
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Info;
