import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'
import "./Latest.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const Latest = () => {
  return (
    <div className='landing-latest bg-white py-[3rem] mb-[25px]'>
        <div className="landing-latest-container">
            <div className="latest-heading special-landing-heading flex justify-between items-center">
                <div className="latest-heading-info">
                    <span>Property</span>
                    <h1>Latest Lisitngs</h1>
                </div>
                <a className='latest-heading-link' href="#">Browse All <HiArrowLongRight className='inline text-[14px]' /> </a>
            </div>

            <div className="card-container">
                <div className="grid md:!grid-cols-2 xl:!grid-cols-3">
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    <div className="grid-item">
                    <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest