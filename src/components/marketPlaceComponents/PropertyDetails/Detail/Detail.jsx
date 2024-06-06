import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import "./Detail.css"
const Detail = () => {
    const [isactive, setIsActive] = useState(true);
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
              <div className="year-built flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Year Built:</h5>
                  <p>1997</p>
                </div>
              </div>
              <div className="delivery-type flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Delivery Type:</h5>
                  <p>Ready</p>
                </div>
              </div>
              <div className="available flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Available:</h5>
                  <p>Dec, 5 2027</p>
                </div>
              </div>
              <div className="category flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Category:</h5>
                  <p>Residential</p>
                </div>
              </div>
              <div className="total-year flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Total Area:</h5>
                  <p>Furnished</p>
                </div>
              </div>
              <div className="unit-area flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>BUA:</h5>
                  <p>Residential</p>
                </div>
              </div>
              <div className="garden-area flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Garden Area:</h5>
                  <p>700m<sup>2</sup></p>
                </div>
              </div>
              <div className="unit-code flex gap-[20px] mb-[30px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Unit Code:</h5>
                  <p>EMS21</p>
                </div>
              </div>
              <div className="bedrooms flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Bedooms:</h5>
                  <p>6</p>
                </div>
              </div>
              <div className="bathrooms flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Bathrooms:</h5>
                  <p>3</p>
                </div>
              </div>
              <div className="floors flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>Floors:</h5>
                  <p>1</p>
                </div>
              </div>
              <div className="garages flex gap-[20px]">
                <FaUmbrellaBeach />
                <div>
                  <h5>garages:</h5>
                  <p>1</p>
                </div>
              </div>
            </div>}
        </div>
    )
}

export default Detail