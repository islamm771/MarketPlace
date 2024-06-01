import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./FromGallery.css"

import img_01 from "../../../../assests/marketplace/Properties/Gallery/1.jpg"
import img_02 from "../../../../assests/marketplace/Properties/Gallery/2.jpg"
import img_03 from "../../../../assests/marketplace/Properties/Gallery/3.jpg"


const FromGallery = () => {
    const [isactive, setIsActive] = useState(false);
    return (
        <div className='property-details-gallery bg-white mb-[15px]'>
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

            {isactive && <div className='grid !grid-cols-2 !gap-[30px] mt-[30px]'>
                
                <div className=''>
                    <a href="#"> <img className='h-[100%] mb-[30px]' src={img_01} alt="" /> </a>
                    <a href="#"> <img className='h-[100%]' src={img_02} alt="" /> </a>
                </div>
                <div className=''>
                    <a href="#"> <img className='h-[100%]' src={img_03} alt="" /> </a>
                </div>

            </div>
            }
        </div>
    )
}

export default FromGallery