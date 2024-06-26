import React, { useState } from "react";
import video_01 from "../../../../assests/marketplace/landing/1.mp4";
import "./Hero.css";

const Hero = ({ children, video,title , svg }) => {
  const tab = title ? (
    <p className="active btn-tabHeroFrom !py-[15px] font-[700]">
      {svg}
      {title}
    </p>
  ) :null
  return (
    <div className="landing-hero-header">
      <div className="marketplace-container">
        {/* HTML5 VIDEO */}
        <video autoPlay muted loop id="myVideo">
          <source src={video ? video : video_01} type="video/mp4" />
        </video>
        <div className="landing-hero-header-title mb-[50px]">
          <h1 className="text-white text-[40px] mb-[10px]">Hi There!</h1>
          <p className="text-white text-[20px] font-semibold">
            Find Your Next Home
          </p>
        </div>
        <div className="landing-hero-form">
          {children && <> {tab} {children}</>}
          </div>
      </div>
    </div>
  );
};

export default Hero;
