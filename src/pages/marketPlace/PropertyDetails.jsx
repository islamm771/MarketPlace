import React from 'react'
import Hero from '../../components/marketPlaceComponents/PropertyDetails/Hero/Hero'
import Info from '../../components/marketPlaceComponents/PropertyDetails/Info/Info'
import Detail from '../../components/marketPlaceComponents/PropertyDetails/Detail/Detail'
import Aside from '../../components/marketPlaceComponents/PropertyDetails/Aside/Aside'

const PropertyDetails = () => {
  return (
    <div className='mt-[3rem] md:!mt-[5rem]'>
        <Hero />
        <div className="marketplace-container">
          <div className="grid !grid-cols-12 !gap-[30px]">
            <div className="col-span-9">
              <Info />
              <Detail />
            </div>
            <div className="col-span-3">
              <Aside />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PropertyDetails