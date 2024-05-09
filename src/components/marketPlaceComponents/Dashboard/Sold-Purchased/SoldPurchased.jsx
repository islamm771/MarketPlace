import React from 'react'
import "./SoldPurchased.css"
const SoldPurchased = ({sold,purchased}) => {
  return (
    <>
    <div className="sold bg-[#fff] p-[20px] rounded-[12px] mb-[15px] mt-[1rem]">
        <div className="sold-container">
            <h3 className='text-[20px] mb-[15px]'>1. Sold</h3>
            {sold}
        </div>
    </div>
    <div className="purchased bg-[#fff] p-[20px] rounded-[12px]">
        <div className="purchased-container">
                <h3 className='text-[20px] mb-[15px]'>2. Purchased</h3>
                {purchased}
        </div>
    </div>
    </>
  )
}

export default SoldPurchased