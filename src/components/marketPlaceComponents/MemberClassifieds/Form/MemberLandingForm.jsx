import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { FaHouse,FaEarthAsia,FaMagnifyingGlass,FaBuilding  } from "react-icons/fa6";
const MemberLandingForm = () => {
  return (
    <>
      <form action="">
        <div className="form-item">
          <FaMagnifyingGlass className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <input type="text" placeholder="Search for product..." />
        </div>
        <div className="form-item">
          <FaHouse className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Category</label>
          <select name="" id="property">
            <option value="" selected>
              Categories
            </option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
            <option value="">Category 4</option>
            <option value="">Category 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item">
          <FaEarthAsia className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Sub-Category</label>
          <select name="" id="counrty">
            <option value="" selected>
              Sub Categories
            </option>
            <option value="">Sub Category 1</option>
            <option value="">Sub Category 2</option>
            <option value="">Sub Category 3</option>
            <option value="">Sub Category 4</option>
            <option value="">Sub Category 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item">
          <FaBuilding className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Condition</label>
          <select name="" id="city">
            <option value="" selected>
              Conditions
            </option>
            <option value="">Condition 1</option>
            <option value="">Condition 2</option>
            <option value="">Condition 3</option>
            <option value="">Condition 4</option>
            <option value="">Condition 5</option>
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

export default MemberLandingForm