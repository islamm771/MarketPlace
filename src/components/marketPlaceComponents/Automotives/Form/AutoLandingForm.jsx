import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { FaHouse,FaEarthAsia,FaMagnifyingGlass,FaBuilding  } from "react-icons/fa6";
const AutoLandingForm = () => {
  return (
    <>
      <form action="">
        <div className="form-item">
          <FaMagnifyingGlass className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <input type="text" placeholder="Search for automotive..." />
        </div>
        <div className="form-item">
          <FaHouse className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Make</label>
          <select name="" id="property">
            <option value="" selected>
              Makes
            </option>
            <option value="">Make 1</option>
            <option value="">Make 2</option>
            <option value="">Make 3</option>
            <option value="">Make 4</option>
            <option value="">Make 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item">
          <FaEarthAsia className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Model</label>
          <select name="" id="counrty">
            <option value="" selected>
              Models
            </option>
            <option value="">Model 1</option>
            <option value="">Model 2</option>
            <option value="">Model 3</option>
            <option value="">Model 4</option>
            <option value="">Model 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item">
          <FaBuilding className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Year</label>
          <select name="" id="city">
            <option value="" selected>
              Years
            </option>
            <option value="">Year 1</option>
            <option value="">Year 2</option>
            <option value="">Year 3</option>
            <option value="">Year 4</option>
            <option value="">Year 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="button-submit">
          <input type="button" value="Search" />
        </div>
      </form>
    </>
  );
}

export default AutoLandingForm