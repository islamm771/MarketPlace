import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

import "./FromGallery.css"
const FromGallery = () => {
    const [isactive, setIsActive] = useState(false);
    return (
        <div className='property-details-gallery bg-white mb-[25px]'>
            <div
                className="gallery-header relative cursor-pointer"
                onClick={() => setIsActive(!isactive)}
            >
                <h3 className="text-[25px] capitalize">
                From Our Gallery

                </h3>
                <span className="absolute top-[7px] right-0 text-[#fd6729]">
                {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
                </span>
            </div>

            {isactive && <div className='mt-[30px]'>Photos</div>}
        </div>
    )
}

export default FromGallery