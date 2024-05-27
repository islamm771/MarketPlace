import React from 'react'
import Hero from '../../components/marketPlaceComponents/LandingPage/HeroSection/Hero'
import video from "../../assests/marketplace/landing/vid-dev.mp4"
import LatestLunches from '../../components/marketPlaceComponents/Developer/LandingPage/LatestLunches/Latest'
import FeaturedCommunitities from '../../components/marketPlaceComponents/Developer/LandingPage/FeaturedCommunities/Featured'
import UpcomingProjects from '../../components/marketPlaceComponents/Developer/LandingPage/UpcomingProjects/Projects'
import { FaRegStar } from 'react-icons/fa'

import img_01 from "../../assests/marketplace/developer/LatestLunches/img-03.jpg"
import img_02 from "../../assests/marketplace/developer/LatestLunches/img-02.jpg"
import img_03 from "../../assests/marketplace/developer/LatestLunches/img-04.jpg"
import CountryHeroForm from '../../components/marketPlaceComponents/Developer/HeroForm/CountryHeroForm'

const DevCountry = () => {
  return (
    <div className="developer-country-container mt-[3rem] md:!mt-[5rem]">
      <Hero video={video}>
        <CountryHeroForm />
      </Hero>

      <div className="bg-white py-[4rem] lg:py-[6rem] mb-[25px]">
        <div className="marketplace-container">
          <div className="special-landing-heading">
            <span>Country</span>
            <h1>Developer Name</h1>
          </div>

          <div className="grid md:!grid-cols-2 lg!grid-cols-3">
            <div className="developer-country-card">
              <div class="card__image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_01} alt="" class="img-transition w-[100%]" />
                
              </div>

              <div class="card__image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a href="#" className='uppercase'>Soul</a>
                </h6>

                <p className='mb-[10px]'>A PLACE UNLIKE ANY OTHER</p>

                <p className="city">North Coast</p>

                
              </div>

              
            </div>
            <div className="developer-country-card">
              <div class="card__image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_02} alt="" class="img-transition w-[100%]" />
                
              </div>

              <div class="card__image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a href="#" className='uppercase'>Soul</a>
                </h6>

                <p className='mb-[10px]'>A PLACE UNLIKE ANY OTHER</p>

                <p className="city">North Coast</p>

                
              </div>

              
            </div>
            <div className="developer-country-card">
              <div class="card__image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_03} alt="" class="img-transition w-[100%]" />
                
              </div>

              <div class="card__image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a href="#" className='uppercase'>Soul</a>
                </h6>

                <p className='mb-[10px]'>A PLACE UNLIKE ANY OTHER</p>

                <p className="city">North Coast</p>

                
              </div>

              
            </div>
            <div className="developer-country-card">
              <div class="card__image-header">
                <div class="ribbon text-capitalize">
                  <span>
                    <FaRegStar className="inline me-1" />
                    featured
                  </span>
                </div>
                <img src={img_01} alt="" class="img-transition w-[100%]" />
                
              </div>

              <div class="card__image-body !p-0 !py-4">
                <h6 class="text-capitalize">
                  <a href="#" className='uppercase'>Soul</a>
                </h6>

                <p className='mb-[10px]'>A PLACE UNLIKE ANY OTHER</p>

                <p className="city">North Coast</p>

                
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <LatestLunches />

      <FeaturedCommunitities
        subtitle={"Properties"}
        title={"Featured Communities"}
      />

      <UpcomingProjects />
    </div>
  );
}

export default DevCountry