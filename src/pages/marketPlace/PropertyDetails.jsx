import React from 'react'
import Hero from '../../components/marketPlaceComponents/PropertyDetails/Hero/Hero'
import Info from '../../components/marketPlaceComponents/PropertyDetails/Info/Info'
import Detail from '../../components/marketPlaceComponents/PropertyDetails/Detail/Detail'

const PropertyDetails = () => {
  return (
    <div className='mt-[3rem] md:!mt-[5rem]'>
        <Hero />
        <div className="marketplace-container">
          <Info />
          <Detail />
        </div>
    </div>
  )
}

export default PropertyDetails