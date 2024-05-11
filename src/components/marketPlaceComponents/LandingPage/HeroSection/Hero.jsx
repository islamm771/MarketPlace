import React from 'react'
import video_01 from "../../../../assests/marketplace/landing/1.mp4"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="landing-hero-header mt-[3rem]">
			<div className="landingl-hero-header-container">
			{/* HTML5 VIDEO */}
                <video autoPlay muted loop id="myVideo">
                    <source src={video_01} type="video/mp4" />
                </video>
                <div className="header-item-info">
                    <div className="header-item-info">
                        <h6 className="header-sub-title text-center text-[#fff]"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
                        <h1 className="header-title text-center text-[#fff]">Find Your Dream <br /> House By Us</h1>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero