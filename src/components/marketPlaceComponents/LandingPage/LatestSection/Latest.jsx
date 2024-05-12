import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'
import "./Latest.css"
const Latest = () => {
  return (
    <div className='landing-latest bg-white py-[2rem] mb-[25px]'>
        <div className="landing-latest-container">
            <div className="latest-heading special-landing-heading text-center">
                <span>Property</span>
                <h1>Latest Lisitngs</h1>
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