import React from 'react'
import "./AboutUs.css"

import { PiHouse } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";

import about_us_img from "../../../../../assests/marketplace/developer/AboutUs/img-01.png"

const AboutUs = () => {
  return (
    <div className="about-us-section bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
      <div className="marketplace-container">
        <div className="grid md:!grid-cols-2">
        <div>
          <div class="about-us-img-wrap about-img-left">
            <img className='lg:!w-[550px]' src={about_us_img} alt="About Us Image" />
          </div>
        </div>

        <div className="about-us-info-wrap">

          <div className="aboutUs-heading special-landing-heading">
              <span>About Us</span>
              <h1 className="">Dream Living Spaces Setting New Build</h1>
              <p className="my-[30px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae perspiciatis, reprehenderit iure aspernatur quaerat
                  minus quibusdam dignissimos deleniti repudiandae commodi
                  assumenda, ipsum dolores temporibus quasi dicta cumque quo
                  tempore excepturi!
              </p>
          </div>
          <div className="about-us-item">
            <div className="about-us-icon">
              <PiHouse />
            </div>
            <div className="about-us-info">
              <h4>
                <a href="service-details.html">The Perfect Residency</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>
          <div className="about-us-item">
            <div className="about-us-icon">
              <span>
                {/* <i className="flaticon-call-center-agent" /> */}
                {/* <img src={callcenter_img} alt="" /> */}
                <RiCustomerService2Line />
              </span>
            </div>
            <div className="about-us-info">
              <h4>
                <a href="service-details.html">Global Architect Experts</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>
          <div className="about-us-item">
            <div className="about-us-icon">
              <GrMapLocation />
            </div>
            <div className="about-us-info">
              <h4>
                <a href="service-details.html">Built-in Storage Cupboards</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs