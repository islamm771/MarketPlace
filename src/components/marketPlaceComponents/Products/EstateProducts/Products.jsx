import React from 'react'
import RealCard from '../../RealEstate/Items/RealCard'

const EstateProducts = () => {
  return (
    <div className='estate-products-container grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3'>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
        <RealCard title={"vila in coral gables with pool, garden"} downPayment={35000} owner={"Owner"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Owner"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Owner"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Agency"} />
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Owner"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
        <RealCard title={"vila in coral gables with pool, garden"} price={3500000} owner={"Developer"}/>
       
    </div>
  )
}

export default EstateProducts