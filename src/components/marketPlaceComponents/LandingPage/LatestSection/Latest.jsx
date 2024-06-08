import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'
import "./Latest.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const Latest = ({children,pageTitle}) => {
    const renderMarketCards = children.map( child =>(
        <>
            <div className="grid-item">
                {child}
            </div>
        </>
    ))
  return (
    <div className='landing-latest bg-white py-[4rem] lg:py-[6rem] mb-[25px]'>
        <div className="marketplace-container">
            <div className="latest-heading special-landing-heading flex justify-between items-end">
                <div className="latest-heading-info">
                    <span>{pageTitle}</span>
                    <h1>Latest Listings</h1>
                </div>
                <a className='latest-heading-link font-[500] mb-[5px]' href="/marketplace/realestates/search">Browse All <HiArrowLongRight className='inline text-[14px]' /> </a>
            </div>

            <div className="card-container">
                <div className="grid md:!grid-cols-2 xl:!grid-cols-3">
                    {renderMarketCards}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest