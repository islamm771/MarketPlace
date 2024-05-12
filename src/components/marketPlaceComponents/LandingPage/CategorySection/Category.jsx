import React from 'react'
import "./Category.css"
import img_01 from "../../../../assests/marketplace/landing/Category/2.jpg"
import img_02 from "../../../../assests/marketplace/landing/Category/3.jpg"
import img_03 from "../../../../assests/marketplace/landing/Category/4.jpg"
import img_04 from "../../../../assests/marketplace/landing/Category/5.jpg"
const Category = () => {
  return (
    <div className='landing-category bg-white py-[2rem] mb-[25px]'>
        <div className="landing-category-container">
            <div className="category-heading special-landing-heading text-center">
                <span>Propertry</span>
                <h1>Property By Category</h1>
            </div>

            <div className="category-grid">
              <div className="grid md:!grid-cols-2 lg:!grid-rows-2 lg:!grid-cols-3 !gap-4">
                <div className='grid-item lg:col-span-2 '>
                  <img src={img_01} className='' alt="" />
                  <div className='category-title-wrapper'>
                    <div className='category-title-info'>
                      <h3 class="animated fadeIn">
                        <a href="#/shop"> Apartments </a>
                      </h3>
                      <p> Great Deals Available</p>
                      <mark> 13 Listings</mark>
                    </div>
                  </div>
                </div>
                <div className='grid-item'>
                  <img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" />
                  <div className='category-title-wrapper'>
                    <div className='category-title-info'>
                      <h3 class="animated fadeIn">
                        <a href="#/shop"> Apartments </a>
                      </h3>
                      <p> Great Deals Available</p>
                      <mark> 13 Listings</mark>
                    </div>
                  </div>
                  </div>
                <div className='grid-item'>
                  <img src={img_03} className='w-[100%] h-[100%] object-cover' alt="" />
                  <div className='category-title-wrapper'>
                    <div className='category-title-info'>
                      <h3 class="animated fadeIn">
                        <a href="#/shop"> Apartments </a>
                      </h3>
                      <p> Great Deals Available</p>
                      <mark> 13 Listings</mark>
                    </div>
                  </div>
                  </div>
                <div className='grid-item'>
                  <img src={img_04} className='w-[100%] h-[100%] object-cover' alt="" />
                  <div className='category-title-wrapper'>
                    <div className='category-title-info'>
                      <h3 class="animated fadeIn">
                        <a href="#/shop"> Apartments </a>
                      </h3>
                      <p> Great Deals Available</p>
                      <mark> 13 Listings</mark>
                    </div>
                  </div>
                  </div>
                <div className='grid-item'>
                  <img src={img_02} className='w-[100%] h-[100%] object-cover' alt="" />
                  <div className='category-title-wrapper'>
                    <div className='category-title-info'>
                      <h3 class="animated fadeIn">
                        <a href="#/shop"> Apartments </a>
                      </h3>
                      <p> Great Deals Available</p>
                      <mark> 13 Listings</mark>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Category