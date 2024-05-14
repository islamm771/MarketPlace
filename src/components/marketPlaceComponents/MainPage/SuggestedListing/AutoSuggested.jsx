import React from 'react'
import AutoCard from "../../Automotives/Items/AutoCard"
import { HiArrowLongRight } from 'react-icons/hi2'

const AutoSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Automotives</h3>
        <a className='latest-heading-link font-[500]' href="/marketplace/automotives">
          View All <HiArrowLongRight className='inline text-[14px]' /> 
        </a>
      </div>
      <div className='grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3'>
      <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
      <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
      <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
        />
      </div>
    </>
  )
}

export default AutoSuggested