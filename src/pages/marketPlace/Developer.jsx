import React from 'react'
import Hero from '../../components/marketPlaceComponents/LandingPage/HeroSection/Hero'
import DevHeroForm from '../../components/marketPlaceComponents/Developer/HeroForm/DevHeroForm'

import video from "../../assests/marketplace/landing/vid-dev.mp4"
import LatestLunches from '../../components/marketPlaceComponents/Developer/LandingPage/LatestLunches/Latest'
import PropertyDistination from '../../components/marketPlaceComponents/Developer/LandingPage/PropertyDistinations/Property'
import FeaturedCommunitities from '../../components/marketPlaceComponents/Developer/LandingPage/FeaturedCommunities/Featured'

import commun_img_01 from "../../assests/marketplace/developer/FeaturedCommunitties/img-01.jpg"
import commun_img_02 from "../../assests/marketplace/developer/FeaturedCommunitties/img-02.jpg"
import commun_img_03 from "../../assests/marketplace/developer/FeaturedCommunitties/img-03.jpg"
import commun_img_04 from "../../assests/marketplace/developer/FeaturedCommunitties/img-04.jpg"
import commun_img_05 from "../../assests/marketplace/developer/FeaturedCommunitties/img-05.jpg"

const communitities_imgs = [commun_img_01,commun_img_02,commun_img_03,commun_img_04,commun_img_05]

const MarketDeveloperPage = () => {
  return (
    <div className='developer-container mt-[3rem] md:!mt-[5rem]'>
        <Hero video={video}>
            <DevHeroForm />
        </Hero>

        <LatestLunches />

        <FeaturedCommunitities title={"Featured Communities"} subtitle={"Properties"} imgs={communitities_imgs} />

        <PropertyDistination pageTitle={"Properties"} />
            
    </div>
  )
}

export default MarketDeveloperPage