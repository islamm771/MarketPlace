import React from 'react'
import RealCard from '../Items/RealCard'

const RealSold = () => {
  return (
    <div className='grid md:!grid-cols-2 3xl:!grid-cols-3'>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} isSold={true}  />
        <RealCard title={"vila in coral gables with pool, garden"} downPayment={35000} owner={"Owner"} isFav={false} isSold={true} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"} isFav={false} isSold={true} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false} isSold={true} />
    </div>
  )
}

export default RealSold