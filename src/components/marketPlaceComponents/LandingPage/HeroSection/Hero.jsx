import React from 'react'
import video_01 from "../../../../assests/marketplace/landing/1.mp4"
import "./Hero.css"
import FormInput from '../../../ui/formInput/FormInput'
import Select from '../../../ui/select/Select'

const Hero = () => {
  return (
    <div className="landing-hero-header mt-[3rem]">
			<div className="landingl-hero-header-container">
			{/* HTML5 VIDEO */}
                <video autoPlay muted loop id="myVideo">
                    <source src={video_01} type="video/mp4" />
                </video>
                <div className="header-item-form">
                    <form className='bg-white mx-[15px] px-[1.5rem] py-4 md:px-[3rem] rounded-[12px]' action="">
                      <h3 className='text-[20px] my-[10px]'>Find Your Next Home</h3>
                      <div className="form-container w-[100%] md:w-[400px] lg:w-[600px] flex items-center gap-3">
                        <FormInput  label="Search" name="product-price" type="text" />
                        <Select optionsArray={[{value:"Option 1"},{value:"Option 3"},{value:"Option 3"}]} defaultValue={"Options"} />
                        <button className='bg-[#fd6729] text-white py-[12px] px-[20px] w-fit'>Search</button>
                      </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Hero