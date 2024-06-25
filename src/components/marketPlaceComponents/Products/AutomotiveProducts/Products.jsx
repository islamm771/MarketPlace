import React from 'react'
import AutoCard from '../../Automotives/Items/AutoCard'
const AutomotiveProducts = () => {
  return (
    <div className='automotive-products-container grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3'>
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={false} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
    </div>
  )
}

export default AutomotiveProducts