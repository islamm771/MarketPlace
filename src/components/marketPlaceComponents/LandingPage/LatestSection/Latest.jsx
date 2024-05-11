import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'

const Latest = () => {
  return (
    <div className='landing-featured py-[3rem]'>
        <div className="landing-featured-container">
            <div className="featured-heading special-landing-heading text-center">
                <span>Property</span>
                <h1>Latest Lisitngs</h1>
            </div>

            <div className="card-container mt-[30px]">
                <div className="grid md:!grid-cols-2 lg:!grid-cols-3">
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