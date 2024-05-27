import React from 'react'
import "./SoldPurchased.css"
const SoldPurchased = ({sold,purchased}) => {
  return (
    <>
    <div className="sold bg-[#fff] p-[20px] rounded-[12px] mb-[15px] mt-[1rem]">
        <div className="sold-container">
            <p className='mb-[40px] font-[700] text-[20px]'>Sold</p>
            {sold}
        </div>
    </div>
    <div className="purchased bg-[#fff] p-[20px] rounded-[12px]">
        <div className="purchased-container">
                <p className='mb-[40px] font-[700] text-[20px]'>Purchased</p>
                {purchased}
        </div>
    </div>
    </>
  )
}

export default SoldPurchased