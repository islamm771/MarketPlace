import "./AutoFav.css"
import React from 'react'
import AutoCard from '../Items/AutoCard'

const AutoFav = () => {
  return (
      <div className="grid md:!grid-cols-2 3xl:!grid-cols-3">
         <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={true} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={true} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={true} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={true} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
        <AutoCard 
        title={"BMW M6 Gran Coupe 2019"} 
        location={"Cairo, El Maadi"}
        price={3500000} 
        owner={"Agency"} 
        isFav={true} carBrand={"BMW"} carModel={'M6'} carYear={"2019"}
         />
      </div>
  )
}

export default AutoFav