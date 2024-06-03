import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Energy.css";

const Energy = () => {
  const [isactive, setIsActive] = useState(false);
  return (
    <div className="property-details-energy bg-white mb-[15px]">
      <div
        className="energy-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Energy Performance</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="property-energy mt-[30px]">
            <ul>
                <li>
                    ENERGY CLASS:
                    <span>B</span>
                </li>
                <li>
                    ENERGY PERFORMANCE:
                    <span>78 kWh/m²a</span>
                </li>
                <li>
                    EPC CURRENT RATING:
                    <span>75</span>
                </li>
                <li>
                    EPC POTENTIAL RATING:
                    <span>84</span>
                </li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default Energy;
