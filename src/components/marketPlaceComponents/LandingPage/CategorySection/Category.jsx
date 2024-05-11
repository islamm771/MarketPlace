import React from 'react'
import "./Category.css"
import img_01 from "../../../../assests/marketplace/landing/Category/2.jpg"
import img_02 from "../../../../assests/marketplace/landing/Category/3.jpg"
import img_03 from "../../../../assests/marketplace/landing/Category/5.jpg"
const CategoryProperty = () => {
  return (
    <div className='landing-category py-[3rem]'>
        <div className="landing-category-container">
            <div className="category-heading special-landing-heading text-center">
                <span>Propertry</span>
                <h1>Property By Category</h1>
            </div>

            <div className="category-grid">
              <div className="grid md:!grid-cols-2 lg:!grid-rows-2 lg:!grid-cols-3 !gap-4">
                <div className='lg:col-span-2 '><img src={img_01} className='w-[100%] h-[100%] object-cover' alt="" /></div>
                <div className=''><img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" /></div>
                <div className=''><img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" /></div>
                <div className=''><img src={img_03} className='w-[100%] h-[100%] object-cover' alt="" /></div>
                <div className=''><img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" /></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryProperty