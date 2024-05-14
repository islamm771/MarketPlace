import React from 'react'
import RealCard from "../../RealEstate/Items/RealCard"
import { HiArrowLongRight } from 'react-icons/hi2'

const RealSuggested = () => {
  return (
    <>
      <div className="suggested-heading mt-[50px] mb-[35px] flex items-center justify-between">
        <h3 className='text-[22px]'>Real Estates</h3>
        <a className='latest-heading-link font-[500]' href="/marketplace/realestates">
          View All <HiArrowLongRight className='inline text-[14px]' /> 
        </a>
      </div>
      <div className='grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3'>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
      </div>
    </>
  )
}

export default RealSuggested