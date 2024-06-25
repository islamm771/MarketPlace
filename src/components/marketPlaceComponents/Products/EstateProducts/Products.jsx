import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'

const EstateProducts = () => {
  return (
    <div className='estate-products-container grid !grid-cols-1 md:!grid-cols-2'>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} isFav={false}/>
        <RealCard title={"vila in coral gables with pool, garden"} downPayment={35000} owner={"Owner"} isFav={false}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"} isFav={false}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"}  isFav={false}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Owner"} isFav={false}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"} isFav={false}/>
    </div>
  )
}

export default EstateProducts