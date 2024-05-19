import React, { useState } from 'react'
import video_01 from "../../../../assests/marketplace/landing/1.mp4"
import "./Hero.css"

const Hero = ({children}) => {
  
  return (
    <div className="landing-hero-header">
      <div className="landing-hero-header-container">
        {/* HTML5 VIDEO */}
        <video autoPlay muted loop id="myVideo">
          <source src={video_01} type="video/mp4" />
        </video>
        <div className="landing-hero-header-title mb-[50px]">
          <h1 className="text-white text-[40px] mb-[10px]">Hi There!</h1>
          <p className="text-white text-[20px] font-semibold">
            Find Your Next Home
          </p>
        </div>
        <div className="landing-hero-form">
          {children && <>{children}</>}
        </div>
      </div>
    </div>
  );
}

export default Hero