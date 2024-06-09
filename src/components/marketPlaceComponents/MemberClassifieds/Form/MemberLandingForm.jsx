import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { FaHouse,FaEarthAsia,FaMagnifyingGlass,FaBuilding  } from "react-icons/fa6";
const MemberLandingForm = () => {
  return (
    <>
      <p
        className="active btn-tabHeroFrom !py-[15px]">
        <svg
          className="me-[5px] inline"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"
            />
          </g>
        </svg>
        Classifieds
      </p>
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