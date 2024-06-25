import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { FaHouse,FaEarthAsia,FaMagnifyingGlass,FaBuilding,FaCode,FaPeopleGroup   } from "react-icons/fa6";

const DeveloperSearchForm = () => {
  return (
    <>
      <form action="">
        <div className="form-item search-field">
          <FaMagnifyingGlass className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <input type="text" placeholder="Search for developer..." />
        </div>
        
        <div className="form-item country-select">
          <FaEarthAsia className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Location</label>
          <select name="" id="counrty">
            <option value="" selected>
              Country
            </option>
            <option value="">Country 1</option>
            <option value="">Country 2</option>
            <option value="">Country 3</option>
            <option value="">Country 4</option>
            <option value="">Country 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item city-select">
          <FaBuilding className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Location</label>
          <select name="" id="city">
            <option value="" selected>
              City
            </option>
            <option value="">City 1</option>
            <option value="">City 2</option>
            <option value="">City 3</option>
            <option value="">City 4</option>
            <option value="">City 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>

        <div className="form-item developer-select">
          <FaCode className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Developer</label>
          <select name="" id="property">
            <option value="" selected>
              Property
            </option>
            <option value="">Developer 1</option>
            <option value="">Developer 2</option>
            <option value="">Developer 3</option>
            <option value="">Developer 4</option>
            <option value="">Developer 5</option>
          </select>
          <IoChevronDownOutline className="inline text-[#fd6729] absolute bottom-[17px] right-[15px]" />
        </div>
        <div className="form-item community-select">
          <FaPeopleGroup className="inline text-[#fd6729] absolute top-[22px] left-[15px]" />
          <label htmlFor="">Community</label>
          <select name="" id="property">
            <option value="" selected>
              Property
            </option>
            <option value="">Soul</option>
            <option value="">Marassi</option>
            <option value="">Uptown Cairo</option>
            <option value="">Bellevie</option>
            <option value="">Cairo Gate</option>
            <option value="">Mivida</option>
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

export default DeveloperSearchForm