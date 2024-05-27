import React from 'react'
import Hero from '../../components/marketPlaceComponents/LandingPage/HeroSection/Hero'
import DevHeroForm from '../../components/marketPlaceComponents/Developer/HeroForm/DevHeroForm'

import video from "../../assests/marketplace/landing/vid-dev.mp4"
import LatestLunches from '../../components/marketPlaceComponents/Developer/LandingPage/LatestLunches/Latest'
import PropertyDistination from '../../components/marketPlaceComponents/Developer/LandingPage/PropertyDistinations/Property'
import FeaturedCommunitities from '../../components/marketPlaceComponents/Developer/LandingPage/FeaturedCommunities/Featured'
import UpcomingProjects from '../../components/marketPlaceComponents/Developer/LandingPage/UpcomingProjects/Projects'
import AboutUs from '../../components/marketPlaceComponents/Developer/LandingPage/AboutUs/AboutUs'


import MessageFrom from '../../components/marketPlaceComponents/Developer/LandingPage/MessageFrom/MessgaeFrom'
import Awards from '../../components/marketPlaceComponents/Developer/LandingPage/Awards/Awards'
import Status from '../../components/marketPlaceComponents/Developer/LandingPage/Status/Status'
import DirectorBoard from '../../components/marketPlaceComponents/Developer/LandingPage/DirectorsBoard/DirectorBoard'

const MarketDeveloperPage = () => {
  return (
    <div className='developer-container mt-[3rem] md:!mt-[5rem]'>
        <Hero video={video}>
            <DevHeroForm />
        </Hero>

        <LatestLunches />

        <FeaturedCommunitities title={"Featured Communities"} subtitle={"Properties"} />

        <PropertyDistination />

        <UpcomingProjects />

        <AboutUs />

        <MessageFrom />

        <Awards />

        <Status />

        <DirectorBoard />
    </div>
  )
}

export default MarketDeveloperPage