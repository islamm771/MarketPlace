import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import "./Location.css"
const Location = () => {
    const [isactive, setIsActive] = useState(true);
    return (
        <div className='property-details-location bg-white mb-[15px]'>
            <div
                className="location-header relative cursor-pointer"
                onClick={() => setIsActive(!isactive)}
            >
                <h3 className="text-[25px] capitalize">
                Location
                </h3>
                <span className="absolute top-[7px] right-0 text-[#fd6729]">
                {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
                </span>
            </div>

            {isactive && <div className="property-location h-[360px] mt-[30px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>}
        </div>
    )
}

export default Location