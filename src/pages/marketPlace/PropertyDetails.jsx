import React from 'react'

import Hero from '../../components/marketPlaceComponents/PropertyDetails/Hero/Hero'
import Info from '../../components/marketPlaceComponents/PropertyDetails/Info/Info'
import Detail from '../../components/marketPlaceComponents/PropertyDetails/Detail/Detail'
import Aside from '../../components/marketPlaceComponents/PropertyDetails/Aside/Aside'
import FromGallery from '../../components/marketPlaceComponents/PropertyDetails/FromGallery/FromGallery'
import Amenities from '../../components/marketPlaceComponents/PropertyDetails/Amenities/Amenities'
import FloorPlans from '../../components/marketPlaceComponents/PropertyDetails/FloorPlans/FloorPlans'



const PropertyDetails = () => {
  return (
    <div className='mt-[3rem] md:!mt-[5rem]'>
        <Hero />
        <div className="marketplace-container">
          <div className="grid lg:!grid-cols-12 !gap-[30px]">
            <div className="lg:col-span-9">
              <Info />
              <Detail />
              <FromGallery />
              <Amenities />
              <FloorPlans />
            </div>
            <div className="lg:col-span-3">
              <Aside />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PropertyDetails