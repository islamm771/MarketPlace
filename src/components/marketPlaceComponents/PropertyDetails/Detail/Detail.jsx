import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import "./Detail.css"
const Detail = () => {
    const [isactive, setIsActive] = useState(false);
    return (
        <div className='property-details-detail bg-white mb-[15px]'>
            <div
                className="detail-header relative cursor-pointer"
                onClick={() => setIsActive(!isactive)}
            >
                <h3 className="text-[25px] capitalize">
                Detail
                </h3>
                <span className="absolute top-[7px] right-0 text-[#fd6729]">
                {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
                </span>
            </div>

            {isactive && <div className="property-detail grid !grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 mt-[30px]">
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
                  <h5>Compound:</h5>
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
                  <h5>Compound:</h5>
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
                  <h5>Compound:</h5>
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
            </div>}
        </div>
    )
}

export default Detail