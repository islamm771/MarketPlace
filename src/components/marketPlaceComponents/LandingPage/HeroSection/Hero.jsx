import React from 'react'
import video_01 from "../../../../assests/marketplace/landing/1.mp4"
import "./Hero.css"
import { IoChevronDownOutline } from "react-icons/io5";
import { FaHouse,FaEarthAsia,FaMagnifyingGlass,FaBuilding  } from "react-icons/fa6";


// import FormInput from '../../../ui/formInput/FormInput'
// import Select from '../../../ui/select/Select'

const Hero = (props) => {
  return (
    <div className="landing-hero-header mt-[3rem]">
			<div className="landing-hero-header-container">
			{/* HTML5 VIDEO */}
                <video autoPlay muted loop id="myVideo">
                    <source src={video_01} type="video/mp4" />
                </video>
                <div className="landing-hero-header-title mb-[50px]">
                  <h1 className='text-white text-[40px] mb-[10px]'>Hi There!</h1>
                  <p className='text-white text-[20px] font-semibold'>Find Your Next Home</p>
                </div>
                <div className="landing-hero-form">
                  <form action="">
                    <div className="form-item">
                      <FaMagnifyingGlass className='inline text-[#fd6729] absolute top-[22px] left-[15px]' />
                      <input type="text" placeholder='Search for building...' />
                    </div>
                    <div className="form-item">
                      <FaHouse className='inline text-[#fd6729] absolute top-[22px] left-[15px]' />
                      <label htmlFor="">Type</label>
                      <select name="" id="property">
                        <option value="" selected>Property</option>
                        <option value="">Property 1</option>
                        <option value="">Property 2</option>
                        <option value="">Property 3</option>
                        <option value="">Property 4</option>
                        <option value="">Property 5</option>
                      </select>
                      <IoChevronDownOutline className='inline text-[#fd6729] absolute bottom-[17px] right-[15px]' />
                    </div>
                    <div className="form-item">
                      <FaEarthAsia className='inline text-[#fd6729] absolute top-[22px] left-[15px]' />
                      <label htmlFor="">Location</label>
                      <select name="" id="counrty">
                          <option value="" selected>Country</option>
                          <option value="">Country 1</option>
                          <option value="">Country 2</option>
                          <option value="">Country 3</option>
                          <option value="">Country 4</option>
                          <option value="">Country 5</option>
                      </select>
                      <IoChevronDownOutline className='inline text-[#fd6729] absolute bottom-[17px] right-[15px]' />
                    </div>
                    <div className="form-item">
                      <FaBuilding className='inline text-[#fd6729] absolute top-[22px] left-[15px]' />
                      <label htmlFor="">Location</label>
                      <select name="" id="city">
                          <option value="" selected>City</option>
                          <option value="">City 1</option>
                          <option value="">City 2</option>
                          <option value="">City 3</option>
                          <option value="">City 4</option>
                          <option value="">City 5</option>
                      </select>
                      <IoChevronDownOutline className='inline text-[#fd6729] absolute bottom-[17px] right-[15px]' />
                    </div>
                    <div className='button-submit'><input type="button" value="Search" /></div>
                  </form>
                </div>
            </div>
    </div>
  )
}

export default Hero