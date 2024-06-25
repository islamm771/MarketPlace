import React, { useState } from 'react'
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

import "./Amenities.css"
import FormCheckbox from '../../../ui/formCheckbox/FormCheckbox';

const Amenities = () => {
    const [isactive, setIsActive] = useState(true);
    return (
        <div className='property-details-amenities bg-white mb-[15px]'>
            <div
                className="amenities-header relative cursor-pointer"
                onClick={() => setIsActive(!isactive)}
            >
                <h3 className="text-[25px] capitalize">
                    Amenities

                </h3>
                <span className="absolute top-[7px] right-0 text-[#fd6729]">
                {isactive ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
                </span>
            </div>

            {isactive && <div className="details-amenities mt-[30px]">
                        <div className="grid md:!grid-cols-2 lg:!grid-cols-3">
                            <div className="ltn__menu-widget">
                                <ul>
                                <li className=''>
                                    <FormCheckbox label={"Air Conditioning"} id={"Air Conditioning"} name={"Air Conditioning"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Gym"} id={"Gym"} name={"Gym"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Microwave"} id={"Microwave"} name={"Microwave"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Swimming Pool"} id={"Swimming Pool"} name={"Swimming Pool"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"WiFi"} id={"WiFi"} name={"WiFi"} isChecked={true} />
                                </li>
                                </ul>
                            </div>
                            <div className="ltn__menu-widget">
                                <ul>
                                <li>
                                    <FormCheckbox label={"Barbeque"} id={"Barbeque"} name={"Barbeque"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Recreation"} id={"Recreation"} name={"Recreation"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Microwave"} id={"Microwave"} name={"Microwave"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Basketball Cout"} id={"Basketball Cout"} name={"Basketball Cout"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Fireplace"} id={"Fireplace"} name={"Fireplace"} isChecked={true} />
                                </li>
                                </ul>
                            </div>
                            <div className="ltn__menu-widget">
                                <ul>
                                <li>
                                    <FormCheckbox label={"Refrigerator"} id={"Refrigerator"} name={"Refrigerator"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Window Coverings"} id={"Window Coverings"} name={"Window Coverings"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Washer"} id={"Washer"} name={"Washer"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"24x7 Security"} id={"24x7 Security"} name={"24x7 Security"} isChecked={true} />
                                </li>
                                <li>
                                    <FormCheckbox label={"Indoor Game"} id={"Indoor Game"} name={"Indoor Game"} isChecked={true} />
                                </li>
                                </ul>
                            </div>
                        </div>
                </div>
            }
        </div>
    )
}

export default Amenities