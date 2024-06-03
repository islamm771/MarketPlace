import React, { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Related.css";
import RealCard from "../../RealEstate/Items/RealCard";
const Related = () => {
  const [isactive, setIsActive] = useState(false);
  return (
    <div className="property-details-related bg-white mb-[15px]">
      <div
        className="related-header relative cursor-pointer"
        onClick={() => setIsActive(!isactive)}
      >
        <h3 className="text-[25px] capitalize">Related Properties</h3>
        <span className="absolute top-[7px] right-0 text-[#fd6729]">
          {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
        </span>
      </div>

      {isactive && (
        <div className="property-related mt-[30px]">
          <div className="grid !grid-cols-2">
            <RealCard
              title={"vila in coral gables with pool, garden"}
              price={3500000}
              owner={"developer"}
              isFav={false}
            />
            <RealCard
              title={"vila in coral gables with pool, garden"}
              price={3500000}
              owner={"developer"}
              isFav={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Related;
